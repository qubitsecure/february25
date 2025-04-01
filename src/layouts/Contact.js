import { Form } from 'react-router-dom';
import '../index.css';


export default function Contact() {
    return (
        <div className= "contact">
            <div className ='headline2'>
            <p>Contact</p>
        </div>

        <Form method="post" action="">
            <label>
                <span> Your email:</span>
                <input type="email" name="email" required/>
            </label>
            <label>
                <span> Your message:</span>
                <textarea name="message" required></textarea>
            </label>
            <button>Submit</button>
        </Form>
        </div>
    );
}

