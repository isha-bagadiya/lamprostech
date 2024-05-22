import React from 'react'
import "../styles/know.css"
import Image from 'next/image'
import headphone from '../../../public/need-to-know-img.png'

const Know = () => {
  return (
    <div className='need-to-know-section'>
      <h1 className='know-header'>Lampros Tech: All You Need To Know!</h1>
      <p className='know-paragraph'>Lampros Tech is a leading Blockchain Development Company with a team of young, passionate professionals who strive to make technology accessible to everyone. We have worked for years to make businesses more successful using technology and now we want to do the same for blockchain technology. We are guided by our strong values of innovation, commitment, and trust in the way we partner with our clients. Over the years, we have grown into a team of expert web and blockchain developers, who transform your ideas into reality. We boast of a diverse client portfolio spread across the globe and are the right choice of technology partner for you.</p>
      <div className='know-img-div'>
    <Image src={headphone} alt='headphone-img' className='know-img'></Image>
    </div>
    </div>
  )
}

export default Know
