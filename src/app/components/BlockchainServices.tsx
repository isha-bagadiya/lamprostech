import React from 'react'
import "../styles/blockchainservices.css"
import Bservices from '../../../public/blockchainservice.json';
import Image from 'next/image';



const BlockchainServices = () => {
  return (
    <div className='blockchain-services'>
      <h1 className='service-header1'>Our Blockchain</h1>
      <h1 className='service-header1'>Development Services</h1>
      <div className='services-list'>
        {Bservices.map((service, index) => (
          <div key={index} className='service-item'>
            <div className='img-div'>
            <Image
              src={service.img}
              alt={service.header}
              width={0} 
              height={0} 
              layout="responsive"
            />
            </div>
            <div>
            <h2 className='service-header'>{service.header}</h2>
            <p className='service-content'>{service.content}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default BlockchainServices
