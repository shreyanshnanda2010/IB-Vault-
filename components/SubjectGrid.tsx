"use client";

import Link from "next/link";
import { getAllSubjects } from "@/lib/papers";

export default function SubjectGrid({ search }: { search: string }) {
  const subjects = getAllSubjects().filter((subject) => {
    const query = search.toLowerCase();
    return (
      subject.title.toLowerCase().includes(query) ||
      subject.blurb.toLowerCase().includes(query) ||
      subject.categories.some((category) => category.name.toLowerCase().includes(query))
    );
  });

  return (
    <section id="subjects" className="mx-auto mt-12 max-w-6xl px-6 pb-24">
      <h2 className="mb-8 text-3xl font-bold">Subjects</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => {
          const Icon = subject.icon;

          return (
            <div
              key={subject.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all hover:border-violet-500/40 hover:bg-white/10"
            >
              <Link href={`/subjects/${subject.slug}/`} className="block">
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${subject.color}`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold transition group-hover:text-violet-300">
                  {subject.title}
                </h3>

                <p className="mt-3 text-sm text-slate-400">{subject.blurb}</p>

                <p className="mt-4 text-slate-400">
                  {subject.categories.map((category) => category.name).join(" • ")}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}