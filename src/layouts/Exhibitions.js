import React, { useEffect } from 'react';
import '../index.css';
import ms_44 from '../assets/ms_44.jpg';
import ms_33 from '../assets/ms_33.jpg';
import op4 from '../assets/op4.jpg';



const Exhibitions = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);


return (
  <div className='container_2'>
      <div className="item-11">
          <div className='headline2'>Exhibitions</div>
      </div>
      <div className='item-12'>
          <div className='main-text'>
              <p>Primarily I am a portrait artist who specialises in adults, teens, children and occasionally pets. I also produce landscapes, figure studies and botanical sketches. The media I use is watercolour, oil, acrylic, pastel, charcoal, colour pencil and graphite. In essence I like experimenting with any medium and material that inspires me.</p>
              <p>Watercolour is my favourite medium right now; it's versatile and challenging, with lovely qualities of texture and colour. I have also been using high standard artist quality coloured pencils for a number of years to execute portraits and other subjects: this medium gives a refined quality and allows for lots of detail. However, watercolour allows more freedom of expression, especially for portraits. It's also a wonderful medium for landscapes, buildings, water scenes etc. Apart from these I have taken up oil painting recently and I have produced a number of portraits, some of which are featured on my YouTube channel.</p>
              <div className='secondary_img'>
                  <img src={ms_33} alt='ms_33' />
              </div>
              <div className='caption'>A pencil sketch of Alex on a rainy day</div>
          </div>
    
          <div className='main-text'>
              <p>I continue to develop skills essential for my portraits as well as being involved is experimenting with landscape technique; with some results more successful than others.</p>
              <p>Watercolour is my favourite medium right now; it's versatile and challenging, with skills essential for my portraits as well as being I continue to develop skills essential for my portraits as well as being involved is experimenting with landscape technique; with some results more successful than others.</p>
          </div>
          </div>
          <div className='item-13'>
          <div className='mainpicture_img'>
              <img src={ms_44} alt='ms_44' />
          </div>
          <div className='caption-r'>Linsay Lohan</div>
          <div className='secondary_img'>
              <img src={op4} alt='op4' />
          </div>
          <div className='caption'>Me at 2 years</div>
      </div>
  </div>


      );
};

export default Exhibitions;