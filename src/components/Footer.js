import React from 'react'
import './Footer.css'
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-transparent text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4" style={{textAlign:'left'}}>
            <h5 style={{fontWeight:'700', color:'#fff'}}>KodeinKGP</h5>
            <p className="small">
            Indian Institute of Technology Kharagpur,</p> 
            <p className='small'>WestBengal - 721302
            </p>
            <p style={{transform:'scale(1.5)',display:'flex',marginLeft:'78px', gap:'5px'}}>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </p>
          </div>
          <div className="col-md-4 mb-4" style={{textAlign:'left', marginLeft:'200px', width:'200px'}}>
            <h5  style={{fontWeight:'700', color:'#fff'}}>Blockchain</h5>
            <ul className="list-unstyled">
              <li>freeCodeCamp</li>
              <li>Code Eater</li>
              <li>Whiteboard Crypto</li>
              <li>Finematics</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4" style={{textAlign:'left', marginLeft:'200px', width:'200px'}}>
            <h5  style={{fontWeight:'700', color:'#fff'}}>Machine Learning</h5>
            <ul className="list-unstyled">
              <li>DeepLearningAI</li>
              <li>Siraj Raval</li>
              <li>sentdex</li>
              <li>Corey Schafer</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4" style={{textAlign:'left', marginLeft:'640px', width:'200px'}}>
            <h5  style={{fontWeight:'700', color:'#fff'}}>Web Development</h5>
            <ul className="list-unstyled">
              <li>CodeWithHarry</li>
              <li>Apna College</li>
              <li>net ninja</li>
              <li>Traversy Media</li>
            </ul>
          </div>
        </div>
      </div>
     
    </footer>
  )
}

export default Footer
