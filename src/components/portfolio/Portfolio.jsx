import './portfolio.scss'

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Software</li>
                <li>Web Applications</li>
                <li>Mobile Apps</li>
                <li>Graphic Designs</li>
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
