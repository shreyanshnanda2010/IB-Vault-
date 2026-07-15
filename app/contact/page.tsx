import Link from "next/link";

const repoName = "IB-Vault-";
const withBase = (path: string) => (path === "/" ? `/${repoName}` : `/${repoName}${path}`);

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
          Contribute
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight">
          Want to share IB papers?
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          You can send your resources directly to me and I&apos;ll help get them added to the vault.
        </p>

        <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-black/20 p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Email</p>
            <a href="mailto:shreyansh@example.com" className="mt-1 block text-xl font-semibold text-violet-200 hover:text-violet-100">
              shreyansh@example.com
            </a>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Instagram</p>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-1 block text-xl font-semibold text-violet-200 hover:text-violet-100">
              @yourhandle
            </a>
          </div>
        </div>

        <Link href={withBase("/")} className="mt-8 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/10">
          Back home
        </Link>
      </div>
    </main>
  );
}
