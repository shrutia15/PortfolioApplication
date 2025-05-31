import profileimg from "../assets/profilepic.jpg";
import {
  FaDocker,
  FaReact,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaCogs,
  FaCode,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiJenkins,
  SiKubernetes,
  SiTailwindcss,
  SiDotnet,
} from "react-icons/si";

import { FaGraduationCap, FaSchool } from "react-icons/fa";
// import { SiDotnet } from "react-icons/si";  // you already imported SiDotnet, so reuse for diploma icon

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-7 lg:px-8 py-24">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-snug bg-gradient-to-r from-indigo-700 to-purple-600 text-transparent bg-clip-text animate-fade-in-up">
            Hi, I'm{" "}
            <span className="decoration-4 underline-offset-4">
              Shruti Awate
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate and highly motivated software developer with a strong
            foundation in full-stack development, DevOps, and cloud computing.
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative flex items-center justify-center mb-16">
          <div className="absolute insert-0 bg-gradient-to-r from-indigo-600 via purple-600 to-teal-600 rounded-full blur-lg opacity-20 w-48 h-48"></div>
          <img
            src={profileimg}
            alt="Profile image"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>

        {/* Academic Timeline */}
        <div className="bg-white shadow-lg p-8 rounded-xl max-w-5xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-700 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Academic Timeline
          </h2>

          <div className="relative border-l-4 border-indigo-600 pl-12 space-y-12">
            {[
              {
                year: "2025",
                title: "PG Diploma in Advanced Computing",
                details:
                  "Sunbeam InfoTech, CDAC ACTS, Pune\nGrade: CCEE - 67.2%",
                icon: <FaGraduationCap className="text-indigo-600 w-6 h-6" />,
              },
              {
                year: "2024",
                title: "B.E. in Engineering",
                details:
                  "Dr. D.Y. Patil Institute of Technology, SPPU\nAggregate CGPA: 8.85\nYear-wise: 9.28 / 8.69 / 8.01 / 9.20",
                icon: <FaGraduationCap className="text-indigo-600 w-6 h-6" />,
              },
              {
                year: "2020",
                title: "HSC (12th Grade)",
                details: "Novel International Jr. College\nPercentage: 75.7%",
                icon: <FaSchool className="text-indigo-600 w-6 h-6" />,
              },
              {
                year: "2018",
                title: "SSC (10th Grade)",
                details: "Blossom Public School, CBSE Board\nPercentage: 81.7%",
                icon: <FaSchool className="text-indigo-600 w-6 h-6" />,
              },
            ].map((item, index) => (
              <div key={index} className="relative group">
                {/* Circle with icon */}
                <div className="absolute -left-10 top-2 flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full text-white shadow-lg group-hover:bg-indigo-800 transition-colors duration-300">
                  {item.icon}
                </div>

                {/* Year badge */}
                <div className="absolute -left-28 top-0 bg-indigo-100 text-indigo-800 font-semibold rounded-full px-3 py-1 text-sm shadow-md select-none">
                  {item.year}
                </div>

                {/* Card */}
                <div className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default">
                  <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Highlights with Icons */}
        <div className="bg-white shadow-lg p-8 rounded-xl max-w-5xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-700 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Roles I’m Ready to Excel In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* DevOps Engineer */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
              <h1 className="flex items-center text-2xl font-semibold mb-6 text-indigo-600 gap-2">
                <FaCogs /> DevOps Engineer
              </h1>
              <p className="text-lg text-gray-600">
                Proficient in <FaDocker className="inline" /> Docker for
                containerization, <SiKubernetes className="inline" /> Kubernetes
                for orchestration, <SiJenkins className="inline" /> Jenkins for
                CI/CD pipelines, <FaGitAlt className="inline" /> Git for version
                control, and Helm. Experienced in Prometheus & Grafana.
              </p>
            </div>

            {/* Frontend Developer */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
              <h1 className="flex items-center text-2xl font-semibold mb-6 text-indigo-600 gap-2">
                <FaReact /> Frontend Developer
              </h1>
              <p className="text-lg text-gray-600">
                Skilled in React.js, <SiTailwindcss className="inline" />{" "}
                Tailwind CSS, TypeScript, Redux, and REST APIs. Familiar with
                Vite, Webpack, Jest, and React Testing Library.
              </p>
            </div>

            {/* Backend Developer */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
              <h1 className="flex items-center text-2xl font-semibold mb-6 text-indigo-600 gap-2">
                <SiSpringboot /> Backend Developer
              </h1>
              <p className="text-lg text-gray-600">
                Experienced with Spring Boot for APIs,{" "}
                <FaDatabase className="inline" /> MySQL/PostgreSQL, and API
                testing using Postman. Knowledge in JWT, OAuth2, microservices,
                and containerization.
              </p>
            </div>

            {/* Full Stack Developer */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
              <h1 className="flex items-center text-2xl font-semibold mb-6 text-indigo-600 gap-2">
                <FaCode /> Full Stack Developer
              </h1>
              <p className="text-lg text-gray-600">
                Competent in frontend (React, Tailwind) and backend (Spring
                Boot, .NET Core). Experience with APIs, Docker, Kubernetes,
                Jenkins, GitHub Actions, and MongoDB.
              </p>
            </div>

            {/* Java Developer */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
              <h1 className="flex items-center text-2xl font-semibold mb-6 text-indigo-600 gap-2">
                <FaJava /> Java Developer
              </h1>
              <p className="text-lg text-gray-600">
                Strong in Java SE/EE, with hands-on Spring Boot, Hibernate, and
                Maven. Skilled in IntelliJ, JUnit, JDBC, and JPA for database
                connectivity.
              </p>
            </div>

            {/* .NET Developer */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
              <h1 className="flex items-center text-2xl font-semibold mb-6 text-indigo-600 gap-2">
                <SiDotnet /> .NET Developer
              </h1>
              <p className="text-lg text-gray-600">
                Proficient in C#, .NET Core, ASP.NET MVC, SQL Server, Entity
                Framework, Blazor, and Azure DevOps for CI/CD.
              </p>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-indigo-500 transition-all duration-200 p-5">
          <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-700 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl text-indigo-700 font-semibold mb-2">
                🌍 Open Source Contributions
              </h3>
              <p className="text-lg text-gray-800">
                I actively contribute to open source projects and share my work
                on{" "}
                <a
                  href="https://github.com/shrutia15"
                  className="text-teal-600 hover:underline"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-indigo-700 font-semibold mb-2">
                🎨 Creative & Personal Interests
              </h3>
              <ul className="list-disc pl-5 text-lg text-gray-800 space-y-2">
                <li>
                  💡 Designing and creating web projects with intuitive UI
                </li>
                <li>🖌️ Drawing and painting to express creativity</li>
                <li>📷 Photography – capturing nature and candid moments</li>
                <li>📚 Reading books on tech, innovation & personal growth</li>
                <li>🎶 Listening to instrumental and classical music</li>
                <li>✈️ Exploring new places & cultures</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
