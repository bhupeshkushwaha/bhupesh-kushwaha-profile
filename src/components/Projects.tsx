// src/components/Projects.tsx
import React from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A personal website built with React, showcasing my skills, projects, and experience.',
    image: '/project1.jpg', // Placeholder image, you can replace it
    link: 'https://yourportfolio.com',
  },
  {
    title: 'E-Commerce App',
    description: 'A full-stack e-commerce application with payment gateway integration and user authentication.',
    image: '/project2.jpg',
    link: 'https://myecommerceapp.com',
  },
  {
    title: 'Task Manager',
    description: 'A minimalistic task management app using React, Node.js, and MongoDB.',
    image: '/project3.jpg',
    link: 'https://taskmanagerapp.com',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-8 md:px-24 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-blue-500">Projects</span></h2>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-medium"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
