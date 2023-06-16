import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
// import { themeContext } from "../../Context";
const Contact = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  
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
          {/* darkMode style={{color: darkMode?'white': ''}}*/}
          <span >Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="to_name" className="user"  placeholder="Name"/>
          <input type="email" name="from_name" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
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
