// src/Home.js
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import logo from './Assets/KIKlogo.jpg'
import './Home.css';
import { Link } from 'react-router-dom';
//import { useMediaQuery } from 'react-responsive';
import Teams from './Teams';
import { useState } from 'react';
const Home = () => {
  const isDesktop =useMediaQuery({
    query: '(min-width: 1024px)',
  });
  const ismobile = useMediaQuery({
    query: '(max-width : 1023px)',
  })
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    useEffect(() => {
        document.title = "KodeinKgp";
      }, []); // Empty dependency array to set the title on mount only
  return (
    <>
    <div className='cont'  >
        <img data-aos="fade-right" data-aos-delay="500" data-aos-once="true" className="logo" src={logo} />
        <h1 data-aos="fade-right" data-aos-delay="500" data-aos-once="true" className='head1'>KodeinKGP</h1>
        {isDesktop &&
        <ul className="navbar">
  <li className="nav-item" data-aos="fade-up" data-aos-delay="600" data-aos-once="true">
    <Link to="/home" className='underline-link' >Home</Link>
  </li>
  <li className="nav-item" data-aos="fade-up" data-aos-delay="700" data-aos-once="true">
    <a  href="#" className='underline-link'>PDS_Bank</a>
  </li>
  <li className="nav-item" data-aos="fade-up" data-aos-delay="800" data-aos-once="true">
    <a  href="#" className='underline-link'>Articles</a>
  </li>
  <li className="nav-item" data-aos="fade-up" data-aos-delay="900" data-aos-once="true">
    <Link to="/teams" className='underline-link'>Teams</Link>
  </li>
  <li className="nav-item" data-aos="fade-up" data-aos-delay="1000" data-aos-once="true">
    <a href='#' className='underline-link'>Events</a>
  </li>
</ul>}
{
  ismobile &&
  <div className='navbar1'>
  <div className={`menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
<div className='bar'></div>
<div className='bar'></div>
<div className='bar'></div>
  </div>
  <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
    <li className='lists'><Link to="/home" className='underline-link' >Home</Link></li>
    <li className='lists'><a  href="#" className='underline-link'>PDS_Bank</a></li>
    <li className='lists'><a  href="#" className='underline-link'>Articles</a></li>
    <li className='lists'><Link to="/teams" className='underline-link'>Teams</Link></li>
    <li className='lists'><a href='#' className='underline-link'>Events</a></li>
  </ul>
  </div>
}
    </div>
    
    </>
  );
};

export default Home;
