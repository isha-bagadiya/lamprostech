import React from "react";
import styles from "../styles/aboutus.module.css";
import Image from "next/image";
import Logo from "../../../public/dark_logo.webp";

const page = () => {
  return (
    <div className={styles.aboutus}>
      <div className={styles.intro1}>
        <h2 className={styles.text}>Lampros Tech is a Leading Blockchain Development Company that Simplifies Digital Transformation to Make You Future-ready!</h2>
        <p className={styles.text2}>At Lampros Tech, we provide a wide range of services that includes Web Development as well as Blockchain Development. Our team of highly skilled developers will take care of your diverse business requirements!</p>
      </div>

      <div className={styles.intro2}>            
        <div className={styles.logoContent}>
            <div className={styles.content}>Lampros Tech was founded by a team of technocrats with multi-domain experience in industries like Education. Telecom, Insurance, and Business Process Outsourcing. With such varied experience and a vision for innovation, we have provided stellar services to our clients over years and pride ourselves in providing integrated solutions.</div>
            <br />
            <div className={styles.content}>Our aim is to simplify digital transformation and provide a platform for entrepreneurs, small businesses and big corporations to improve their business impact. We are guided by our strong values of innovation, commitment, and trust in the way we partner with our clients. Over the years, we have grown into a team of expert developers, who transform your ideas into digital products. We boast of a diverse client portfolio spread across the globe and are the right choice of technology partner for you.</div>
            <div className={styles.imgDiv}>
              <Image src={Logo} alt="logo" className={styles.img}></Image>
            </div>
        </div>
        <div className={styles.twoboxDiv}>
          <div className={styles.vision}>
            <h1>Our Vision</h1>
            <p>Empowering EVERY business, big or small, to go digital.</p>
          </div>
          <div className={styles.mission}>
            <h1>Our Mission</h1>
            <p>To simplify digitization for our clients by innovation, commitment, and trust and making technology accessible to all.</p>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default page;
