import React from 'react';
import './intro.css';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png"; 
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Floating from '../Floating/Floating';
import { themeContext } from "../../Context"; 
import { useContext } from 'react';
import { motion } from 'framer-motion';
const Intro = () => {

    const transition ={duration:2,type:'spring'}

    const theme=useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode ? 'white':''}}>
                    Hi! I Am 
                </span>
                <span>
                   Phan Phuoc Phuong Nam 
                </span>
                <span>
                    Frontend Developer with higth 
                    lever of experience in web 
                    designing and development, 
                    producting the Quanlity work
                </span>
            </div>
            <button className='button i-button'>Hire me</button>
            <div className="i-icons">
                <a href=""><img src={Github} alt="" /></a>
                <a href=""><img src={LinkedIn} alt="" /></a>
                <a href=""><img src={Instagram} alt="" /></a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img 
                initial={{left:"-36%"}}
                whileInView={{left:"-24%"}}
                transition={transition}
                src={glassesimoji} 
                alt="" />
            <motion.div
                initial={{top:"-4%",left:"55%"}}
                whileInView={{left:"50%"}}
                transition={transition}
                className="floating1 float">
                <Floating image={crown} txt1='Web' txt2='Developer'/>
            </motion.div>
            <motion.div
                initial={{left:"-15%"}}
                whileInView={{left:"-8%"}}
                transition={transition}
                className="floating2 float">
                <Floating image={thumbup} txt1='Best Designer' txt2='Awrd'/>
            </motion.div>
            <div className="blur bl-1">
                
            </div>
            <div className="blur bl-2">

            </div>
        </div>
    </div>
  )
}

export default Intro