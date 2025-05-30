import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [ isMenuOpen, setMenuOpen ] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full h-20 bg-gradient-to-r from-indigo-400 via-purple-500 to-teal-500 shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* logo and brand  */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white bg-opacity-20 bg-white px-4 py-1 rounded-lg ">
                SA
                </span>
            </div>
            <div className=" md:block ml-4">
              <span className="text-white font-semibold text-lg ">
                Shruti Awate
                </span>
            </div>
          </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <ul className="flex space-x-2">
                <li>
                  <a href="#about" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">
                    About
                    </a>
                </li>

                <li>
                  <a href="#skill" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">
                    Skills
                    </a>
                </li>

                <li>
                  <a href="#tracer" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">
                    Tracer
                    </a>
                </li>

                <li>
                  <a href="#projects" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">
                    Projects
                    </a>
                </li>

                <li>
                  <a href="#contacts" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">
                    Contacts
                    </a>
                </li>

                <li>
                  <a href="#about" className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">
                    About
                    </a>
                </li>
              </ul>
            </div>

            {/* Mobile NAvigation */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!isMenuOpen)}
                className="text-white hover:text-teal-200 focus:outline-none transition-color duration-200">
                {isMenuOpen ? ( 
                  <X className = "h-6 w-6" />
              ) : (
              <Menu className="w-6 h-6" />
              )}
              </button>
            </div>
          </div>
        </div>
      
      {/* Mobile navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-gradient-to-b from-indigo-600 to-purple-600`}
      >
        <div className="px-4 py-4 space-y-2">
          {["about", "skill", "tracer", "projects", "contacts"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-teal-300 px-3 py-2 rounded-md transition duration-300"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    
    </nav>
  );
}
