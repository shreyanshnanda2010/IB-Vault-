"use client";

import { Search } from "lucide-react";
import Link from "next/link";

const repoName = "IB-Vault-";
const withBase = (path: string) => {
  const normalized = path === "/" ? "" : path.replace(/\/+$/, "");
  return `/${repoName}${normalized}/`;
};

export default function Hero({ search, onSearchChange }: { search: string; onSearchChange: (value: string) => void }) {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 text-center">
      <h1 className="text-5xl font-black tracking-tight md:text-7xl">
        Practice{" "}
        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          Smarter.
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
        Free IB practice papers organised for printing, revision and success.
      </p>

      <div className="mx-auto mt-10 flex max-w-3xl items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
        <Search className="text-slate-400" />

        <input
          type="text"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search papers..."
          className="ml-4 w-full bg-transparent text-lg outline-none placeholder:text-slate-500"
        />
      </div>

      <div className="mx-auto mt-8 flex max-w-3xl justify-center gap-3">
        <Link href={withBase("/upload")} className="rounded-full border border-violet-400/40 bg-violet-500/15 px-4 py-2 text-sm font-medium text-violet-200 hover:bg-violet-500/25">
          Upload papers
        </Link>
        <Link href={withBase("/contact")} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/10">
          Want to contribute?
        </Link>
      </div>
    </section>
  );
}