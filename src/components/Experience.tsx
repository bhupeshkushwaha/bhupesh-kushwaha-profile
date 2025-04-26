// src/components/Experience.tsx
import React from 'react';

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  icon?: string; // Optional, if you want to add a logo/icon later
}

const experiences: ExperienceItem[] = [
  {
    role: 'Lead Software Engineer',
    company: 'Google',
    duration: 'Nov 2019 - Present',
    description:
      'Leading a team of developers to design, build, and optimize scalable web applications, focusing on performance and usability at Google scale.',
  },
  {
    role: 'Software Engineer',
    company: 'YouTube',
    duration: 'Jun 2017 - Oct 2019',
    description:
      'Collaborated on frontend architectures for millions of users worldwide. Improved video recommendation algorithms and redesigned mobile web experiences.',
  },
  {
    role: 'Junior Software Engineer',
    company: 'Apple',
    duration: 'Jan 2016 - Dec 2017',
    description:
      'Developed features for Apple Music Web, fixed bugs, and optimized loading performance across the Safari browser on mobile devices.',
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-8 md:px-24 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-blue-500">Experience</span></h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600 mb-2">{exp.company} — {exp.duration}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
