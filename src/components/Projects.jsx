import React from "react";
import { ExternalLink } from "lucide-react";

export default function Projects() {
    const project = [
        {
            id: 1,
            title: "React Portfolio ",
            description: "A personal portfolio website built with React, TypeScript, and Tailwind CSS to showcase projects, skills, and experience with a clean, responsive design.",
            technologies: ["React", "Typescript", "Tailwind CSS"],
            githubLink: "",
        },

        {
            id: 2,
            title: "Courier Service Management System",
            description: "A web application that streamlines courier operations with dedicated portals for Customers, Admin, Warehouse Managers, and Delivery Agents to manage bookings, tracking, and deliveries efficiently.",
            technologies: ["J2EE", "Spring Boot", "React.js", "SQL"],
            githubLink: "https://github.com/shrutia15/CourierManagementServiceSystem",
        },

        {
            id: 3,
            title: "Prediction of Pathloss Model in Millimeter Wave in 5G using Deep Learning",
            description: "Developed a deep learning model to predict path loss in 5G mmWave communication, addressing signal strength reduction challenges in high-frequency transmissions.",
            technologies: ["MATLAB", "DeepMIMO"],
            githubLink: "https://github.com/shrutia15/Prediction-of-pathloss-model-for-millimeter-wave-communication-using-Deep-Learning",
        },

        {
            id: 4,
            title: "Fire-Fighting-Robot",
            description: "A robotic system built using Arduino to detect and extinguish small fires. It uses flame and ultrasonic sensors for fire detection and navigation, and activates a fan or water pump to put out the fire automatically.",
            technologies: ["Arduino IDE", "Sensors (IR, Flame, Ultrasonic)", "DC Motors", "Servo Motor"],
            githubLink: "https://github.com/shrutia15/Fire-Fighting-Robot.git",
        },
    ];


    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-white to gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                        My Projects
                    </h2>
                    <p className="mt-4 text-xl text-center text-gray-600 font-semibold">A showcase of all projects that I have made.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-10">
                    {project.map((project, index) => (
                        <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-indigo-500 transition-all duration-200 p-5">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                                {project.title}
                            </h2>
                            <p className="text-gray-600 mb-5">{project.description}</p>

                            <div className="flex flex-wrap gap-4 mb-2">
                                {project.technologies.map((tech, index) => (
                                    <div key={index} 
                                    className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                            <a href={project.githubLink}
                                target="_blank"
                                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-all duration-200">
                                View Project
                                <ExternalLink className="w-4 h-4 ml-2"/>
                            </a>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );

}