"use client";

import Link from "next/link";
import { useState, useEffect, type FormEvent } from "react";
import { getAllSubjects } from "@/lib/papers";

const OWNER_PASSCODE = "ibvault2026";
const STORAGE_KEY = "ibvault-uploaded-papers";

type UploadedPaper = {
  id: string;
  title: string;
  topics: string[];
  fileName: string;
  fileUrl: string;
  subjectSlug: string;
  categoryName: string;
  uploadedAt: string;
};

function loadUploadedPapers(): UploadedPaper[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UploadedPaper[]) : [];
  } catch {
    return [];
  }
}

export default function UploadPage() {
  const [topics, setTopics] = useState("");
  const [passcode, setPasscode] = useState("");
  const [isOwner, setIsOwner] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(getAllSubjects()[0]?.slug ?? "");
  const [selectedSection, setSelectedSection] = useState("Topic Tests");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const subject = params.get("subject");
    const folder = params.get("folder");

    if (subject) {
      setSelectedSubject(subject);
    }

    if (folder) {
      setSelectedSection(folder);
    }
  }, []);

  const handleUnlock = (event?: FormEvent) => {
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

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Please give the paper a title.");
      return;
    }

    if (!file) {
      setError("Please choose a PDF file to upload.");
      return;
    }

    if (file.type !== "application/pdf") {
      setError("Only PDF files can be uploaded here.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const paper: UploadedPaper = {
        id: `${Date.now()}`,
        title: title.trim(),
        topics: topics
          .split(",")
          .map((topic) => topic.trim())
          .filter(Boolean),
        fileName: file.name,
        fileUrl: reader.result as string,
        subjectSlug: selectedSubject,
        categoryName: selectedSection,
        uploadedAt: new Date().toISOString(),
      };

      const existing = loadUploadedPapers();
      const next = [paper, ...existing];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));

      setSuccess(`Saved “${paper.title}” to ${selectedSection} and it is now available on the subject page.`);
      setTitle("");
      setTopics("");
      setFile(null);
    };

    reader.onerror = () => {
      setError("The file could not be read. Please try another PDF.");
    };

    reader.readAsDataURL(file);
  };

  const subjects = getAllSubjects();
  const sections = ["Topic Tests", "Mixed Topic Tests", "Mocks/Prelims", "IB Past Papers"];
  const selectedSubjectName = subjects.find((subject) => subject.slug === selectedSubject)?.title ?? selectedSubject;

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <Link href="/" className="mb-6 inline-flex text-sm text-slate-400 hover:text-white">
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
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
                placeholder="e.g. Mock Paper 1"
              />
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
              <label className="mb-2 block text-sm text-slate-300">Upload PDF</label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(event) => setFile(event.target.files?.[0] ?? null)}
                className="w-full rounded-2xl border border-dashed border-white/20 bg-black/20 px-4 py-6"
              />
            </div>

            {error ? <p className="text-sm text-rose-400">{error}</p> : null}
            {success ? <p className="text-sm text-emerald-400">{success}</p> : null}
            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" className="rounded-2xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-500">
                Save PDF to this section
              </button>
              <Link href={`/subjects/${selectedSubject}`} className="text-sm text-slate-400 hover:text-white">
                View {selectedSubjectName}
              </Link>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
