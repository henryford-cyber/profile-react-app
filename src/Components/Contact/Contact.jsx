import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import {MdOutlineRocketLaunch} from 'react-icons/md'
import { themeContext } from "../../Context"; 
import { useContext } from 'react';
const Contact = () => {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  
  const [done, setDone] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_adu458t', 'template_s0fksq4', form.current, '44yCSOq0b9YOANcVF')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form" id="Contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
         <div className="chat-title" style={{color: darkMode?'white': ''}}>
          <span>Let's chat</span>
          <span>Tell me about your</span>
          <span>projecct</span>
         </div>
         <span className="let-tt">Let's create something together !</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <p className="form-title flex gap-[0.5rem]">Send us a message <MdOutlineRocketLaunch className="text-[1.3rem] text-[#ff1493]"/></p>
          <input type="text" name="to_name" className="user"  placeholder="Name"/>
          <input type="email" name="from_name" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <button type="submit" className="send-button">Send message</button>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
