"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Carousel.module.css";

const Carousel = () => {
  const images = [
    "https://lampros.tech/wp-content/uploads/2022/04/Image-from-iOS-5.jpg",
    "https://lampros.tech/wp-content/uploads/2022/05/Image-from-iOS-4.jpg",
    "https://lampros.tech/wp-content/uploads/2022/05/Image-from-iOS-6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const getTranslateValue = (index: number) => {
    const baseTranslateValue = index * -100;
    const numImages = images.length;

    if (index === numImages) {
      return baseTranslateValue + 100;
    } else if (index === -1) {
      return baseTranslateValue - 100;
    } else {
      return baseTranslateValue;
    }
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselInner}
          style={{
            transform: `translateX(${getTranslateValue(currentIndex)}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          <div className={styles.carouselItem}>
            <img src={images[images.length - 1]} alt={`Image ${images.length}`} />
          </div>
          {images.map((image, index) => (
            <div className={styles.carouselItem} key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
          <div className={styles.carouselItem}>
            <img src={images[0]} alt="Image 1" />
          </div>
        </div>
      </div>
      <button className={styles.arrowLeft} onClick={handlePrevClick}>
        &#10094;
      </button>
      <button className={styles.arrowRight} onClick={handleNextClick}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
