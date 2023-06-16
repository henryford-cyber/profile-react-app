import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png"; 
// import { motion } from "framer-motion";
// import {Link} from 'react-scroll'
import { themeContext } from "../../Context"; 
import { useContext } from 'react';
import { motion } from 'framer-motion';  
const Works = () => { 

const theme=useContext(themeContext);
const darkMode = theme.state.darkMode;
  return (
    <div className="works">
        <div className="anwesome">
            <span style={{color: darkMode ? 'white':''}}>Works for All there</span>
            <span>Brand & Client</span>
            <span>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. Eum, tenetur.</span>
            <a href="#">
                <button className='button s-button'>Hire me</button>
            </a>
            <div className="blur s-blur1"></div>
        </div>
        <div className="w-right">
            <motion.div
                initial={{rotate:45}}
                // innitial : là vị trí ban đầu hiệu úng
                whileInView={{rotate:0}}
                // whileInView : là vị trí kết thúc hiệu ứng
                viewport={{margin:'-40px'}}
                transition={{duration:3.5,type:'spring'}}
                // duration : là số giây hiệu úng thi triển
                className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>{" "}
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div> 
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
            </motion.div>
        </div>
    </div>
  )
}

export default Works