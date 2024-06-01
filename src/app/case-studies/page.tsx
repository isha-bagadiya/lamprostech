import React from "react";
import "./style.css";
import styles from "../styles/CaseStudies.module.css";
import Carousel from "../components/Carousel";

const page = () => {
  return (
    <div className={styles.caseStudies}>
      <div className={styles.div1}>
        <p>Case Studies</p>
      </div>

      <div className={styles.div2}>
        {/* <Carousel /> */}
      </div>
    </div>
  );
};

export default page;
