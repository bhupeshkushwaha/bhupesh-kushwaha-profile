// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-8 md:px-24 bg-white flex flex-col md:flex-row items-center">
      {/* Image */}
      <div className="flex-1 flex justify-center mb-12 md:mb-0">
        <img src="/Boy.jpg" alt="About Me" className="w-2/3 md:w-80" />
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-blue-500">Me</span>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          I’m a passionate and highly skilled software engineer specializing in building beautiful, functional, and scalable digital experiences. 
          I have a strong foundation in both frontend and backend technologies and a keen eye for design and user experience.
        </p>
        <br />
        <p className="text-gray-600 leading-relaxed">
          I'm constantly learning new technologies, improving my skills, and pushing the boundaries of what’s possible on the web. 
          Whether it’s a complex application or a simple landing page, I’m committed to delivering high-quality solutions that make an impact.
        </p>
      </div>
    </section>
  );
};

export default About;
