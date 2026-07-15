"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SubjectGrid from "@/components/SubjectGrid";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <Hero search={search} onSearchChange={setSearch} />
      <SubjectGrid search={search} />
    </main>
  );
}