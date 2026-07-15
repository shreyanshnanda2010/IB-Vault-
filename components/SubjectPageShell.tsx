"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { getSubjectBySlug } from "@/lib/papers";

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

export default function SubjectPageShell({ slug }: { slug: string }) {
  const subject = getSubjectBySlug(slug);
  const [uploadedPapers, setUploadedPapers] = useState<UploadedPaper[]>([]);

  useEffect(() => {
    setUploadedPapers(loadUploadedPapers());
  }, [slug]);

  if (!subject) {
    notFound();
  }

  const Icon = subject.icon;

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="mb-8 inline-flex text-sm text-slate-400 hover:text-white">
          ← Back to home
        </Link>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${subject.color}`}>
            <Icon size={30} />
          </div>

          <h1 className="text-4xl font-black">{subject.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-400">{subject.blurb}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/upload/?subject=${subject.slug}&folder=Topic%20Tests`}
              className="rounded-full border border-violet-400/40 bg-violet-500/15 px-4 py-2 text-sm font-medium text-violet-200 hover:bg-violet-500/25"
            >
              Upload into this subject
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {subject.categories.map((category) => {
            const categoryPapers = [
              ...category.papers,
              ...uploadedPapers.filter((paper) => paper.subjectSlug === slug && paper.categoryName === category.name),
            ];

            return (
              <section key={category.name} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <p className="mt-2 text-slate-400">{category.description}</p>

                {categoryPapers.length > 0 ? (
                  <ul className="mt-6 space-y-3">
                    {categoryPapers.map((paper) => (
                      <li key={`${paper.title}-${paper.fileName ?? "static"}`} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-slate-200">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <div className="font-semibold">{paper.title}</div>
                            {paper.topics.length > 0 ? (
                              <div className="mt-2 text-sm text-slate-400">Topics: {paper.topics.join(" • ")}</div>
                            ) : null}
                            {paper.fileName ? (
                              <div className="mt-2 text-sm text-slate-500">PDF: {paper.fileName}</div>
                            ) : null}
                          </div>
                          {paper.fileUrl ? (
                            <a
                              href={paper.fileUrl}
                              target="_blank"
                              rel="noreferrer"
                              download={paper.fileName}
                              className="rounded-full border border-violet-400/40 bg-violet-500/15 px-3 py-1.5 text-sm font-medium text-violet-200 hover:bg-violet-500/25"
                            >
                              Open PDF
                            </a>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-6 rounded-2xl border border-dashed border-white/10 bg-black/10 px-4 py-6 text-sm text-slate-400">
                    No PDFs uploaded for this section yet. Use the upload button to add the first one.
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
