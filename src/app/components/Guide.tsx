import React from "react";
import styles from "../styles/Guide.module.css";
import Image from 'next/image';
// import LeftImage from "../../../public/Guide_leftImage.png";
// import RightImage from "../../../public/guideRightsideimg.png";
import pic from "../../../public/Lampros-poster-4.png"
import { PiCactusBold } from "react-icons/pi";
import Link from "next/link";

const Guide = () => {
  return (
    <div className={styles.guideMain}>
        <div className={styles.leftUpImgDiv}>
            <Image src={pic} alt="logo" className={styles.guideUpImg}></Image>
        </div>
        <div className={styles.guideContent}>
            <h1 className={styles.guideHeader}>Step-By-Step Guide To Blockchain Requirement Analysis</h1>
            <p className={styles.guideParagraph}>Our guide is used by industry leaders to find the right blockchain solution for them</p>
            <div className={styles.btndiv}>
                <Link href='/guide-to-blockchain-requirement-analysis'><button className={styles.btn}>Free Download</button></Link>
            </div>
        </div>
    </div>
  );
};

export default Guide;