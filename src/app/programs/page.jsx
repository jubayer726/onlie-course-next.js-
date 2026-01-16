"use client";

import { useState } from "react";
import programs from "@/data/programs.json";
import CourseCard from "@/components/CourseCart";
import Container from "@/components/Container";

const AllPrograms = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Unique categories
  const categories = [
    "All",
    ...new Set(programs.map(program => program.category)),
  ];

  // Filter logic
  const filteredPrograms =
    activeCategory === "All"
      ? programs
      : programs.filter(
          program => program.category === activeCategory
        );

  return (
    <div className="bg-[#f9f7fb] min-h-screen py-10">
      <Container>
        <h1 className="text-title text-4xl font-bold text-center mb-6">
          Timely Programs
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full border transition
                ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/*  Filtered Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {filteredPrograms.map(program => (
            <CourseCard key={program.id} program={program} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPrograms;
