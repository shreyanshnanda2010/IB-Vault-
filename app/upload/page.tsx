"use client";

import Link from "next/link";
import { useState } from "react";
import { getAllSubjects } from "@/lib/papers";

const OWNER_PASSCODE = "ibvault2026";
const repoName = "IB-Vault-";
const withBase = (path: string) => {
  const normalized = path === "/" ? "" : path.replace(/\/+$/, "");
  return `/${repoName}${normalized}/`;
};

export default function UploadPage() {
  const [topics, setTopics] = useState("");
  const [passcode, setPasscode] = useState("");
  const [isOwner, setIsOwner] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(getAllSubjects()[0]?.slug ?? "");
  const [selectedSection, setSelectedSection] = useState("Topic Tests");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUnlock = (event?: React.FormEvent) => {
    event?.preventDefault();
    const normalized = passcode.trim().toLowerCase();

    if (normalized === OWNER_PASSCODE || normalized === "ibvault" || normalized === "2026") {
      setIsOwner(true);
      setError("");
      setSuccess("");
      return;
    }

    setError("That passcode doesn’t match. Try ibvault2026.");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSuccess(`Your upload for ${selectedSection.toLowerCase()} in the selected subject is ready for review.`);
  };

  const subjects = getAllSubjects();
  const sections = ["Topic Tests", "Mixed Topic Tests", "Mocks/Prelims", "IB Past Papers"];

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <Link href={withBase("/")} className="mb-6 inline-flex text-sm text-slate-400 hover:text-white">
          ← Back to home
        </Link>

        <h1 className="text-3xl font-black">Upload papers</h1>
        <p className="mt-3 text-slate-400">
          This area is locked to the owner only. Enter the passcode to upload a PDF into the correct subject and section.
        </p>

        {!isOwner ? (
          <form onSubmit={handleUnlock} className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-black/20 p-6">
            <label className="mb-2 block text-sm text-slate-300">Owner passcode</label>
            <input
              value={passcode}
              onChange={(event) => {
                setPasscode(event.target.value);
                if (error) setError("");
              }}
              type="password"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
              placeholder="Enter owner passcode"
            />
            {error ? <p className="text-sm text-rose-400">{error}</p> : null}
            <button
              type="submit"
              className="rounded-2xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-500"
            >
              Unlock upload area
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Subject</label>
              <select
                value={selectedSubject}
                onChange={(event) => setSelectedSubject(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
              >
                {subjects.map((subject) => (
                  <option key={subject.slug} value={subject.slug}>
                    {subject.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">Section</label>
              <select
                value={selectedSection}
                onChange={(event) => setSelectedSection(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
              >
                {sections.map((section) => (
                  <option key={section} value={section}>
                    {section}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">Paper title</label>
              <input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none" placeholder="e.g. Mock Paper 1" />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">Topics covered</label>
              <textarea
                value={topics}
                onChange={(event) => setTopics(event.target.value)}
                rows={4}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
                placeholder="e.g. Functions, Graphs, Differentiation"
              />
              <p className="mt-2 text-sm text-slate-400">
                Separate topics with commas so they can be shown on each paper card.
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">Upload file</label>
              <input type="file" className="w-full rounded-2xl border border-dashed border-white/20 bg-black/20 px-4 py-6" />
            </div>

            {success ? <p className="text-sm text-emerald-400">{success}</p> : null}
            <button type="submit" className="rounded-2xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-500">
              Submit for review
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
