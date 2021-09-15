import './gallery.scss'
import { useState } from 'react';
import { galleryData } from '../../galleryData';

export default function Gallery() {

    /*const sliderData = [
        {
            id: 1,
            title: "Some Title 1 Some Title 1 Some Title 1 Some Title 1",
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
        },
        {
            id: 3,
            title: "Some Title 3",
            icon: "https://img.freepik.com/free-psd/digital-marketing-facebook-banner-template_237398-233.jpg?size=626&ext=jpg",
            description: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, optio assumenda molestiae soluta, repellat cupiditate, aut ratione commodi dolores quod placeat dolor?",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcEfNbrNKnrW_iN4RVLReDfz44uwg7UnQVw&usqp=CAU"
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

    ];*/

    var screenWidth = parseInt(window.innerWidth);
    const[nosOfSlidesInView, setNosOfSlidesInView] = useState(3);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fullScreenImageActive, setfullScreenImage] = useState(false);
    const handleClick = (direction) => {
        screenWidth <= 768? setNosOfSlidesInView(screenWidth <= 550? 1:2): setNosOfSlidesInView(3)
        /*alert(nosOfSlidesInView);*/
        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1: galleryData.length - nosOfSlidesInView) :
        setCurrentSlide(currentSlide < galleryData.length - nosOfSlidesInView ? currentSlide + 1: 0)       
    }

    return (
        <div className="gallery" id="gallery">
            {/* Left Arrow Section */}
            <span className="arrowContainer left"></span>
            <img src="assets/left_arrow.png" alt="left" className="arrow left" onClick={() => handleClick("left")}/> 

            {/* Section Header */}
            <h1>Gallery</h1>

            {/* Right Arrow Section */}
            <span className="arrowContainer right"></span>
            <img src="assets/left_arrow.png" alt="right" className="arrow right" onClick={() => handleClick("right")}/>
            
            {/* Slideshow for Medium to Large Screens */}                 
            <div className="slider" style={ (screenWidth > 768? {transform: `translateX(-${currentSlide * 430}px)`}: {transform: `translateX(-${currentSlide * 290}px)`})}>
                {   galleryData.map((sliderItem) => (
                <div className="container">
                    <div className="item">
                        <div className="top">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={sliderItem.img} alt={sliderItem.title}/>
                                </div>
                                {/* <p>{sliderItem.description}</p> */}
                                {/* <span>Projects</span> */}
                            </div>
                        </div>

                        <div className="bottom">
                            <h2>{sliderItem.title}</h2>
                            <h4>{sliderItem.year + ', ' + sliderItem.location}</h4>
                        </div> 

                        {/* <div className="right">
                            <img src={sliderItem.img} alt={sliderItem.title}/>
                        </div> */}
                    </div>
                </div>
                ))}
            </div>

            {/* FullScreenImageView */}
            <div className={ fullScreenImageActive? "fullScreenImageContainer active": "fullScreenImageContainer"}>
                <div className="fullScreenImageContainerBackground">
                </div>
                <div className="imgContainer">
                    <img src ="assets/gallery_images/techlipse1.jpg" alt=""/>
                    <div className="closeImgDiv">
                        <span className="closeImg">X</span> 
                    </div>
                </div>
            </div>
            

        </div>
    )
}


