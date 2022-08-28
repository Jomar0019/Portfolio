import About from "./components/About";
import Me from "./components/Me";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Me />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
