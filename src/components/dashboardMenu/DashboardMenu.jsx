import "./dashboardMenu.scss";
import { Link, Outlet } from "react-router-dom";

export default function DashboardMenu({menuOpen,setMenuOpen}) {
    return (
        <div className={"dashboardMenu " + (menuOpen && "active")}>
            <ul>
                <li onClick={ () => setMenuOpen(false) }>
                    <a href="#intro">Home</a>
                </li>
                {/* <li onClick={ () => setMenuOpen(false) }>
                    <a href="#portfolio">Portfolio</a>
                </li> */}
                {/* <li onClick={ () => setMenuOpen(false) }>
                    <a href="#projectsList">Projects</a>
                </li> */}
                {/* <li onClick={ () => setMenuOpen(false) }>
                    <a href="#testimonials">Testimonials</a>
                </li> */}
                <li onClick={ () => setMenuOpen(false) }>
                    <a href="#gallery">Gallery</a>
                </li>                
                <li onClick={ () => setMenuOpen(false) }>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={ () => setMenuOpen(false) }>
                    {/* <a href="#contact">Contact</a> */}
                    <Link to="/emplogin">Billing</Link>
                </li>
            </ul>
            <Outlet/>
        </div>

    )
}
