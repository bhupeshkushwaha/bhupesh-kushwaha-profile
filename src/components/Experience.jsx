import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/experiences";

export default function Experience() {
  return (
    <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16" id="experience">
      <motion.h2
        className="text-2xl lg:text-4xl text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My <span className="font-extrabold">Experience</span>
      </motion.h2>

      {/* Experience Cards */}
      <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 5,
              delay: index,
            }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
              <div className="flex items-center gap-5">
                <img className="w-7" src={exp.logo} alt="" />
                <h2 className="font-semibold text-white text-lg lg:text-xl">
                  {exp.role} at {exp.company}
                </h2>
              </div>
              <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                {exp.period}
              </span>
            </div>
            <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}