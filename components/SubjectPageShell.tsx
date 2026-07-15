import Link from "next/link";
import { notFound } from "next/navigation";
import { getSubjectBySlug } from "@/lib/papers";

export default function SubjectPageShell({ slug }: { slug: string }) {
  const subject = getSubjectBySlug(slug);

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
          {subject.categories.map((category) => (
            <section key={category.name} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-bold">{category.name}</h2>
              <p className="mt-2 text-slate-400">{category.description}</p>

              <ul className="mt-6 space-y-3">
                {category.papers.map((paper) => (
                  <li key={paper.title} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-slate-200">
                    <div className="font-semibold">{paper.title}</div>
                    {paper.topics.length > 0 ? (
                      <div className="mt-2 text-sm text-slate-400">Topics: {paper.topics.join(" • ")}</div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
