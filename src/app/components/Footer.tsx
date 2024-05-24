import React from "react";
import Image from 'next/image';
import Logo from "../../../public/dark_logo.webp"
import "../styles/footer.css"
import { FaInstagram } from "react-icons/fa";
import { BsBehance } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import ContactUs from "./ContactUs";

const Footer = () => {
  return (
    <>
      <div className="footer-div">
        <ContactUs />
        <div className="footer-upper">
        <div className="footer-left">
          <div>
            <Image src={Logo} alt="logo" className="footer-img"></Image>
          </div>
          <div className="content-left">
          Lampros Tech is a leading Blockchain Development Company with highly skilled group of professionals. Let us simplify blockchain and all-things Web 3.0 for you!
          </div>
          <div className="icons">
            <div className="icon-style"><FaInstagram className="icon"/></div>
            <div className="icon-style"><FaLinkedin className="icon"/></div>
            <div className="icon-style"><FaTwitter className="icon"/></div>
            <div className="icon-style"><BsBehance className="icon"/></div>
          </div>
        </div>
        <div className="footer-right">
          <div>
            <header className="header">Company</header>
            <ul className="contact-list">
              <li style={{color: '#29A19c'}}>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <header className="expertise">Expertise</header>
            <ul className="expertise-list">
              <li>Smart Contract Development</li>
              <li>Defi Development</li>
              <li>NFT Marketplace Development</li>
              <li>NFT Consulting</li>
              <li>Blockchain Development Consulting</li>
              <li>dApps Development</li>
              <li>Full Stack Development</li>
              <li>Web Development</li>
            </ul>
          </div>
        </div>
        </div>
        <div className="up-scroller"><div className="scroll-nested"><IoIosArrowUp /></div></div>
        <div className="copyright">© 2024 Lampros Tech. All Rights Reserved.</div>
      </div>
    </>
  );
};

export default Footer;