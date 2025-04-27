import React from "react";
import { motion } from "framer-motion";

export default function SocialIcons({ icons }) {
  return (
    <div className="flex items-center gap-x-5">
      {icons.map(({ Icon, link }, index) => (
        <motion.a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 lg:p-3 rounded border-2 border-black"
          whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
        </motion.a>
      ))}
    </div>
  );
}