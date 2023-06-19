import React from 'react'
import './service.css';
 import Card from "../Card/Card";
 import Resume from'../../resume.pdf'
 import HeartEmoji from "../../img/heartemoji.png";
 import Glasses from "../../img/glasses.png";
 import Humble from "../../img/humble.png"; 
// import { motion } from "framer-motion";
import { themeContext } from "../../Context"; 
import { useContext } from 'react';
import { motion } from 'framer-motion'; 

const Service = () => {

    const transition ={duration:1,type:'spring'}

const theme=useContext(themeContext);
const darkMode = theme.state.darkMode;
  return (
   <div className="services" id='Service'>
    <div className="anwesome">
        <span style={{color: darkMode ? 'white':''}}>My Anwesome</span>
        <span>services</span>
        <span>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. Eum, tenetur.</span>
        <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
        </a>
        <div className="blur s-blur1"></div>
    </div>
    <div className="cards"> 
        <motion.div
            initial={{left:"23rem"}}
            whileInView={{left:"14rem"}}
            transition={transition}
            className="s-card-1">
            <Card emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma, Sketch, Photoshop, Adobe, Xd" }
            />
        </motion.div>
        <motion.div
            initial={{left:"-20rem"}}
            whileInView={{left:"-5rem"}}
            transition={transition}
            className="s-card-2">
            <Card emoji={Glasses}
            heading={'Developer'}
            detail={"Html, Css, JavaScript, React" }
            />
        </motion.div>
        <motion.div
            initial={{left:"23rem"}}
            whileInView={{left:"14rem"}}
            transition={transition}
         className="s-card-3">
            <Card emoji={Humble}
            heading={'UI/IX'}
            detail={"UX Designer will research and evaluate the habits and usage of customers, thereby evaluating certain website/App products." }
            />
        </motion.div>
        <div className="blur s-blur2"></div>
    </div>
   </div>
  )
}

export default Service