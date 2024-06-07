"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/dao.module.css";

import img1 from "../../../public/knoDao.webp";
import img2 from "../../../public/factstationdao.webp";
import img3 from "../../../public/analysis.webp";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";



const Dao = () => {
  const images = [img1, img2, img3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('next');


  const nextImage = () => {
    setAnimationDirection('next');
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setAnimationDirection('prev');
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); 
    return () => clearInterval(interval); 
  }, [currentIndex]);

  return (
    <div className={styles.mainsection}>
      <h1 className={styles.header}>
        Lampros Tech: A Leading Blockchain Development Company
      </h1>
      <p className={styles.para}>
        We have delivered numerous successful projects across blockchain
        platforms. Check out how companies have become a part of Web 3.0 using
        our Blockchain Development services</p>
        <div className={styles.slidersection}>
            <div onClick={prevImage} className={styles.leftButton}>
              <FaAngleLeft />
            </div>
          <div className={`${styles.sliderimg} ${styles[animationDirection]}`}
>
            
            <Image
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className={styles.image}
            />
            
          </div>
          <div onClick={nextImage} className={styles.rightButton}>
              <FaAngleRight />
            </div>
        </div>
    </div>
  );
};

export default Dao;
