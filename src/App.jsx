import TopBar from "./components/topBar/TopBar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <TopBar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Projects/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
