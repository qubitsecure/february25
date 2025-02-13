import './index.css';
import './Sidebar.css';

const Home = () => {
    return (
      

      <div className='main-container'>
        {/* <div className='main'> */}
       <div className="content">
      {/* <div className='sidebar'> */}
     
            <div className='masthead'> Maddy Swan </div>
            <p className='subs'> FINE ART </p>
            </div> 
  
      <div className='maincontent'>
            <p> Welcome to my website. Here you can view my work, find out more about me and contact me. </p>
              <div className='mainpicture'>
              <img src='./jenniferg.jpg' alt='Jennifer G' />
              </div> 

              </div>   
        
      </div>

      );
}
 
export default Home;