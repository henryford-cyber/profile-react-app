import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer" id="Footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a href="mail:namphan.021101@gmail.com"><span>namphan.021101@gmail.com</span></a>
        <div className="f-icons">
          <a target="_blank" href="https://www.instagram.com/namphan0211/"><Insta color="white" size={"3rem"} /></a>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100029286273131"><Facebook color="white" size={"3rem"} /></a>
          <a target="_blank" href="https://github.com/henryford-cyber"> <Gitub color="white" size={"3rem"} /></a>
          
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
