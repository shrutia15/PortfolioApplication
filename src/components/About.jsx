// import React from "react";
// import {profileimg} from "C:\Users\intel\Desktop\Resume\profile pic.jpg";

export default function About() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7x1 mx-auto py-4 sm:px-6 lg:px-8 py-16">
                {/* Hero Section */}
                <div className="text-center space-y-8 mb-16">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
                        Hi, I am Shruti</h1>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A passionate and highly motivated software developer with a strong foundation in full-stack development, DevOps, and cloud computing.

                    </p>
                </div>
                {/* Profile Image */}
                <div className="relative flex items-center justify-center mb-16">
                    <div className="absolute insert-0 bg-gradient-to-r from-indigo-600 via purple-600 to-teal-600 rounded-full blur-lg opacity-20">
                        <img src="" alt="Profile image" className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover" />

                    </div>
                    {/* Professional background */}
                    <div className="bg-white shadow-md mb-16 p-6 rounded-md">
                        <h1 className="text-3xl font-semibold mb-10 ">
                            Professional Journey</h1>

                        <div className="space-y-6 text-left max-w-4xl mx-auto">
                            <p className="text-lg text-gray-600">I hold a B.E. degree from Dr. D.Y. Patil Institute of Technology and a PG Diploma in Advanced Computing (CDAC) from Sunbeam InfoTech. My academic background is
                                complemented by hands-on experience with technologies such as React, Spring Boot, Java, MySQL, Docker, Kubernetes, and Jenkins.
                            </p>

                            <p className="text-lg text-gray-600">I have worked on real-world projects like a Courier Service Management System and a
                                Deep Learning-based 5G mmWave Pathloss Prediction system. These projects strengthened my skills in frontend/backend
                                development, API integration, and secure software design.
                            </p>

                        </div>
                    </div>
                </div>

                {/* Skills Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* {["DevOps Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "Java Developer", ".NET Developer"].map((role) => ( */}
                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
                        <h1 className="text-2xl font-semibold mb-6 text-indigo-600">DevOps Engineer</h1>
                        <p className="text-lg text-gray-600">
                            Proficient in Docker for containerization, Kubernetes for orchestration, Jenkins for CI/CD pipelines, Git for version control, and Helm for managing Kubernetes manifests. Experienced in automating deployments and monitoring using Prometheus and Grafana.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
                        <h1 className="text-2xl font-semibold mb-6 text-indigo-600">Frontend Developer</h1>
                        <p className="text-lg text-gray-600">
                            Skilled in React.js for building dynamic UIs, Tailwind CSS for modern styling, TypeScript for type-safe development, Redux for state management, and REST APIs integration. Familiar with tools like Vite, Webpack, and testing with Jest and React Testing Library.
                        </p> </div>

                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
                        <h1 className="text-2xl font-semibold mb-6 text-indigo-600">Backend Developer</h1>
                        <p className="text-lg text-gray-600">
                            Experienced with Spring Boot for developing RESTful APIs, MySQL and PostgreSQL for database management, Docker for containerization, and Postman for API testing. Knowledgeable in microservices architecture and secure authentication using JWT and OAuth2.
                        </p> </div>

                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
                        <h1 className="text-2xl font-semibold mb-6 text-indigo-600">Full Stack Developer</h1>
                        <p className="text-lg text-gray-600">
                            Competent in both frontend (React.js, Tailwind CSS) and backend (Spring Boot, .NET Core), with hands-on experience in integrating APIs, managing databases (MySQL, MongoDB), deploying via Docker & Kubernetes, and setting up CI/CD workflows with Jenkins and GitHub Actions.
                        </p> </div>

                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
                        <h1 className="text-2xl font-semibold mb-6 text-indigo-600">Java Developer</h1>
                        <p className="text-lg text-gray-600">
                            Strong in Java SE and Java EE, with experience in building enterprise applications using Spring Boot, Hibernate, and Maven. Skilled in using tools like IntelliJ IDEA, JUnit for testing, and integrating databases using JPA and JDBC.
                        </p> </div>

                    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
                        <h1 className="text-2xl font-semibold mb-6 text-indigo-600">.NET Developer</h1>
                        <p className="text-lg text-gray-600">
                            Proficient in C# and .NET Core for building web applications and APIs. Experienced with ASP.NET MVC, Entity Framework for ORM, SQL Server for database operations, and Azure DevOps for CI/CD and deployment. Familiar with Blazor and Windows Forms.
                        </p> </div>

                </div>

                {/* Interests */}
                <div className="bg-white p-8 shadow-lg mb-16">
                    <h2 className="text-3xl font-semibold text-center">Beyond Coding</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mt-6">
                        <div>
                            <h3 className="text-2xl text-indigo-700 font-semibold mb-2">Open Source Contribution</h3>
                            <p className="text-lg text-gray-800">I actively contribute to open source projects and share my work on <a href="https://github.com/shrutia15" className="text-teal-600 hover:underline">GitHub</a>.</p>
                        </div>
                    </div>
                </div>

                {/* call to action */}
                <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-teal-700 py-12 px-5 text-white rounded-xl text-center">
                    <h3 className="text-4xl font-semibold mb-5">Continuous Learning</h3>
                    <p className="text-xl mb-5">Eager to expand my skills and stay updated with industry trends.</p>
                    <a href="mailto:shruti.awate666@gmail.com" className="inline-block bg-white text-indigo-800 px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-colors duration-300">
                        Get in Touch
                    </a>
                </div>
            </div>

        </div>
    );

}