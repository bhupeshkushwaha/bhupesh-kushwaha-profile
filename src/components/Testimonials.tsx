// src/components/Testimonials.tsx
import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  message: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    role: 'CEO at TechCorp',
    message: 'Bhupesh is an outstanding developer. His attention to detail and creativity blew us away!',
    avatar: '/avatar1.jpg', // Placeholder, replace with real client photos if you want
  },
  {
    name: 'Jane Smith',
    role: 'Project Manager at SoftInc',
    message: 'Working with Bhupesh was smooth and efficient. Highly recommend him for any frontend work!',
    avatar: '/avatar2.jpg',
  },
  {
    name: 'Mike Johnson',
    role: 'CTO at DevSolutions',
    message: 'Delivered quality results on time. His skills in React and Tailwind are exceptional.',
    avatar: '/avatar3.jpg',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 px-8 md:px-24 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Client <span className="text-blue-500">Testimonials</span></h2>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
          >
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-24 h-24 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>
            <p className="text-blue-500 text-sm mb-4">{testimonial.role}</p>
            <p className="text-gray-600">"{testimonial.message}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
