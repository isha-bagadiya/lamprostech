import React from 'react'
import "../styles/techstack.css"
import techstack from "../../../public/techstack.json"
import Image from 'next/image'

const TechStack = () => {
  return (
    <div className='techstack-section'>
      <h1 className='techstack-header'>Our BlockChain & Web Development Tech Stack</h1>
      <div className='techstack-list'>
      {techstack.map((techstack, index) => (
          <div key={index} className='techstack-item'>
            <Image
              src={techstack.img}
              alt={techstack.alt}
              className='techstack-image'
              width={100} 
              height={100} 
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
