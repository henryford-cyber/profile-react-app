 
import { useContext } from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Experrience from './Components/Experrience/Experrience';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Service from './Components/Service/Service';
import Testimonial from './Components/Testimonials/Testimonial';
import Works from './Components/Works/Works';
import { themeContext } from './Context';
function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App" 
    style={{background: darkMode ?'black':'',
  color: darkMode ? 'white' : ''}}
    >
      <Navbar/>
      <Intro/>
      <Service/>
      <Experrience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
