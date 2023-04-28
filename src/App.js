// import logo from './logo.svg';
import "./App.css";
import { About, NavBar, Projects, Services, Skills } from "./components";
import { Contact, HomePage } from "./pages";

function App() {
  return (
    <>
      <NavBar />
      <Contact />
      <HomePage />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
