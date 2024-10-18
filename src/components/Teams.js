import React, { useState } from 'react'
import Home from './Home';
import Footer from './Footer';
import './Teams.css';
import logo from './Assets/KIKlogo.jpg';
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import a from "./KIK/1.png";
import b from "./KIK/2.png";
import c from "./KIK/3.png";
import d from "./KIK/4.png";
import e from "./KIK/5.png";
import f from "./KIK/6.png";
import g from "./KIK/7.png";
import h from "./KIK/8.png";
import i from "./KIK/9.png";
import j from "./KIK/10.png";
import k from "./KIK/11.png";
import l from "./KIK/12.png";
import m from "./KIK/13.png";
import n from "./KIK/14.png";
import o from "./KIK/15.png";
import p from "./KIK/16.png";
import q from "./KIK/17.png";
import r from "./KIK/18.png";
import s from "./KIK/19.png";
import t from "./KIK/20.png";
import u from "./KIK/21.png";
import v from "./KIK/22.png";
import w from "./KIK/23.png";
import x from "./KIK/24.png";
import y from "./KIK/25.png";
import z from "./KIK/26.png";
import ab from "./KIK/27.png";
import abc from "./KIK/28.png";
import abcd from "./KIK/29.png";
function Teams(){
    const [isActive, setIsActive]=useState(false);
    const toggleHighlight =() =>{
        setIsActive(!isActive);
    }

    return(
        <>
        <Home/>
            <h1 className='Heads'>Heads</h1>
        <div className='container'>
            <div className='box1'>
            <p className='head'>
            Executive Head
            </p>
            <img className="logo1" src={a} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Aadish Jain
            </p>
            </div>
            <div className='box1'>
            <p className='head'>
            Executive Head
            </p>
            <img className="logo1" src={b} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Akash Manna
            </p>
            </div>
            <div className='box1'>
            <p className='head'>
            Tech Head
            </p>
            <img className="logo1" src={c} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            G.M.M. Prabhash
            </p>
            </div>
            <div className='box1'>
            <p className='head'>
            Tech Head
            </p>
            <img className="logo1" src='#' />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Adarsh Tadiparthi
            </p>
            </div>
            <div className='box1'>
            <p className='head'>
               
AI and Metaverse Head
            </p>
            <img className="logo1" src={d} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Bhavesh Pabnani
            </p>
            </div>
            <div className='box1'>
            <p className='head'>
            AI and Metaverse Head
            </p>
            <img className="logo1" src={e} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Parijat Sutradhar
            </p>
            </div>
            <div className='box1'>
            <p className='head'>
            Blockchain Head
            </p>
            <img className="logo1" src={f} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Swadhin Kumar biswal
            </p>
            </div>
            <div className='box1'>
            <p className='head'>
            Blockchain Head
            </p>
            <img className="logo1" src={g} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Ujjawal Agrawal
            </p>
            </div>
            <div className='box1'>
            <p className='head'>
            Design Head
            </p>
            <img className="logo1" src={h} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Shashi Bhushan
            </p>
            </div>
            <div className='box1'>
            <p className='head'>
            Events Head
            </p>
            <img className="logo1" src={i} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Ayushi Pradhan
            </p>
            </div>
            <div className='box1'>
            <p className='head'>
            Finance Head
            </p>
            <img className="logo1" src={j} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Makrawat Singh
            </p>
            
            </div>
            
            <h1 className='Founder'>Founders</h1>
            <div className='Founders'>
            
            <div className='box1'>
            <img className="logo1" src={k} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Suraj Gupta
            </p>
            </div>



            <div className='box1'>
            <img className="logo1" src={l} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Bhushan Nakade
            </p>
            </div>
            </div>
            <h1 className='Founder'>Advisors</h1>
            <div className='Advisors'>
            
            <div className='box1'>

            <img className="logo1" src={m} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Kunal Agarwal
            </p>
            </div>



            <div className='box1'>
            <img className="logo1" src={n} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Sumit Kumar Sharma
            </p>
            </div>


            <div className='box1'>
            <img className="logo1" src={o} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Priyanshu Ranjan
            </p>
            </div>


            <div className='box1'>
            <img className="logo1" src={p} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Hemanth Sai Krishna
            </p>
            </div>


            <div className='box1'>
            <img className="logo1" src={q} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Soukhin Nayek
            </p>
            </div>

            <div className='box1'>
            <img className="logo1" src={r} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Neeraj Patel
            </p>
            </div>
            </div>

            <h1 className='Founder'>Tech Team</h1>
            <div className='Advisors'>
            
            <div className='box1'>

            <img className="logo1" src={s} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Om Singh Jadon
            </p>
            </div>



            <div className='box1'>

            <img className="logo1" src={t} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Arumilli Thanvi Sree
            </p>
            </div>


            <div className='box1'>

            <img className="logo1" src={u} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Shaurya Raj
            </p>
            </div>


            <div className='box1'>

            <img className="logo1" src={v} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Uditangshu Chakraborty
            </p>
            </div>


            <div className='box1'>

            <img className="logo1" src={w} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Sudhanshu
            </p>
            </div>
            
            <div className='box1'>

            <img className="logo1" src={x} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Harsh Dalmia
            </p>
            </div>



            <div className='box1'>

            <img className="logo1" src={y} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Shubhraj Singh Dodiya
            </p>
            </div>



            <div className='box1'>

            <img className="logo1" src={z} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Jayanshu Jena
            </p>
            </div>



            <div className='box1'>

            <img className="logo1" src={ab} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Zoya Alam
            </p>
            </div>



            <div className='box1'>

            <img className="logo1" src={abc} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Aliva Patro
            </p>
            </div>



            <div className='box1'>

            <img className="logo1" src={abcd} />
            <div className='logos'>
            <MdFacebook /><FaInstagram /><FaLinkedinIn /><FaWhatsapp />
            </div>
            <p className='name'>
            Bikram Ghuku
            </p>
            </div>

            </div>

        </div>
        <Footer/>
        </>
    )
}
export default Teams;