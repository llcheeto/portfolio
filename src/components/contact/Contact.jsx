import {useState ,React, useRef} from 'react';
import './contact.scss';
import emailjs from "@emailjs/browser";

export default function Contact() {
    
    const refForm = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_vd2ap5s",
            "template_q5ylkf7",
            refForm.current,
            "uMKyzFshbaKawx7fJ"
          )
          .then(
            () => {
              alert("Message Successfully Sent!");
              window.location.reload(false);
            },
            () => {
              alert("Faled to send the message, Please try again!");
            }
          );
      };
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/code.jpg" alt="code" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form ref={refForm} onSubmit={sendEmail}>
                    <input type="text" placeholder="Email" required></input>
                    <textarea placeholder="Message" required></textarea> 
                    <button type="submit" value="SEND">Send</button>        
                </form>
            </div>
        </div>
    );
}