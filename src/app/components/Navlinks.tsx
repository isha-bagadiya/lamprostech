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
          <Link href="/">
            About <FiChevronDown className="down-arrow"/>
          </Link>

          {aboutDropdown && (
            <ul className="dropdown">
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
            </ul>
          )}
        </li>

        <li
          onMouseEnter={() => setServicesDropdown(true)}
          onMouseLeave={() => setServicesDropdown(false)}
        >
          <Link href="/">
            Services <FiChevronDown className="down-arrow"/>
          </Link>

          {ServicesDropdown && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => setITDropdown(true)}
                onMouseLeave={() => setITDropdown(false)}
              >
                <Link href="/">IT <FaChevronRight /></Link>
                {ITDropdown && (
                  <ul className="dropdown2">
                    <li>
                      <Link href="/">Full Stack Development</Link>
                    </li>
                    <li>
                      <Link href="/">Web Development</Link>
                    </li>
                    <li>
                      <Link href="/">E-Commerce Development</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/">UI/UX Design</Link>
              </li>
              <li
                onMouseEnter={() => setMarketingDropdown(true)}
                onMouseLeave={() => setMarketingDropdown(false)}
              >
                <Link href="/">Marketing <FaChevronRight /></Link>
                {MarketingDropdown && (
                  <ul className="dropdown2">
                    <li>
                      <Link href="/">Content Writing</Link>
                    </li>
                    <li>
                      <Link href="/">Branding</Link>
                    </li>
                    <li>
                      <Link href="/">Web Analytics</Link>
                    </li>
                    <li>
                      <Link href="/">Social Media Marketing</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => setBlockchainDropdown(true)}
                onMouseLeave={() => setBlockchainDropdown(false)}
              >
                <Link href="/">Blockchain <FaChevronRight /></Link>
                {BlockchainDropdown && (
                  <ul className="dropdown2">
                    <li>
                      <Link href="/">Smart Contracts Development</Link>
                    </li>
                    <li>
                      <Link href="/">dApps Development</Link>
                    </li>
                    <li>
                      <Link href="/">NFT Marketplace Development</Link>
                    </li>
                    <li>
                      <Link href="/">NFT Consulting</Link>
                    </li>
                    <li>
                      <Link href="/">Blockchain Development Consulting</Link>
                    </li>
                    <li>
                      <Link href="/">DeFi Development</Link>
                    </li>
                    <li>
                      <Link href="/">Blockchain Analysis</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/">Ed-Tech</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">Case Studies</Link>
        </li>
        <li>
          <Link href="/">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
