import TopBar from "./components/topBar/TopBar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Products from "./components/products/Products"
import ProductsList from "./components/productsList/ProductsList";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import "./App.scss";
import { useState } from "react";
import ProductViewer from "./components/productViewer/ProductViewer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      {/* <Route path="/projectViewer" render={(props) => <ProjectViewer {...props}/>}/>*/}
      <TopBar menuOpen = { menuOpen } setMenuOpen = {setMenuOpen}/>
      {/* <Menu menuOpen = { menuOpen } setMenuOpen = {setMenuOpen}/> */}
      <div className="sections">
        <Intro/>
        <ProductsList/>
        <Gallery/>
        <Contact/>
        {/* <Projects/> */}
        {/* <Portfolio/> - For development only */}
        {/* <Projects/> - For development only */}
        {/* <Testimonials/> - For development only */}       
      </div>
    </div>
  );
}

export default App;
