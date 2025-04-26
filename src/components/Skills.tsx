// src/components/Skills.tsx
import React from 'react';

interface Skill {
  name: string;
  icon: string; // Could be a path or a font-awesome/icon name
}

const skills: Skill[] = [
  { name: 'Git', icon: '' },
  { name: 'JavaScript', icon: '' },
  { name: 'Sass/Scss', icon: '' },
  { name: 'Next.js', icon: '' },
  { name: 'Storybook', icon: '' },
  { name: 'NPM', icon: '' },
  { name: 'GitHub', icon: '' },
  { name: 'Styled Components', icon: '' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-8 md:px-24 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-blue-500">Skills</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            {/* You can replace <div> with an <img> if you have icons */}
            <div className="mb-4 text-3xl">⚡</div> 
            <h3 className="font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
