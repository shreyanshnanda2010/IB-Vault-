"use client";

import Link from "next/link";
import { useState } from "react";

export default function UploadPage() {
  const [topics, setTopics] = useState("");

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <Link href="/" className="mb-6 inline-flex text-sm text-slate-400 hover:text-white">
          ← Back to home
        </Link>

        <h1 className="text-3xl font-black">Upload papers</h1>
        <p className="mt-3 text-slate-400">
          Share your own IB resources today. Add the paper title and list the topics covered so everything is easy to browse.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Subject</label>
            <input className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none" placeholder="e.g. Mathematics AA" />
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

          <button type="button" className="rounded-2xl bg-violet-600 px-5 py-3 font-semibold transition hover:bg-violet-500">
            Submit for review
          </button>
        </form>
      </div>
    </main>
  );
}
