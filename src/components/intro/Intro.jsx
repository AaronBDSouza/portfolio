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
            strings: ['Moulded Tanks', 'Fish & Fish Food', 'Aquatic Plants', 'Aquarium Scaping Materials']
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <img src="assets/goldies.png" alt="profile_picture"/>
                {/* <div className="imgContainer"></div> */}
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Welcome to</h2>
                    <h1 className="shopTitle">Aqualife Store</h1>
                    <hr/><br/>
                    <h4>Mapusa - Goa</h4>
                    <h3><span className="dynamicText" ref={textRef}></span></h3>
                </div>
                <a href="#portfolio" className="navigateDownArrow">
                    <DoubleArrow style={{ fontSize: 50 }}/> 
                </a>
            </div>
        </div>
    )
}
