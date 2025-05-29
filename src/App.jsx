import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

export default function App() {
  return (
    <div>
      <Navbar />
      <About/>
      <Skill />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
