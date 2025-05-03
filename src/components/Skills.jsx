import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "programmingLanguages", name: "Programming Languages" },
    { id: "frameworksAndLibraries", name: "Frameworks & Libraries" },
    { id: "devOpsAndCloud", name: "DevOps & Cloud" },
    { id: "databases", name: "Databases" },
    { id: "toolsAndPlatforms", name: "Tools & Platforms" },
    { id: "developmentPractices", name: "Development Practices" },
    { id: "otherSkills", name: "Other Skills" },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? Object.values(skills).flat()
      : skills[selectedCategory];

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-5">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 border-2 rounded ${
                selectedCategory === category.id
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } transition-all`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: skill.id * 0.1,
              }}
              viewport={{ once: true }}
            >
              {React.createElement(skill.icon, { size: 50 })}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
