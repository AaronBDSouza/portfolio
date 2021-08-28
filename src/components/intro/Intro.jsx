import './intro.scss'
import {DoubleArrow} from "@material-ui/icons";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/dp.jpg" alt="profile_picture"/>
                </div>

            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Aaron B. D'Souza</h1>
                    <h3>Software & Web Applications Developer</h3>
                </div>
                <a href="#portfolio">
                    <DoubleArrow style={{ fontSize: 75 }}/> 
                </a>
            </div>
        </div>
    )
}
