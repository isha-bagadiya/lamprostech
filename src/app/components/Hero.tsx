"use client"
import React from 'react'
import "../styles/hero.css"
import Link from 'next/link'
import Image from 'next/image'
import heroimg from '../../../public/hero-img.png'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Hero = () => {

    const handleBookButtonClick = () => {
        window.open('https://calendly.com/harshil_lamprostech/pick-mutual-availability?month=2024-05', '_blank', 'noopener,noreferrer');
      };

  return (
    <div className='hero-section'>
        <div className='hero-content'>
            <h1 className='heading1'>Be future-ready!</h1>
            <p className='heading2'>With Lampros Tech: A Leading Blockchain Development Company</p>
            <p className='description'>Changes are unfolding in the blink of an eye. Our <span className='description-bold'>Blockchain Development </span>and end-to-end Web Development solutions put you a step ahead of the current times.</p>
            <button onClick={handleBookButtonClick} className='book-button'>BOOK A FREE CONSULTATION</button>

        </div>
        <div className='hero-img-div'>
            <Image src={heroimg} alt='hero-image' className='hero-img' ></Image>
        </div>
    </div>
  )
}

export default Hero
