import { useState } from 'react';
import Contact from '../contact/Contact';
import Gallery from '../gallery/Gallery';
import ProductsList from '../productsList/ProductsList';
import TopBar from '../topBar/TopBar';
import './home.scss';
import Intro from '../intro/Intro';
import Menu from '../menu/Menu';

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="home" id="home">
            {/* <Route path="/projectViewer" render={(props) => <ProjectViewer {...props}/>}/>*/}
            <TopBar menuOpen = { menuOpen } setMenuOpen = {setMenuOpen}/>
            <Menu menuOpen = { menuOpen } setMenuOpen = {setMenuOpen}/>
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
    )
}
