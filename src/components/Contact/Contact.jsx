import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:jeropaolobalucas@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://linkedin.com/in/jero-paolo-balucas", "_blank");
  };
  return (
    <>
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together!
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
              <a
                href="mailto:your.email@example.com"
                className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                <Mail size={20} className="mr-2" />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/jero-paolo-balucas"
                target="_blank"
                className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                <Linkedin size={20} className="mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
