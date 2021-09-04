import './projects.scss'


export default function Projects() {

    const sliderData = [
        {
            id: 1,
            title: "Some Title 1",
            icon: "https://img.freepik.com/free-psd/digital-marketing-facebook-banner-template_237398-233.jpg?size=626&ext=jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, optio assumenda molestiae soluta, repellat cupiditate, aut ratione commodi dolores quod placeat dolor?",
            img:"https://images.websitebuilderexpert.com/wp-content/uploads/2019/10/01040943/wordpress-theme-directory-e1572618341853.png"
        },
        {
            id: 2,
            title: "Some Title 2",
            icon: "https://img.freepik.com/free-psd/digital-marketing-facebook-banner-template_237398-233.jpg?size=626&ext=jpg",
            description: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, optio assumenda molestiae soluta, repellat cupiditate, aut ratione commodi dolores quod placeat dolor?",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCwFwZp74t4d3Wd_A1tG39ohhEkRfVPLhXQ&usqp=CAU"
        },
        {
            id: 3,
            title: "Some Title 3",
            icon: "https://img.freepik.com/free-psd/digital-marketing-facebook-banner-template_237398-233.jpg?size=626&ext=jpg",
            description: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, optio assumenda molestiae soluta, repellat cupiditate, aut ratione commodi dolores quod placeat dolor?",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcEfNbrNKnrW_iN4RVLReDfz44uwg7UnQVw&usqp=CAU"
        }
    ];

    return (
        <div className="projects" id="projects">
            <div className="slider">
                {   sliderData.map((sliderItem) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={sliderItem.img} alt="background"/>
                                </div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo eos.</p>
                                <span>Projects</span>
                            </div>
                            
                        </div>
                        <div className="right">
                            <img src="https://img.freepik.com/free-psd/digital-marketing-facebook-banner-template_237398-233.jpg?size=626&ext=jpg" alt="background"/>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <h2>LEFT</h2>
            <span className="arrowContainer left"></span>
            <img src="assets/left_arrow.png" alt="left" className="arrow left"/> 
            
            <span className="arrowContainer right"></span>
            <img src="assets/left_arrow.png" alt="right" className="arrow right"/>
            
        </div>
    )
}
