import React from "react";
import styles from "../styles/why.module.css";
import { FaNetworkWired, FaFingerprint, FaClock, FaRobot, FaLock, FaFileAlt } from 'react-icons/fa';
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { PiIntersect } from "react-icons/pi";



const data = [
  { icon: LiaNetworkWiredSolid, text: 'Decentralization' },
  { icon: PiIntersect, text: 'Transparency' },
  { icon: FaClock, text: 'Efficiency' },
  { icon: FaRobot, text: 'Automation' },
  { icon: FaLock, text: 'Security' },
  { icon: FaFileAlt, text: 'Privacy' },
];


const Why = () => {
  return (
    <div className={styles.whysection}>
      <h1 className={styles.header}>
        Why Do You Need <br/>Blockchain Development Services by Lampros Tech?
      </h1>
      <p className={styles.p1}>
        While most businesses are too scared or ignorant to embrace the
        multifold benefits of blockchain technology, the ones that take the leap
        are going to be the future leaders.
      </p>
      <p className={styles.p2}>Here&apos;s what blockchain technology can do for you:</p>

      <div className={styles.icontextgrid}>
      {data.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div className={styles.griditem} key={index}>
            <div className={styles.iconcontainer}>
              <IconComponent className={styles.icon} />
            </div>
            <h3 className={styles.text}>{item.text}</h3>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Why;
