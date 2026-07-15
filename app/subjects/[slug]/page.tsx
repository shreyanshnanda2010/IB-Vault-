import Link from "next/link";
import { notFound } from "next/navigation";
import { getSubjectBySlug } from "@/lib/papers";

export default function SubjectPage({ params }: { params: { slug: string } }) {
  const subject = getSubjectBySlug(params.slug);

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
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {subject.categories.map((category) => (
            <section key={category.name} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-2xl font-bold">{category.name}</h2>
              <p className="mt-2 text-slate-400">{category.description}</p>

              <ul className="mt-6 space-y-3">
                {category.papers.map((paper) => (
                  <li key={paper} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-slate-200">
                    {paper}
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
