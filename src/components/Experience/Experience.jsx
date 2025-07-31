import { Calendar, Code, ChevronRight } from "lucide-react";

const Experience = () => {
  const experience = [
    {
      title: "Full Stack Developer",
      company: "Peddlr Philippines Inc.",
      period: "11/2022 - 09/2025",
      description: "",
      achievements: [
        "Developed, and maintained comprehensive ERP modules to optimize internal workflows",
        "Developed high-performance, scalable RESTful APIs with a focus on clean architecture and maintainable, modular code structure",
        "Built responsive front-end interfaces using modern frameworks to ensure seamless user experiences",
        "Implemented multiple third-party API integrations to extend app features and improve operational efficiency",
      ],
    },
    {
      title: "Angular/C# Developer",
      company: "TAS Tradesoft Inc.",
      period: "04/2022 – 11/2022",
      description: "",
      achievements: [
        "Maintained a platform for business locator platform using Angular and C#",
        "Developed services for pulling data via API for payment processing company",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Streaklab Solutions Inc.",
      period: "04/2020 – 03/2022",
      description: "",
      achievements: [
        "Developed and maintained cross-platform mobile app using Xamarin. Worked on UI modification, implementation of Google Admob, In-App Purchase",
        "Developed and maintained information and service request system.",
        "Worked on REST API modification and development using Golang, and Node.js.",
        "Collaborated with developers and product owners to stay current on product features and intended functionality.",
        "Prepared reports on updates to project specifications, progress, identified conflicts and team activities.",
      ],
    },
  ];

  return (
    <>
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">
                      {exp.title}
                    </h3>
                    <p className="text-gray-300 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                </div>
                {/* <p className="text-gray-300 mb-4" hidden>{exp.description}</p> */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-purple-400">
                    Key Achievements:
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      // <div className="flex flex-row items-center">
                        
                      // </div>
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 px-3 text-sm text-gray-300"
                        >
                          <ChevronRight
                            size={16}
                            className="text-cyan-400 mt-0.5 flex-shrink-0"
                          />
                          <span>{achievement}</span>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
