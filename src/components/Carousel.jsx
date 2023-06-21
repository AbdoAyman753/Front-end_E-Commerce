import React from 'react';
import './Carousel.css';

import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img5.jpg';
import img5 from '../assets/img/img11.jpg'



function Carousel() {
    return (
    <div className="carousel-container">
        <div className="carousel">
        <div className="carousel-item">
            <img src={img1} alt="Slide 1" />
        </div>
        <div className="carousel-item">
            <img src={img2} alt="Slide 2" />
        </div>
        <div className="carousel-item">
            <img src={img3} alt="Slide 3" />
        </div>
        <div className="carousel-item">
            <img src={img4} alt="Slide 4" />
        </div>
        <div className="carousel-item">
            <img src={img5} alt="Slide 5" />
        </div>
        </div>
    </div>
    );
}

export default Carousel;