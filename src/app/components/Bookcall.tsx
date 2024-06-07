"use client"
import React from 'react'
import styles from '../styles/bookcall.module.css'
import Image from 'next/image'
import logo from '../../../public/MainLogo.png'
import blockchain from '../../../public/bookcall.png'

const handleBookButtonClick = () => {
    window.open('https://calendly.com/harshil_lamprostech/pick-mutual-availability?month=2024-05', '_blank', 'noopener,noreferrer');
  };

const Bookcall = () => {
  return (
    <div className={styles.mainsection}>
      <div className={styles.content}>
        <div className={styles.logodiv}>
            <Image src={logo} alt='logo'></Image>
        </div>
        <h3 className={styles.heading}>Unlock New Possibilities with Lampros Tech&apos;s Cutting-Edge Blockchain Solutions</h3>
        <p className={styles.para}>Take Your Business to the Next Level - Book a Free Consultation Call Today and Discover the Transformative Potential of Decentralized Technology!</p>
        <button onClick={handleBookButtonClick} className={styles.button}>Book a Free Call Now!</button>
      </div>
      <div className={styles.imgdiv}>
        <Image src={blockchain} alt='blockchain' className={styles.img}></Image>
      </div>
    </div>
  )
}

export default Bookcall
