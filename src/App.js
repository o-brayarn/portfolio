// import logo from './logo.svg';
import "./App.css";
import { About, NavBar, Projects, Services, Skills } from "./components";
import { Contact, Footer, HomePage } from "./pages";

function App() {
  return (
    <div className="App">
      <div className="main__header">
        <NavBar />
      </div>

      <div className="app__main">
        <HomePage />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
