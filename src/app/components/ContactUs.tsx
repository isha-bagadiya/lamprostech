import styles from '../styles/Contact.module.css';

export default function ContactUs() {
  return (
      <div className={styles.container}>
        <div className={styles.innerMainDiv}>
        <div className={styles.leftContent}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.description}>
        Drop us a line to enquire about our services for your new software launch or your latest software innovation. We&apos;ll get back to you within a business day
        </p>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form}>
            <input type="text" name="name" placeholder="Your Name" className={styles.input} />
            <input type="email" name="email" placeholder="Email Address" className={styles.input} />
            <input type="text" name="phone" placeholder="Contact Number" className={styles.input} />
            <p className={styles.description2}>Select your country</p>
            <select name="country" className={styles.select}>
              <option value="usa">U.S.A</option>
              <option value="india">India</option>
              <option value="europe">Europe</option>
              <option value="uk">UK</option>
              <option value="canada">Canada</option>
              <option value="singapore">Singapore</option>
              <option value="australia">Australia</option>
            </select>
            <p className={styles.description2}>Select your Budget</p>
            <select name="budget" className={styles.select}>
              <option value="1-5000">$1,000 - $5,000</option>
              <option value="1-5000">$5,000 - $10,000</option>
              <option value="1-5000">More than $10,000</option>
            </select>
            <textarea name="description" placeholder="Project Description" className={styles.textarea}></textarea>
            <button type="submit" className={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}