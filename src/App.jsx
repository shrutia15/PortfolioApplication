import About from "./components/About";
import Achievements from "./components/Achivements";
import Certification from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

export default function App() {
  return (
    <>
    <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    <div>
      <Navbar />
      <About/>
      <Skill />
      <Projects/>
      <Certification/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}
