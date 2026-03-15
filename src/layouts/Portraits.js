import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ms_26 from '../assets/ms_26.jpg';
import ms_29 from '../assets/ms_29.jpg';
import ms_32 from '../assets/ms_32.jpg';


const Portraits = () => {
      useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    return (    

<div className='container_2'>           
      <div className="item-11">
      <div className ='headline2'>Portraits in Watercolour</div>
     </div>
     <div className='item-12'>
                <div className='main-text'>
                    <p>Primarily I am a portrait artist who specialises in adults, teens, children and occasionally pets. I also produce landscapes, figure studies and botanical sketches. The media I use is watercolour, oil, acrylic, pastel, charcoal, colour pencil and graphite. In essence I like experimenting with any medium and material that inspires me.</p>
                    <p>Watercolour is my favourite medium right now; it's versatile and challenging, with lovely qualities of texture and colour. I have also been using high standard artist quality coloured pencils for a number of years to execute portraits and other subjects: this medium gives a refined quality and allows for lots of detail. However, watercolour allows more freedom of expression, especially for portraits. It's also a wonderful medium for landscapes, buildings, water scenes etc. Apart from these I have taken up oil painting recently and I have produced a number of portraits, some of which are featured on my YouTube channel.</p>
                    <p>I continue to develop skills essential for my portraits as well as being involved is experimenting with landscape technique; with some results more successful than others.</p>
                    <p>Watercolour is my favourite medium right now; it's versatile and challenging, with skills essential for my portraits as well as being I continue to develop skills essential for my portraits as well as being involved is experimenting with landscape technique; with some results more successful than others.</p>
                </div>
                </div>

      <div className='item-13'> 
            <div className='carousel-container'>      
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
                            //    className="carousel-container"
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
 
     </div>
     
    
     
    );
         
};

export default Portraits;