import React, { useEffect } from 'react';
import './index.css';
import jenniferg from './assets/jenniferg.jpg';


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
}, []);

    return (
     
      <div className='container'>        
      <div className="item-1">
        <div className='masthead'> Maddy Swan </div>
            <div className='subs'> FINE ART </div>
       </div>
           <div className='item-2'>
          <div className='main-text'>        
          <p>Primarily I am a portrait artist who specialises in adults, teens, children and occasionally pets. I also produce landscapes, figure studies and botanical sketches. The media I use is watercolour, oil, acrylic, pastel, charcoal, colour pencil and graphite. In essence I like experimenting with any medium and material that inspires me.
</p>
<p>Watercolour is my favourite medium right now; it's versatile and challenging, with lovely qualities of texture and colour. I have also been using high standard artist quality coloured pencils for a number of years to execute portraits and other subjects: this medium gives a refined quality and allows for lots of detail. However, watercolour allows more freedom of expression, especially for portraits. It's also a wonderful medium for landscapes, buildings, water scenes etc. Apart from these I have taken up oil painting recently and I have produced a number of portraits, some of which are featured on my YouTube channel.
<p>I continue to develop skills essential for my portraits as well as being involved is experimenting with landscape technique; with some results more successful than others.
</p></p>
             </div>
             </div>
<div className='item-3'>
<div className='mainpicture_img'>
            <img src={jenniferg} alt='Jennifer G' />
             </div> 
         
              <div className='caption-r'>Jennifer Garner</div>
          
             </div>
    
             </div>
  
      );
}
 
export default Home;