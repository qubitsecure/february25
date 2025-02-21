import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ms_26 from '../assets/ms_26.jpg';
import ms_29 from '../assets/ms_29.jpg';
import ms_32 from '../assets/ms_32.jpg';


const Gallery = () => {
    return (    
        <div className='main-container'>
        <div className="maincontent3">
        </div>
       <div className='headline2'>
            <p>Gallery</p>
            <div className='gallery-frame'>      
            <Carousel
                               showArrows={true}
                               showThumbs={false}
                               infiniteLoop={true}
                               showStatus={false}
                               autoPlay={true}
                               interval={3000}
                               stopOnHover={true}
                               dynamicHeight={true}
                               showIndicators={false}
                               className="carousel-container"
                           >
                <div>
                    <img src={ms_26} alt="ms_26" />
                </div>
                <div>
                    <img src={ms_29} alt="ms_29" />
                </div>
                <div>
                    <img src={ms_32} alt="ms_32" />
                </div>
            </Carousel>
        </div>
        </div>
        <div>

        </div>
        </div>  
    );
};

export default Gallery;