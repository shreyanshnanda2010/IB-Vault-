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
  papers: string[];
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
        name: "Pure Practice",
        description: "Algebra, calculus and functions.",
        papers: ["Functions and Graphs", "Differentiation Drill"],
      },
      {
        name: "Mixed Practice",
        description: "Interleaved questions across topics.",
        papers: ["Paper 1 Mixed Set", "Paper 2 Timed Review"],
      },
      {
        name: "Past Papers",
        description: "Past exam-style reviews.",
        papers: ["May 2024 SL/HL Review", "Nov 2023 Practice"],
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
        name: "Pure Practice",
        description: "Definitions, derivations and problem sets.",
        papers: ["Kinematics Coach", "Waves Practice"],
      },
      {
        name: "Mock Papers",
        description: "Full-length timed mocks.",
        papers: ["Mock Paper A", "Mock Paper B"],
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
        name: "Past Papers",
        description: "Exams that focus on core content.",
        papers: ["2024 Paper Review", "2023 Topic Pack"],
      },
      {
        name: "Mixed Practice",
        description: "Data-based and conceptual challenge sets.",
        papers: ["Data Analysis Pack", "Short Response Drill"],
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
        name: "Pure Practice",
        description: "Topic-by-topic worksheet packs.",
        papers: ["Cells and Membranes", "Genetics Review"],
      },
      {
        name: "Mock Papers",
        description: "Longer mixed practice sessions.",
        papers: ["Bio Mock 1", "Bio Mock 2"],
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
        name: "Past Papers",
        description: "Exam-style essay and data response packs.",
        papers: ["May 2024 Essay Pack", "Nov 2023 Data Response"],
      },
      {
        name: "Mixed Practice",
        description: "Quick quizzes and application prompts.",
        papers: ["Policy Application Set", "Graph Interpretation Drill"],
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
