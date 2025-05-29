import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-teal-700 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* Left Section */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-lg font-semibold">© {new Date().getFullYear()} Shruti | All Rights Reserved</h2>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-6">
                    <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/shrutia15" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
