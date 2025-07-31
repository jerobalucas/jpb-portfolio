import React, { useEffect, useRef } from "react";
import { Code, Database, Server, Globe } from "lucide-react";
import { motion } from "motion/react";

const Skills = () => {
  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "Angular",
      "Vue.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
    ],
    backend: ["Node.js", "C#"],
    database: ["MySQL", "Redis", "MSSQL"],
    tools: ["Docker", "AWS", "Git", "GraphQL"],
    frontendUrl: ["../../../"],
  };

  const frontend = [
    { name: "HTML", src: "/html5-logo.svg" },
    { name: "CSS", src: "/css3-logo.svg" },
    {
      name: "JavaScript",
      src: "/javascript-logo.svg",
    },
    { name: "Angular", src: "/angular-logo.svg" },
    { name: "Vue.js", src: "/vue-logo.svg" },
    { name: "React", src: "/react-logo.svg" },
    {
      name: "TypeScript",
      src: "/typescript-logo.svg",
    },
    {
      name: "Tailwind CSS",
      src: "/tailwind-logo.svg",
    },
    { name: "Bootstrap", src: "/bootstrap-logo.svg" },
  ];

  const backend = [
    { name: "Node.js", src: "/nodejs-logo.svg" },
    { name: "C#", src: "/csharp-logo.svg" },
  ];

  const database = [
    { name: "MySQL", src: "/mysql-logo.svg" },
    { name: "Redis", src: "/redis-logo.svg" },
    { name: "MSSQL", src: "/mssql-logo.svg" },
  ];

  const tools = [
    { name: "Docker", src: "/docker-logo.svg" },
    { name: "AWS", src: "/aws-logo.svg" },
    { name: "Git", src: "/git-logo.svg" },
    { name: "GraphQL", src: "/graphql-logo.svg" },
  ];

  return (
    <>
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
              {/* <Globe className="text-cyan-400 mb-4" size={40} /> */}
              <h3 className="text-xl font-bold mb-4 text-center">Frontend</h3>
              <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-4">
                {frontend.map((skill, index) => (
                  <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      scale: {
                        type: "spring",
                        visualDuration: 1,
                        bounce: 0.5,
                      },
                    }}
                    key={index}
                    src={skill.src}
                    alt={skill.name}
                    height={70}
                    width={70}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300">
              {/* <Server className="text-purple-400 mb-4" size={40} /> */}
              <h3 className="text-xl font-bold mb-4 text-center">Backend</h3>
              <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-4">
                {backend.map((skill, index) => (
                  <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      scale: {
                        type: "spring",
                        visualDuration: 1,
                        bounce: 0.5,
                      },
                    }}
                    key={index}
                    src={skill.src}
                    alt={skill.name}
                    height={70}
                    width={70}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-green-400/50 transition-all duration-300">
              {/* <Database className="text-green-400 mb-4" size={40} /> */}
              <h3 className="text-xl font-bold mb-4 text-center">Database</h3>
              <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-4">
                {database.map((skill, index) => (
                  <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      scale: {
                        type: "spring",
                        visualDuration: 1,
                        bounce: 0.5,
                      },
                    }}
                    key={index}
                    src={skill.src}
                    alt={skill.name}
                    height={70}
                    width={70}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-orange-400/50 transition-all duration-300">
              {/* <Code className="text-orange-400 mb-4" size={40} /> */}
              <h3 className="text-xl font-bold mb-4 text-center">Tools</h3>
              <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-4">
                {tools.map((skill, index) => (
                  <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      scale: {
                        type: "spring",
                        visualDuration: 1,
                        bounce: 0.5,
                      },
                    }}
                    key={index}
                    src={skill.src}
                    alt={skill.name}
                    height={70}
                    width={70}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
