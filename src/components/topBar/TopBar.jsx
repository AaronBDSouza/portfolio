import './topBar.scss'
import {Person, Mail} from "@material-ui/icons";
import Menu from "../menu/Menu";
export default function TopBar({menuOpen,setMenuOpen, isDashboard}) {
    return (
        // <div className={"topbar " + (menuOpen && "active")}>
        <div className={"topbar"}>   
            <div className={"hamburger " + (menuOpen && "active")} onClick={() => setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
            <div className={"left"}>
                <div className="itemContainer">
                </div>   
                <div className="itemContainer">
                </div>  
                {/* AQUALIFESHOP.COM */}
            </div>
            <div className="wrapper">
            {/*   style={{color: 'white',backgroundColor: '#12124d'}} */}
                <a href="#intro" className={!isDashboard ? "logo": "logo dashboardLogo"}>{!isDashboard ? "Aqualifeshop.com": "Aqualifeshop" }</a>

                <div className={!isDashboard ? "right": "hiddenForDashboard" }>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span><a href="tel:917262053053">+91 7262053053</a></span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span><a href="mailto:aqualifeshop">aqualifeshop@gmail.com</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
