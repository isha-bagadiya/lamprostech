"use client";
import React from "react";
import styles from "../styles/career.module.css";
import Image from "next/image";
import Logo from "../../../public/monitor-image-2.webp";
import Growth from "../../../public/growth.webp";
import Hardwork from "../../../public/hardwork.webp";
import Balance from "../../../public/balance.webp";
import Goals from "../../../public/Goals_img.webp";
import HiringImg from "../../../public/hiring image.png";
import openJobs from "../../../public/openings.json";
import { MdArrowRightAlt } from "react-icons/md";

const page = () => {
  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/jobs/lampros-tech-jobs-worldwide?f_C=30971451&trk=top-card_top-card-primary-button-top-card-primary-cta&position=1&pageNum=0",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleInternshalaClick = () => {
    window.open(
      "https://internshala.com/internships/internship-at-Lampros%20Tech",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className={styles.careersPage}>
      <div className={styles.div1}>
        <h1>Careers @ Lampros Tech</h1>
        <h2>Visualising the future together</h2>
        <p>
          Our organisation and team are built on trust, commitment and
          transparency.
        </p>
        <button>Join Our Team</button>
      </div>

      <div className={styles.div2}>
        <div className={styles.container2}>
          <div className={styles.content}>
            <h2>
              Join The Modern Work Environment Inspired by Growth and
              Independence
            </h2>
            <p>
              We are a group of passionate individuals who work towards a
              collective goal, which is to digitise the industries and help them
              grow. All the limitations and hindrances that might cause you to
              think inside of the box are removed here. Lampros Tech believes in
              encouraging each individual to learn, grow and explore.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image src={Logo} alt="logo" className={styles.img}></Image>
          </div>
        </div>
      </div>

      <div className={styles.div3}>
        <div className={styles.promises}>
          <h2>
            3 Promises
            <br />
            That We Make @ Lampros Tech
          </h2>
          <p>
            Joining our team is not just limited to a cool work environment, but
            we also provide:
          </p>
        </div>
        <div className={styles.images}>
          <div className={styles.growth}>
            <Image
              src={Growth}
              alt="growth"
              title="growth"
              className={styles.imgPromise}
            ></Image>
            <h2>Continuous Growth</h2>
            <p>
              Knowledge is infinite, therefore we believe that learning is
              continuous, and you can never know enough. We encourage you to
              learn and update your skills so there is no hindrance in your
              growth.
            </p>
          </div>
          <div className={styles.hardwork}>
            <Image
              src={Hardwork}
              alt="hardwork"
              title="effort"
              className={styles.imgPromise}
            ></Image>
            <h2>Work Hard, Play Hard</h2>
            <p>
              We help you press the refresh button by organising brunches and
              tournaments. We enjoy a good team bonding session because quite
              honestly, who doesn’t?
            </p>
          </div>
          <div className={styles.balance}>
            <Image
              src={Balance}
              alt="balance"
              title="balance"
              className={styles.imgPromise}
            ></Image>
            <h2>Work Life Balance</h2>
            <p>
              We believe that there should be a fair balance between work and
              life, therefore the company policies are designed in such a way
              that your personal life isn’t affected by your work life.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.div4}>
        <div className={styles.container4}>
          <div className={styles.corevalue}>
            <h2>Our Core Values</h2>
            <h3>01 Innovation</h3>
            <p>
              We believe together as a team, we can dream, develop and innovate
              bigger and better.
            </p>
            <h3>02 Commitment</h3>
            <p>
              We are committed to your growth, and therefore we encourage you to
              take ownership of projects and your work.
            </p>
            <h3>03 Trust</h3>
            <p>Our work culture is solely based on honesty and transparency.</p>
          </div>
          <div className={styles.image4}>
            <Image src={Goals} alt="goals" className={styles.imgGoals}></Image>
          </div>
        </div>
      </div>

      <div className={styles.div5}>
        <div className={styles.container5}>
          <div className={styles.openings}>
            <h1>
              Join the journey full of innovation and new creations with Lampros
              Tech
            </h1>
            <h2>Come work with us!</h2>
            <p>View openings in:</p>
            <div className={styles.buttons5}>
              <button onClick={handleLinkedinClick}>Linkedin</button>
              <button onClick={handleInternshalaClick}>Intershala</button>
            </div>
          </div>
          <div className={styles.img5}>
            <Image
              src={HiringImg}
              alt="hiringimg"
              className={styles.hiringImg}
            ></Image>
          </div>
        </div>
      </div>

      <div className={styles.div6}>
        <div className={styles.container6}>
          <h2>Careers @ Lampros Tech</h2>
          <div className={styles.jobs6}>
            <div className={styles.dropdownSelection6}></div>
            <div className={styles.jsonContainer}>
              {openJobs.map((job, index) => (
                <div key={index} className={styles.jobItem}>
                  <p className={styles.jobTitle}>{job.title}</p>
                  <p className={styles.jobType}>{job.type}</p>
                  <p className={styles.jobLocation}>{job.location}</p>
                  <p className={styles.jobDetails}>{job.details}<MdArrowRightAlt /></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
