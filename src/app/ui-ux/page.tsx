import React from 'react'
import styles from  "./uiux.module.css"
import Image from 'next/image'
import hero from '../../../public/ui-uxpage/hero image.png'


const page = () => {
  return (
    <div>
    <div className={styles.main}>
      <div className={styles.left}>
        <h1 className={styles.header1}>UI/UX Design</h1>
        <h4 className={styles.header2}>Bring your websites to life with our aesthetic and interactive designs!</h4>
        <p className={styles.para}>How your websites look will create your brand identity and impact your brand appeal. Web design is the first step in the way you communicate with your customer. Having an appealing interface and high usability is a must for any business. Lampros Tech has expert resources with an eye for detail and a keen sense of imagination. Our integrated design process will add persona to your website.</p>
      </div>
      <div className={styles.right}>
        <Image src={hero} alt='hero'></Image>
      </div>
    </div>

    <div>
      <h4>Why Choose Lampros Tech?</h4>
      <p>By choosing us, you choose a combination of highly trained employees and a customer-friendly - quick to response service! Lampros market value precedes itself. We provide timely, accurate services with a great deal of satisfaction for the clients.

</p>
    </div>
    </div>
  )
}

export default page
