import React from "react";
import styles from "../styles/client.module.css";

const Client = () => {
  const testimonials = [
    {
      text: "Lampros team was great at content writing and blog optimization. Besides doing a great job, they communicated very proactively and were great about clarifying any confusion on the project to make sure that it is completed successfully.",
      author: "TOP DIGITAL ANALYTICS & MARKETING FIRM, UNITED STATES",
    },
    {
      text: "Lampros has a superpower for making all the things work seamlessly. Their work is flawless and it is very clear that they care about the work and time and deliver the project effectively. We are really happy for Lampros' determination on this project to deliver our project with very good quality. Big Kudos to you!!",
      author: "ONE OF THE WORLD'S LEADING ED-TECH COMPANIES, UNITED STATES",
    },
    {
      text: "The team did an amazing job designing images and creating our Pitch deck. They did the necessary research, analysed the new business and put up great content with amazing designing for the deck. Highly recommended marketing firm!",
      author: "US-BASED DIGITAL AGENCY STARTUP",
    },
  ];

  return (
    <div className={styles.mainsection}>
      <h1 className={styles.header}>Client Testimonials</h1>
      <div className={styles.section}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonial}>
            <p className={styles.text}>{testimonial.text}</p>
            <p className={styles.author}>{testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
