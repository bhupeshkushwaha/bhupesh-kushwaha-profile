import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const experienceYears = new Date().getFullYear() - 2014;

  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="./assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I am an <span className="font-extrabold">Experienced Software Engineer</span> with over {experienceYears} years of expertise in software development. I specialize in PHP frameworks, front-end technologies, and the software development life cycle (SDLC). My skills include Agile methodologies, CI/CD pipelines, and building scalable applications.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I have a strong track record in microservices architecture, payment gateway integration, and delivering high-quality solutions. I am proficient in cloud technologies, containerization, and orchestration tools like Docker and Kubernetes. My experience spans across backend development with PHP and Node.js, and frontend development with React.js and JavaScript.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I am passionate about mentoring teams, optimizing performance, and contributing to impactful projects. My expertise also includes database management (MySQL, PostgreSQL, MongoDB), RESTful APIs, and modern web technologies like TailwindCSS and GraphQL.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Beyond coding, I enjoy collaborating with cross-functional teams, designing solution architectures, and staying updated with the latest trends in technology. I am always eager to take on new challenges and deliver innovative solutions.
        </p>
      </motion.div>
    </div>
  );
}
