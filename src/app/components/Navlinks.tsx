"use client";
import Link from "next/link";
import React, { useState } from "react";
import "../styles/navlinks.css";
import { FiChevronDown } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";


const Navlinks = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [ServicesDropdown, setServicesDropdown] = useState(false);
  const [ITDropdown, setITDropdown] = useState(false);
  const [MarketingDropdown, setMarketingDropdown] = useState(false);
  const [BlockchainDropdown, setBlockchainDropdown] = useState(false);

  return (
    <div className="navbar">
      <ul className="navlinks">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li
          onMouseEnter={() => setAboutDropdown(true)}
          onMouseLeave={() => setAboutDropdown(false)}
        >
           <Link href="/"> About <FiChevronDown className="down-arrow"/></Link>

          {aboutDropdown && (
            <ul className="dropdown">
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/careers-at-lampros-tech">Careers</Link>
              </li>
            </ul>
          )}
        </li>

        <li
          onMouseEnter={() => setServicesDropdown(true)}
          onMouseLeave={() => setServicesDropdown(false)}
        >
            <Link href="">Services <FiChevronDown className="down-arrow"/></Link>

          {ServicesDropdown && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setITDropdown(true)}
                onMouseLeave={() => setITDropdown(false)}
              >
                <Link href="">IT <FaChevronRight /></Link>
                {ITDropdown && (
                  <ul className="dropdown2">
                    <li>
                      <Link href="/fullstack-development">Full Stack Development</Link>
                    </li>
                    <li>
                      <Link href="/web-development">Web Development</Link>
                    </li>
                    <li>
                      <Link href="/e-commerce-development">E-Commerce Development</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/ui-ux">UI/UX Design</Link>
              </li>
              <li
                onMouseEnter={() => setMarketingDropdown(true)}
                onMouseLeave={() => setMarketingDropdown(false)}
              >
                <Link href="">Marketing <FaChevronRight /></Link>
                {MarketingDropdown && (
                  <ul className="dropdown2">
                    <li>
                      <Link href="/content-writing">Content Writing</Link>
                    </li>
                    <li>
                      <Link href="/branding">Branding</Link>
                    </li>
                    <li>
                      <Link href="/web-analytics">Web Analytics</Link>
                    </li>
                    <li>
                      <Link href="/social-media-marketing">Social Media Marketing</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => setBlockchainDropdown(true)}
                onMouseLeave={() => setBlockchainDropdown(false)}
              >
                <Link href="">Blockchain <FaChevronRight /></Link>
                {BlockchainDropdown && (
                  <ul className="dropdown2">
                    <li>
                      <Link href="/smart-contracts-development">Smart Contracts Development</Link>
                    </li>
                    <li>
                      <Link href="/dapps-development">dApps Development</Link>
                    </li>
                    <li>
                      <Link href="/nft-marketplace-development">NFT Marketplace Development</Link>
                    </li>
                    <li>
                      <Link href="/nft-consulting">NFT Consulting</Link>
                    </li>
                    <li>
                      <Link href="/blockchain-development-consulting-company-lampros-tech">Blockchain Development Consulting</Link>
                    </li>
                    <li>
                      <Link href="/defi-development">DeFi Development</Link>
                    </li>
                    <li>
                      <Link href="/guide-to-blockchain-requirement-analysis">Blockchain Analysis</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/ed-tech">Ed-Tech</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/case-studies">Case Studies</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
