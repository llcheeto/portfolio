import {useState ,React} from 'react'
import './contact.scss'

export default function Contact() {
    const [message, setMessage] = useState(false)


    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/code.jpg" alt="code" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"></input>
                    <textarea placeholder="Message"></textarea> 
                    <button type="submit">Send</button>  
                    {message && <span>Thanks, I'll respond shortly</span>}       
                </form>
            </div>
        </div>
    );
}