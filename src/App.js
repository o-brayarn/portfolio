// import logo from './logo.svg';
import "./App.css";
import { About, NavBar, Projects, Services, Skills } from "./components";
import { Footer, Contact, HomePage } from "./pages";

function App() {
  return (
    <>
      <NavBar />
      <div className="app__main">
        <HomePage />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
