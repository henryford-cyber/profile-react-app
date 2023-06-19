import React from 'react'
import './Floating.css'
import { themeContext } from "../../Context"; 
import { useContext } from 'react'; 
const Floating = ({image,txt1,txt2}) => {
  const theme=useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="floating">
    <img src={image} alt="" />
    <span >
        {txt1}
        <br/>
        {txt2}
    </span>
   </div>
  )
}

export default Floating