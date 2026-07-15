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
        papers: [
          { title: "Functions and Graphs", topics: ["Functions", "Graphs"] },
          { title: "Differentiation Drill", topics: ["Differentiation"] },
        ],
      },
      {
        name: "Mixed Topic Tests",
        description: "Mixed sets combining multiple topics.",
        papers: [
          { title: "Paper 1 Mixed Set", topics: ["Algebra", "Calculus", "Probability"] },
          { title: "Paper 2 Timed Review", topics: ["Functions", "Trigonometry", "Statistics"] },
        ],
      },
      {
        name: "Mocks/Prelims",
        description: "Full-length mock and prelim-style practice papers.",
        papers: [
          { title: "May 2024 Mock", topics: ["All Topics"] },
          { title: "Nov 2023 Prelim", topics: ["All Topics"] },
        ],
      },
      {
        name: "IB Past Papers",
        description: "Past exam-style papers for revision.",
        papers: [
          { title: "May 2024 SL/HL Review", topics: ["Past Paper", "Revision"] },
          { title: "Nov 2023 Practice", topics: ["Past Paper", "Revision"] },
        ],
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
        papers: [
          { title: "Kinematics Coach", topics: ["Mechanics", "Motion"] },
          { title: "Waves Practice", topics: ["Waves", "Oscillations"] },
        ],
      },
      {
        name: "Mixed Topic Tests",
        description: "Combined topics and multi-step questions.",
        papers: [
          { title: "Mixed Mechanics Pack", topics: ["Mechanics", "Electricity"] },
          { title: "Data Analysis Drill", topics: ["Data", "Graphs"] },
        ],
      },
      {
        name: "Mocks/Prelims",
        description: "Timed mock and prelim-style papers.",
        papers: [
          { title: "Mock Paper A", topics: ["All Topics"] },
          { title: "Mock Paper B", topics: ["All Topics"] },
        ],
      },
      {
        name: "IB Past Papers",
        description: "Past exam-style papers for review.",
        papers: [
          { title: "2024 Paper Review", topics: ["Past Paper", "Revision"] },
          { title: "2023 Topic Pack", topics: ["Past Paper", "Revision"] },
        ],
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
        papers: [
          { title: "Bonding Drill", topics: ["Bonding", "Structure"] },
          { title: "Rates Review", topics: ["Kinetics"] },
        ],
      },
      {
        name: "Mixed Topic Tests",
        description: "Interleaved chemistry questions.",
        papers: [
          { title: "Data Analysis Pack", topics: ["Data", "Calculation"] },
          { title: "Short Response Drill", topics: ["Organic", "Reactions"] },
        ],
      },
      {
        name: "Mocks/Prelims",
        description: "Mock and prelim-style full papers.",
        papers: [
          { title: "Chem Mock 1", topics: ["All Topics"] },
          { title: "Chem Mock 2", topics: ["All Topics"] },
        ],
      },
      {
        name: "IB Past Papers",
        description: "Past papers for exam review.",
        papers: [
          { title: "2024 Paper Review", topics: ["Past Paper", "Revision"] },
          { title: "2023 Topic Pack", topics: ["Past Paper", "Revision"] },
        ],
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
        papers: [
          { title: "Cells and Membranes", topics: ["Cells", "Transport"] },
          { title: "Genetics Review", topics: ["Genetics"] },
        ],
      },
      {
        name: "Mixed Topic Tests",
        description: "Mixed biology question sets.",
        papers: [
          { title: "Bio Mixed Pack", topics: ["Ecology", "Genetics"] },
          { title: "Command Terms Drill", topics: ["Exam Technique"] },
        ],
      },
      {
        name: "Mocks/Prelims",
        description: "Mock and prelim-style biology papers.",
        papers: [
          { title: "Bio Mock 1", topics: ["All Topics"] },
          { title: "Bio Mock 2", topics: ["All Topics"] },
        ],
      },
      {
        name: "IB Past Papers",
        description: "Past biology exam papers.",
        papers: [
          { title: "2024 Biology Review", topics: ["Past Paper", "Revision"] },
          { title: "2023 Biology Pack", topics: ["Past Paper", "Revision"] },
        ],
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
        papers: [
          { title: "Microeconomics Drill", topics: ["Microeconomics"] },
          { title: "Macroeconomics Review", topics: ["Macroeconomics"] },
        ],
      },
      {
        name: "Mixed Topic Tests",
        description: "Mixed economics application sets.",
        papers: [
          { title: "Policy Application Set", topics: ["Policy", "Application"] },
          { title: "Graph Interpretation Drill", topics: ["Graphs", "Data"] },
        ],
      },
      {
        name: "Mocks/Prelims",
        description: "Mock papers and prelim style practice.",
        papers: [
          { title: "Economics Mock A", topics: ["All Topics"] },
          { title: "Economics Mock B", topics: ["All Topics"] },
        ],
      },
      {
        name: "IB Past Papers",
        description: "Past economics exam-style papers.",
        papers: [
          { title: "May 2024 Essay Pack", topics: ["Past Paper", "Revision"] },
          { title: "Nov 2023 Data Response", topics: ["Past Paper", "Revision"] },
        ],
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
