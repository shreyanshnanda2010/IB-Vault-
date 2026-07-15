import {
  Atom,
  Calculator,
  FlaskConical,
  Leaf,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type PaperCategory = {
  name: string;
  description: string;
  papers: Array<{
    title: string;
    topics: string[];
    fileName?: string;
    fileUrl?: string;
    uploadedAt?: string;
  }>;
};

export type Subject = {
  title: string;
  slug: string;
  icon: LucideIcon;
  color: string;
  blurb: string;
  categories: PaperCategory[];
};

export const subjects: Subject[] = [
  {
    title: "Mathematics AA",
    slug: "mathematics-aa",
    icon: Calculator,
    color: "from-violet-500 to-fuchsia-500",
    blurb: "Core calculations, proofs and exam technique.",
    categories: [
      {
        name: "Topic Tests",
        description: "Short focused tests on specific topics.",
        papers: [],
      },
      {
        name: "Mixed Topic Tests",
        description: "Mixed sets combining multiple topics.",
        papers: [],
      },
      {
        name: "Mocks/Prelims",
        description: "Full-length mock and prelim-style practice papers.",
        papers: [],
      },
      {
        name: "IB Past Papers",
        description: "Past exam-style papers for revision.",
        papers: [],
      },
    ],
  },
  {
    title: "Physics",
    slug: "physics",
    icon: Atom,
    color: "from-cyan-500 to-blue-500",
    blurb: "Mechanics, electricity and data-based questions.",
    categories: [
      {
        name: "Topic Tests",
        description: "Focused tests on selected physics topics.",
        papers: [],
      },
      {
        name: "Mixed Topic Tests",
        description: "Combined topics and multi-step questions.",
        papers: [],
      },
      {
        name: "Mocks/Prelims",
        description: "Timed mock and prelim-style papers.",
        papers: [],
      },
      {
        name: "IB Past Papers",
        description: "Past exam-style papers for review.",
        papers: [],
      },
    ],
  },
  {
    title: "Chemistry",
    slug: "chemistry",
    icon: FlaskConical,
    color: "from-pink-500 to-red-500",
    blurb: "Reactions, mechanisms and calculations.",
    categories: [
      {
        name: "Topic Tests",
        description: "Focused topic-by-topic chemistry tests.",
        papers: [],
      },
      {
        name: "Mixed Topic Tests",
        description: "Interleaved chemistry questions.",
        papers: [],
      },
      {
        name: "Mocks/Prelims",
        description: "Mock and prelim-style full papers.",
        papers: [],
      },
      {
        name: "IB Past Papers",
        description: "Past papers for exam review.",
        papers: [],
      },
    ],
  },
  {
    title: "Biology",
    slug: "biology",
    icon: Leaf,
    color: "from-green-500 to-emerald-500",
    blurb: "Diagrams, experiments and command terms.",
    categories: [
      {
        name: "Topic Tests",
        description: "Topic-focused biology tests.",
        papers: [],
      },
      {
        name: "Mixed Topic Tests",
        description: "Mixed biology question sets.",
        papers: [],
      },
      {
        name: "Mocks/Prelims",
        description: "Mock and prelim-style biology papers.",
        papers: [],
      },
      {
        name: "IB Past Papers",
        description: "Past biology exam papers.",
        papers: [],
      },
    ],
  },
  {
    title: "Economics",
    slug: "economics",
    icon: TrendingUp,
    color: "from-orange-400 to-yellow-400",
    blurb: "Graphs, essay plans and application practice.",
    categories: [
      {
        name: "Topic Tests",
        description: "Focused economics topic tests.",
        papers: [],
      },
      {
        name: "Mixed Topic Tests",
        description: "Mixed economics application sets.",
        papers: [],
      },
      {
        name: "Mocks/Prelims",
        description: "Mock papers and prelim style practice.",
        papers: [],
      },
      {
        name: "IB Past Papers",
        description: "Past economics exam-style papers.",
        papers: [],
      },
    ],
  },
];

export function getAllSubjects() {
  return subjects;
}

export function getSubjectBySlug(slug: string) {
  return subjects.find((subject) => subject.slug === slug);
}
