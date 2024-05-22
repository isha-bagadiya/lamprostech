import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from "../../../public/MainLogo.png"
import Navlinks from './Navlinks';
import "../styles/header.css"

const Header = () => {
  return (
    <div className='main-header'>
        <div>
            <Link href="/">
                <Image src={Logo} alt='logo'></Image>
            </Link>
        </div>
        <Navlinks />
    </div>
  );
}

export default Header;
