import Link from "next/link";

const repoName = "IB-Vault-";
const withBase = (path: string) => {
  const normalized = path === "/" ? "" : path.replace(/\/+$/, "");
  return `/${repoName}${normalized}/`;
};

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Link href={withBase("/")} className="text-2xl font-black tracking-tight text-white">
          IB Vault
        </Link>

        <div className="flex gap-3">
          <Link href={withBase("/upload")} className="rounded-xl border border-violet-400/40 bg-violet-500/15 px-5 py-2 font-medium text-violet-200 transition hover:bg-violet-500/25">
            Upload Papers
          </Link>
          <Link href={withBase("/contact")} className="rounded-xl bg-violet-600 px-5 py-2 font-medium text-white transition hover:bg-violet-500">
            Want to contribute?
          </Link>
        </div>
      </div>
    </nav>
  );
}