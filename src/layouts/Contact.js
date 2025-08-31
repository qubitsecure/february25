import '../index.css';
import op4 from '../assets/op4.jpg';



export default function Contact() {


    return (

         <div className='container'>            
            <div className="headline2">
                <p>Contact</p>
            </div>
             
         <div className='contact-container'>
            <div className="contact-form">
                <form method="post" action="" className="custom-contact-form">
                    <div className="form-group">
                        <label htmlFor="email">
                            <span>Your email</span>
                        </label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">
                            <span>Your message</span>
                        </label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <div className="form-buttons">
                        <button type="submit" className="custom-submit-btn">Send</button>
                        <button type="reset" className="custom-reset-btn">Clear</button>
                    </div>
                    <div className='secondary_img'>
                    <img src={op4} alt='op4' />
          </div>
                </form>
            </div>

        </div>
        </div>
        
    );
}
