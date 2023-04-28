// import logo from './logo.svg';
import "./App.css";
import { About, NavBar, Projects, Services, Skills } from "./components";
import { Contact, LandingPage } from "./pages";

function App() {
  return (
    <>
      <NavBar />
      <Contact />
      <LandingPage />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
