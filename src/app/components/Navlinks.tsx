import Link from "next/link";
import React, { useState, useEffect } from "react";
import "../styles/navlinks.css";
import { FiChevronDown } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";

interface NavlinksProps {
  closeMenu: () => void;
}
const Navlinks: React.FC<NavlinksProps> = ({closeMenu}) => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [ITDropdown, setITDropdown] = useState(false);
  const [marketingDropdown, setMarketingDropdown] = useState(false);
  const [blockchainDropdown, setBlockchainDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1026);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDropdownToggle = (setter: { (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (value: React.SetStateAction<boolean>): void; (arg0: (prev: any) => boolean): void; }) => {
    setter(prev => !prev);
  };

  const stopPropagation = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const handleClick = () => {
    if (closeMenu) {
      closeMenu(); 
      console.log("clicked")
    }
  };


  return (
    <div className="navbar">
      <ul className="navlinks">
        <li>
          <Link href="/" onClick={handleClick}>Home</Link>
        </li>

        <li
          onMouseEnter={() => !isMobile && setAboutDropdown(true)}
          onMouseLeave={() => !isMobile && setAboutDropdown(false)}
          onClick={() => isMobile && handleDropdownToggle(setAboutDropdown)}
        >
          <Link href="/">
            About <FiChevronDown className="down-arrow" />
          </Link>
          {aboutDropdown && (
            <ul className="dropdown">
              <li>
                <Link href="/about-us" onClick={handleClick}>About Us</Link>
              </li>
              <li>
                <Link href="/careers-at-lampros-tech" onClick={handleClick}>Careers</Link>
              </li>
            </ul>
          )}
        </li>

        <li
          onMouseEnter={() => !isMobile && setServicesDropdown(true)}
          onMouseLeave={() => !isMobile && setServicesDropdown(false)}
          onClick={() => isMobile && handleDropdownToggle(setServicesDropdown)}
        >
          <Link href="#">
            Services <FiChevronDown className="down-arrow" />
          </Link>
          {servicesDropdown && (
            <ul className="dropdown">
              <li
                onMouseEnter={() => !isMobile && setITDropdown(true)}
                onMouseLeave={() => !isMobile && setITDropdown(false)}
                onClick={(e) => { isMobile && handleDropdownToggle(setITDropdown); stopPropagation(e); }}
              >
                <Link href="#">
                  IT <FaChevronRight />
                </Link>
                {ITDropdown && (
                  <ul className="dropdown2">
                    <li>
                      <Link href="/fullstack-development" onClick={handleClick}>Full Stack Development</Link>
                    </li>
                    <li>
                      <Link href="/web-development" onClick={handleClick}>Web Development</Link>
                    </li>
                    <li>
                      <Link href="/e-commerce-development" onClick={handleClick}>E-Commerce Development</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/ui-ux" onClick={handleClick}>UI/UX Design</Link>
              </li>
              <li
                onMouseEnter={() => !isMobile && setMarketingDropdown(true)}
                onMouseLeave={() => !isMobile && setMarketingDropdown(false)}
                onClick={(e) => { isMobile && handleDropdownToggle(setMarketingDropdown); stopPropagation(e); }}
              >
                <Link href="#">
                  Marketing <FaChevronRight />
                </Link>
                {marketingDropdown && (
                  <ul className="dropdown2">
                    <li>
                      <Link href="/content-writing" onClick={handleClick}>Content Writing</Link>
                    </li>
                    <li>
                      <Link href="/branding" onClick={handleClick}>Branding</Link>
                    </li>
                    <li>
                      <Link href="/web-analytics" onClick={handleClick}>Web Analytics</Link>
                    </li>
                    <li>
                      <Link href="/social-media-marketing" onClick={handleClick}>Social Media Marketing</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                onMouseEnter={() => !isMobile && setBlockchainDropdown(true)}
                onMouseLeave={() => !isMobile && setBlockchainDropdown(false)}
                onClick={(e) => { isMobile && handleDropdownToggle(setBlockchainDropdown); stopPropagation(e); }}
              >
                <Link href="#">
                  Blockchain <FaChevronRight />
                </Link>
                {blockchainDropdown && (
                  <ul className="dropdown2">
                    <li>
                      <Link href="/smart-contracts-development" onClick={handleClick}>Smart Contracts Development</Link>
                    </li>
                    <li>
                      <Link href="/dapps-development" onClick={handleClick}>dApps Development</Link>
                    </li>
                    <li>
                      <Link href="/nft-marketplace-development" onClick={handleClick}>NFT Marketplace Development</Link>
                    </li>
                    <li>
                      <Link href="/nft-consulting" onClick={handleClick}>NFT Consulting</Link>
                    </li>
                    <li>
                      <Link href="/blockchain-development-consulting-company-lampros-tech" onClick={handleClick}>Blockchain Development Consulting</Link>
                    </li>
                    <li>
                      <Link href="/defi-development" onClick={handleClick}>DeFi Development</Link>
                    </li>
                    <li>
                      <Link href="/guide-to-blockchain-requirement-analysis"onClick={handleClick}>Blockchain Analysis</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/ed-tech" onClick={handleClick}>Ed-Tech</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/blog" onClick={handleClick}>Blog</Link>
        </li>
        <li>
          <Link href="/case-studies" onClick={handleClick}>Case Studies</Link>
        </li>
        <li>
          <Link href="/contact-us" onClick={handleClick}>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navlinks;
