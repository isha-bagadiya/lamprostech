import React from "react";
import styles from "../styles/partnership.module.css";
import partnershipmodels from "../../../public/partnership.json";
import Link from "next/link";
import { PiCaretCircleRight } from "react-icons/pi";


const Partnership = () => {
  return (
    <section className={styles.main}>
      <div className={styles.backgroundoverlay}></div>
      <div className={styles.partnershipsectionbg}>
        <div className={styles.section}>
        <h1 className={styles.header}>Partnership Models</h1>
        <p className={styles.para}>We have a tailor-made partnership model for every type of business.</p>
        <p className={styles.para}>You dream of an idea and let us do the building!</p>
        <div className={styles.modellist}>
          {partnershipmodels.map((model, index) => (
          <div key={index} className={`${styles.model} ${styles[`model${index + 1}`]}`}>
          <h2 className={styles.modelheader}>{model.type}</h2>
              <p className={styles.modelpara}>{model.description}</p>
              <Link href="/contact-us" className={styles.rightlink}>
                <PiCaretCircleRight className={styles.right}/>
              </Link>
            </div>
          ))}
        </div>
        </div>
      </div>
      </section>
  );
};

export default Partnership;
