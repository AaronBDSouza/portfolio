import './intro.scss'
import {DoubleArrow} from "@material-ui/icons";
import { init } from 'ityped';
import { useEffect,useRef } from 'react';

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1800,
            backSpeed: 60,
            strings: ['a Software, Web & Mobile Apps Developer.', 'a Graphic Designer.', 'an AI/ML Enthusiast.'] 
        })
    },[])

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
                    <h3>I am <span className="dynamicText" ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <DoubleArrow style={{ fontSize: 50 }}/> 
                </a>
            </div>
        </div>
    )
}
