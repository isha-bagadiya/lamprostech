import React from 'react'
import styles from '../styles/WDservices.module.css'
import wdservices from '../../../public/wdservices.json';
import Image from 'next/image';
import Link from 'next/link';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";



const WDservices = () => {
  return (
    <div className={styles.wdservices}>
      <h1 className={styles.wdserviceheader}>Our Web Development Services</h1>
      <p className={styles.wdservicepara}>Lampros Tech is a leading Web Development Company providing end-to-end solutions for all the digital needs of a corporation / start-up. Ranging from a wide variety of services starting from Web Development, SEO boasting, Branding, Marketing. You name it, we have it!</p>
      <div className={styles.wdservicelist}>
      {wdservices.map((wdservice, index) => (
          <div key={index} className={styles.wdserviceitem}>
            <div className={styles.imgdiv}>
            <Image
              src={wdservice.img}
              alt={wdservice.header}
              width={0} 
              height={0} 
              layout="responsive"
            />
            </div>
            <div>
            <h2 className={styles.listheader}>{wdservice.header}</h2>
            <Link href={wdservice.url} className={styles.link}>
            <p className={styles.listcontent}>{wdservice.content} <LiaLongArrowAltRightSolid className={styles.right}/></p>
            </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default WDservices
