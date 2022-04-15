import {useState ,React, useRef} from 'react'
import './contact.scss'
import emailjs from "@emailjs/browser";
import Feathers from '/home/llcheeto/portfolio/src/assets/images/Feathers.png'

export default function Contact() {
    const [message, setMessage] = useState(false)
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
                <img src={Feathers} alt="code" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input className="flat-button" type="submit" value="SEND" />
                </li>
              </ul>
            </form>
            </div>
        </div>
    );
}