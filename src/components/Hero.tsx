import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa';
import SocialLink from './SocialLink';

// Define the type for HeroDetails props
type HeroDetailsProps = {
  name: string;
  title: string;
  location: string;
  description: string;
};

const HeroDetails = ({ name, title, location, description }: HeroDetailsProps) => {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        Hello I'm <span className="text-black">{name}.</span><br />
        <span className="text-black">Senior <span className="border-2 px-1">{title}</span></span><br />
        Based In <span className="text-black">{location}.</span>
      </h1>
      <p className="text-gray-600 max-w-lg mx-auto md:mx-0 pt-4 mt-4">{description}</p>
    </>
  );
};

const Hero = () => {
  const socialLinks = [
    { href: "#", label: "Facebook", icon: FaFacebookF },
    { href: "#", label: "Twitter", icon: FaTwitter },
    { href: "#", label: "Instagram", icon: FaInstagram },
    { href: "#", label: "Dribbble", icon: FaDribbble },
  ];

  return (
    <section className="flex flex-col md:flex-row h-auto md:h-[716px] items-center px-8 py-16 relative">
      <div className="absolute">
        <HeroDetails 
          name="Bhupesh Kushwaha" 
          title="Software Engineer" 
          location="India" 
          description="Experienced Software Engineer with 12+ years of expertise in PHP frameworks, front-end technologies, and SDLC. Proficient in Agile methodologies, CI/CD pipelines, and building scalable applications. Skilled in microservices architecture, payment gateway integration, and delivering high-quality solutions." 
        />
      </div>

      {/* Left Side - 30% */}
      <div className="flex-[3] h-[578px] relative">
        {/* Socials */}
        <div className="absolute bottom-0 flex space-x-4">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} href={link.href} label={link.label} icon={link.icon} />
          ))}
        </div>
      </div>

      {/* Right Side - 70% */}
      <div className="flex-[7]">
        <img src="/boy.png" alt="Illustration of Bhupesh Kushwaha, a Senior Software Engineer" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
