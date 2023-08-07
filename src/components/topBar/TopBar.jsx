import './topBar.scss'
import {Person, Mail} from "@material-ui/icons";
import Menu from "../menu/Menu";
export default function TopBar({menuOpen,setMenuOpen}) {
    return (
        // <div className={"topbar " + (menuOpen && "active")}>
        <div className={"topbar"}>   
            <div className="wrapper">
            {/*   style={{color: 'white',backgroundColor: '#12124d'}} */}

                <div className="left">
                    <div className={"hamburger " + (menuOpen && "active")} onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                    <div className="itemContainer">
                    </div>   
                    <div className="itemContainer">
                    </div>  
                    {/* AQUALIFESHOP.COM */}
                </div>
                <a href="#intro" className="logo">Aqualifeshop.com</a>
                <div className="right">
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
            <Menu menuOpen = { menuOpen } setMenuOpen = {setMenuOpen}/>
        </div>
    )
}
