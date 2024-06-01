import React from 'react'
import "./style.css"
import Image from "next/image";
import Logo from "../../../public/illustration-5.png";
// import TechStacksImg from "../../../public/techStack.gif"

const page = () => {
  return (
    <div className='fullstackDev'>
      <div className='div1'>
        <div className='container1'>
          <div className='img1'>
            <Image src={Logo} alt="logo" className='ill5'></Image>
          </div>
          <div className='content1'>
            <h2>Full Stack Development</h2>
            <div className='border'></div>
            <p>We have proved ourselves as one of the top Full Stack development companies with the help of our client-centric approach and the support of our Full Stack developers.</p>
          </div>
        </div>
      </div>

      <div className='div2'>
        <div className='content2'>
          <p className='p1'>Custom Full Stack Development Services</p>
          <p className='p2'>Full-stack web development stands at the top of generic web development, as it makes combined use of the potential of various web development technologies. We also deliver generic web development services. However, when it comes to developing a fast-performing website fast with a given budget, we recommend Full stack development over other options.</p>
          <p className='p2'>Experts in both the back and the front end who have a thorough knowledge of a particular database and work accordingly on the website are called Full stack developers. The major reason for Full stack web development being so in-demand is the fact that by the means of Full stack development, a website can be created much more easily as compared to generic web development. Full Stack development services vary largely, mostly according to the division of the particular full-stack technology you use. Due to an amazing team of developers for every technology, we are able to ensure quality Full Stack web development services at all times.</p>
          <p className='p2'>Lampros Tech, as a Full Stack Web Development Company, regularly follows and updates the methodologies in accordance with the latest trends of web development. We offer exceptional website and web app development solutions to our clients, through our experts in Full-Stack web development. Our Full Stack developers have renowned knowledge as well as experience in building a feature-rich and intrinsic designed website for various business types.</p>
        </div>
        <div className='allStack'>
          <h2 className='mainh2'>Full Stack Development Services</h2>
          <div className='stackFlexContainer'>
            <h2 className='h2Content'>LAMP Stack</h2>
            <h2 className='h2Content'>LEMP Stack</h2>
            <h2 className='h2Content'>MEAN Stack</h2>
            <h2 className='h2Content'>MERN Stack</h2>
            <h2 className='h2Content'>Django Stack</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page
