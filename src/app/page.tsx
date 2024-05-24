import React from 'react'
import Hero from './components/Hero'
import Know from './components/Know'
import BlockchainServices from './components/BlockchainServices'
import WDservices from './components/WDservices'
import TechStack from './components/TechStack'
import Partnership from './components/partnership'
import Why from './components/Why'
import Introarea from './components/introarea'

const page = () => {
  return (
    <div>
      <Hero/>
      <Know />
      <BlockchainServices />
      <WDservices />
      <TechStack />
      <Partnership />
      <Why />
      <Introarea />
    </div>
  )
}

export default page
