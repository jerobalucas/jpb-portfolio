import React from "react";
import {
  Linkedin,
  Mail,
  Code,
  Database,
  Server,
  Smartphone,
  MapPin,
} from "lucide-react";

const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed text-xl">
                I'm an experienced full-stack developer with a passion for
                building scalable, user-focused web applications. With years of
                hands-on experience in technologies like Angular, React, Vue.js,
                Node.js, and AWS. Specializing in integrating third-party APIs
                or optimizing cross-platform experiences, I'm committed to
                delivering exceptional results.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-xl">
                With a strong focus on performance optimization and user
                experience. I believe in writing clean, maintainable code and
                staying updated with the latest industry trends and best
                practices.
              </p>
              <div className="flex items-center gap-4 mb-6 text-xl">
                <MapPin size={20} className="text-blue-400" />
                <span className="text-gray-300">Caloocan, Metro Manila</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="mailto:jeropaolobalucas@gmail.com"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/jero-paolo-balucas"
                  target="_blank"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
