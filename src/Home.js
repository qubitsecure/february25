import './index.css';
import './Sidebar.css';
import jenniferg from './assets/jenniferg.jpg';

const Home = () => {
    return (
      

      <div className='main-container'>
        {/* <div className='main'> */}
       <div className="content">
      {/* <div className='sidebar'> */}
     
            <div className='masthead'> Maddy Swan </div>
            <p className='subs'> FINE ART </p>
            </div> 

            <div class='flexbox'>
            <div className='mainpicture_img'>
            <img src={jenniferg} alt='Jennifer G' />
              </div> 
                  </div>
  
      <div className='maincontent'>
          <div className='maincontent_text'>
            <p> Welcome to my website. Here you can view my work, find out more about me and contact me. </p>
            <p> I am a fine artist based in London. I work with a variety of mediums including oil, acrylic, watercolour and pencil. I am inspired by nature, the human form and the world around me. </p>
            <p> I have exhibited my work in galleries across the UK and have sold my work to private collectors. </p>  
            
              </div>   
        
      </div>
      </div>

      );
}
 
export default Home;