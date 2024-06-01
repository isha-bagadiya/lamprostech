import React from "react";
import "./style.css";
import styles from "../styles/ContactUs.module.css";
import ContactUs from "../components/ContactUs";

const page = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.div1}>
        {/* <ContactUs /> */}
        
      </div>
      
      <div className={styles.googleMap}>
          <iframe
            src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sLampros+Tech,+1211,+Shilp+Epitome,+behind+Rajpath+Rangoli+Road,+Bodakdev,+Ahmedabad,+Gujarat+380054!5e0!6i12"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
      </div>
    </div>
  );
};

export default page;
