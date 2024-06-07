import React from "react";
import styles from "../styles/introarea.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaMailBulk } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Introarea = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
      <div className={styles.whatcard}>
        <div>
          <h2 className={styles.header}>What we Do ?</h2>
          <p className={styles.para}>
            We provide stellar services to a diverse range of industries. Our
            services include Blockchain Development, Front End Development, Back
            End Development, CMS Development, and more.
          </p>
          </div>
          <Link href='/' className={styles.link}>
          Learn More <FaLongArrowAltRight />
          </Link>
          
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.rightup}>
        <div className={styles.whocard}>
            <div>
          <h2 className={styles.header}>Who are we ?</h2>
          <p className={styles.para}>
            Highly trained professionals who provide web development and
            blockchain development services to US based clients. We take pride
            in our rich clientele base in San Fransisco, California.
          </p>
          </div>
          <Link href="/" className={styles.link}>Learn More <FaLongArrowAltRight /></Link>
        </div>

        <div className={styles.locationcard}>
            <div>
          <h2 className={styles.header}>Our Location</h2>
          <p className={styles.para}>
            1211, Shilp Epitome, Behind Rajpath Rangoli Rd, Ahmedabad, Gujarat
            380054
          </p>
          </div>
          <Link href="/" className={styles.link}>Get Directions <FaLongArrowAltRight /></Link>
        </div>

        </div>
        <div className={styles.rightbelow}>
        <div className={styles.mailcard}>
            <div>
          <h2 className={styles.header}>Lets Get In Touch</h2>
          <p className={styles.para}>
            Drop us a line to enquire about our blockchain development services.
            We are a leading blockchain development and web development company
            with our clients based in United States, Europe, and Asia. Let's
            connect to discuss your ideas and bring them into reality. We'll get
            back to you within a business day.
          </p>
          </div>
          <Link href="mailto:info@lampros.tech" className={styles.mail}>
            <p className={styles.iconMail}><FaMailBulk /></p>
            <p className={styles.mailText}>Book an appointment <br /> info@lampros.tech</p>
          </Link>
        </div>
        </div>        
      </div>
    </div>
  );
};

export default Introarea;