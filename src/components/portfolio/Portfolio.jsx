import './portfolio.scss'
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from 'react';
export default function Portfolio() {
    const [selected, setSelected] = useState('featured');
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "software",
            title: "Software Applications"
        },
        {
            id: "web",
            title: "Web Applications"
        },
        {
            id: "mobile",
            title: "Mobile Apps"
        },
        {
            id: "design",
            title: "Graphic Designs"
        }        
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                { list.map((item) => (
                    <PortfolioList 
                    id = {item.id}
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}/>
                ))}
            </ul>
            <div className="container">

                <div className="item">
                    <img src="assets/test.jpg" alt="portfolio1"/>
                    <h3>Banking</h3>
                </div>
                <div className="item">
                    <img src="assets/test.jpg" alt="portfolio1"/>
                    <h3>Banking</h3>
                </div>
                <div className="item">
                    <img src="assets/test.jpg" alt="portfolio1"/>
                    <h3>Banking</h3>
                </div>
                <div className="item">
                    <img src="assets/test.jpg" alt="portfolio1"/>
                    <h3>Banking</h3>
                </div>
                <div className="item">
                    <img src="assets/test.jpg" alt="portfolio1"/>
                    <h3>Banking</h3>
                </div>
                <div className="item">
                    <img src="assets/test.jpg" alt="portfolio1"/>
                    <h3>Banking</h3>
                </div>                

            </div>
        </div>
    )
}
