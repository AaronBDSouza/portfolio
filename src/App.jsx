import TopBar from "./components/topBar/TopBar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import ProjectsList from "./components/projectsList/ProjectsList";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import "./App.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen = { menuOpen } setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen = { menuOpen } setMenuOpen = {setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <ProjectsList/>
        <Gallery/>
        <Contact/>
        {/* <Projects/> - For development only */}
        {/* <Testimonials/> - For development only */}       
      </div>
    </div>
  );
}

export default App;
