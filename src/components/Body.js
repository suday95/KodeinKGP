import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Body.css'
import videoSrc from "./Assets/anime4.mp4"

const Body = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
    <div className='container'>
    <div className='container1'>
        <h1 className='wel' data-aos="fade-right" data-aos-delay="1100" data-aos-once="true">Welcome to</h1>
        <h1 className='kode' data-aos="fade-right" data-aos-delay="1600" data-aos-once="true">KodeinKGP</h1>
        <p className='description1' data-aos="fade-right" data-aos-delay="1100" data-aos-once="true">
            "The Web as I envisaged it, we have not seen it yet.The future is still so much bigger than the past"
        </p>
        <p className='description2' data-aos="fade-right" data-aos-delay="1600" data-aos-once="true">
        A student-run society that aims to spread awareness and educate students about the potential of Web 3.0 and future technologies. We host workshops and hackathons to give students hands-on experience with Blockchain Development and Artificial Intelligence. Additionally, we use our skills in web development and blockchain to work on real-world problems faced by the student community at IIT Kharagpur and beyond. By joining KodeinKGP, students can gain valuable technical skills and contribute to solving important problems while learning about one of the most exciting and rapidly-evolving technologies of our time.
        </p>
    </div>
    <div className='container2' data-aos="fade-left" data-aos-delay="1800" data-aos-once="true">
        <video style={{zIndex:'1'}} width='100%' height="auto" autoPlay loop muted>
            <source src={videoSrc} type='video/mp4'/>
            
        </video>
    </div>
    <div  className='container3'>
      <p data-aos="fade-up" data-aos-mirror="true" data-aos-delay="500"><span className='number'>260+</span> <span className='font'>PDS Problems</span></p>
      <p data-aos="fade-up" data-aos-mirror="true" data-aos-delay="600"><span className='number'>17+</span> <span className='font'>Articles</span></p>
      <p data-aos="fade-up" data-aos-mirror="true" data-aos-delay="700"><span className='number'>15+</span> <span className='font'>Events</span></p>
      <p data-aos="fade-up" data-aos-mirror="true" data-aos-delay="800"><span className='number'>7000+</span> <span className='font'>Community Members</span></p>
    </div>
    </div>
    </>
  )
}

export default Body
