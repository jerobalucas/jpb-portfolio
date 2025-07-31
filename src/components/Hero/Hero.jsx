import { ChevronDown } from "lucide-react";
import Particles from "../../plugins/reactbits/Particles";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };
  return (
    <>
      
        <div className="absolute w-full h-full">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={true}
          />
        </div>
        <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >

        <div className="absolute bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Full Stack
            <br />
            Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Full-Stack Developer with hands-on experience in building dynamic,
            high-performance web applications. Proficient in front-end and
            back-end technologies, with a focus on scalable architecture, clean
            code practices, and seamless user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button> */}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </section>
    </>
  );
};

export default Hero;
