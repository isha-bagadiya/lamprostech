"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from "../../../public/MainLogo.png"
import Navlinks from './Navlinks';
import "../styles/header.css"
import { Twirl as Hamburger } from 'hamburger-react'


const Header = () => {

const [isOpen, setOpen] = useState(false)
const closeMenu = () => {
  setOpen(false);
};

  return (
    <div className='main-header'>
        <div className='logo-div'>
            <Link href="/">
                <Image src={Logo} alt='logo' className='logoimg'></Image>
            </Link>
        </div>
        <div className='navlink-div'>
        <Navlinks closeMenu = {closeMenu} />
        </div>
        <div className='hamburger-div'>
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} color='#7DDEDA' />
        {isOpen && 
        <div className="mobile-navlinks"><Navlinks  closeMenu = {closeMenu} /></div>}
        </div>
    </div>
  );
}

export default Header;
