// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default App;
