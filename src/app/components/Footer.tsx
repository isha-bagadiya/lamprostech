'use client'
import React from "react";
import Image from "next/image";
import Logo from "../../../public/dark_logo.webp";
import "../styles/footer.css";
import { FaInstagram } from "react-icons/fa";
import { BsBehance } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import ContactUs from "./ContactUs";
import Link from "next/link";

const Footer = () => {
  
  const isBrowser = () => typeof window !== 'undefined'; 

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleInstaClick = () => {
    window.open('https://www.instagram.com/lampros.tech/?hl=en', '_blank', 'noopener,noreferrer');
  }

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/company/lampros-tech/?originalSubdomain=in', '_blank', 'noopener,noreferrer');
  }

  const handleTwitterClick = () => {
    window.open('https://x.com/Lampros_Tech', '_blank', 'noopener,noreferrer');
  }

  const handleBehanceClick = () => {
    window.open('https://www.behance.net/lamprostech5', '_blank', 'noopener,noreferrer');
  }

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
              Lampros Tech is a leading Blockchain Development Company with
              highly skilled group of professionals. Let us simplify blockchain
              and all-things Web 3.0 for you!
            </div>
            <div className="icons">
              <div className="icon-style" onClick={handleInstaClick}>
                <FaInstagram className="icon" />
              </div>
              <div className="icon-style">
                <FaLinkedin className="icon" onClick={handleLinkedInClick}/>
              </div>
              <div className="icon-style">
                <FaTwitter className="icon" onClick={handleTwitterClick}/>
              </div>
              <div className="icon-style">
                <BsBehance className="icon" onClick={handleBehanceClick}/>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div>
              <header className="header">Company</header>
              <ul className="contact-list">
                <li className="link" style={{ color: "#29A19c" }} onClick={scrollToTop}>Home</li>
                <li><Link href="/about-us" className="link">About Us</Link></li>
                <li><Link href="/contact-us" className="link">Contact Us</Link></li>
                <li><Link href="/careers-at-lampros-tech" className="link">Careers</Link></li>
                <li><Link href="/blog" className="link">Blog</Link></li>
                <li><Link href="/case-studies" className="link">Case Studies</Link></li>
                <li><Link href="/sitemap" className="link">Sitemap</Link></li>
              </ul>
            </div>
            <div>
              <header className="expertise">Expertise</header>
              <ul className="expertise-list">
                <li><Link href="/about-us" className="link">Smart Contract Development</Link></li>
                <li><Link href="/about-us" className="link">Defi Development</Link></li>
                <li><Link href="/about-us" className="link">NFT Marketplace Development</Link></li>
                <li><Link href="/about-us" className="link">NFT Consulting</Link></li>
                <li><Link href="/about-us" className="link">Blockchain Development Consulting</Link></li>
                <li><Link href="/about-us" className="link">dApps Development</Link></li>
                <li><Link href="/about-us" className="link">Full Stack Development</Link></li>
                <li><Link href="/about-us" className="link">Web Development</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="up-scroller">
          <div className="scroll-nested">
            <button className="btn" onClick={scrollToTop}>
              <IoIosArrowUp />
            </button>
          </div>
        </div>
        <div className="copyright">
          © 2024 Lampros Tech. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
