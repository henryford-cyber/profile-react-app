import React from 'react'
import './Navbar.css' 
import Toggle from './../Toggle/Toggle';
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
        <div className="n-left">
            <h1>
                <a href="" className="n-name">
                    Nam Phan
                </a> 
            </h1>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul >
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li><a href="">Home</a></li>
                    </Link>
                    <Link spy={true} to='Service' smooth={true}>
                    <li><a href="">Services</a></li>
                    </Link>
                    <Link spy={true} to='Experrience' smooth={true}>
                    <li><a href="">Experience</a></li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}>
                    <li><a href="">Portfolio</a></li>
                    </Link>
                    <Link spy={true} to='Testimonial' smooth={true}>
                    <li><a href="">Testimonials</a></li>
                    </Link>  
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}>
                <a href="" className="button n-button">
                    Contact 
                </a>
            </Link>
           
        </div>
    </div> 
  )
}

export default Navbar