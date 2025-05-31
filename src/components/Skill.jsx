import { useState } from "react";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaUsers,
  FaClock,
  FaLightbulb,
  FaComments,
  FaTools,
  FaPeopleCarry,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Skill() {
  const [skill, setSkill] = useState("technical");

  const skills = {
    technical: [
      {
        name: "JavaScript",
        prof: 90,
        icon: <FaJs className="text-yellow-500" />,
      },
      {
        name: "Tailwind CSS",
        prof: 70,
        icon: <SiTailwindcss className="text-teal-500" />,
      },
      { name: "React", prof: 75, icon: <FaReact className="text-blue-400" /> },
      {
        name: "HTML/CSS",
        prof: 90,
        icon: <FaHtml5 className="text-orange-600" />,
      },
      { name: "Java", prof: 90, icon: <FaJava className="text-red-500" /> },
      {
        name: "MySQL",
        prof: 80,
        icon: <FaDatabase className="text-blue-600" />,
      },
    ],
    soft: [
      {
        name: "Communication",
        prof: 90,
        icon: <FaComments className="text-indigo-600" />,
      },
      {
        name: "Leadership",
        prof: 80,
        icon: <FaTools className="text-red-500" />,
      },
      {
        name: "Team Player",
        prof: 90,
        icon: <FaPeopleCarry className="text-green-600" />,
      },
      {
        name: "Time Management",
        prof: 85,
        icon: <FaClock className="text-yellow-600" />,
      },
      {
        name: "Adaptable",
        prof: 89,
        icon: <FaUsers className="text-pink-500" />,
      },
      {
        name: "Creativity",
        prof: 80,
        icon: <FaLightbulb className="text-purple-500" />,
      },
    ],
  };

  const getproflabel = (prof) => {
    if (prof >= 90) return "Expert";
    if (prof > 75) return "Advanced";
    if (prof >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <div
      id="skill"
      className="min-h-screen w-full bg-gradient-to-r from-white to-gray-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A comprehensive overview of my technical expertise and professional
            capabilities
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setSkill("technical")}
            className={`px-6 py-3 rounded-lg text-lg transition-all duration-200 
                            ${
                              skill === "technical"
                                ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg"
                                : "text-gray-600 hover:text-indigo-800"
                            }`}
          >
            Technical Skills
          </button>
          <button
            onClick={() => setSkill("soft")}
            className={`px-6 py-3 rounded-lg text-lg transition-all duration-200 
                            ${
                              skill === "soft"
                                ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg"
                                : "text-gray-600 hover:text-indigo-800"
                            }`}
          >
            Soft Skills
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[skill].map((skillItem, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-indigo-500 transition-all duration-200 p-5"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-3xl">{skillItem.icon}</div>
                <h3 className="text-xl font-semibold text-gray-600">
                  {skillItem.name}
                </h3>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">
                    {getproflabel(skillItem.prof)}
                  </span>
                  <span className="text-sm font-semibold text-indigo-600">
                    {skillItem.prof}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 rounded-full transition-all duration-200"
                    style={{ width: `${skillItem.prof}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
