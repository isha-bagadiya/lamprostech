import React from 'react'
import Hero from './components/Hero'
import Know from './components/Know'
import BlockchainServices from './components/BlockchainServices'
import WDservices from './components/WDservices'
import TechStack from './components/TechStack'
import Partnership from './components/partnership'
import Why from './components/Why'
import Introarea from './components/introarea'
import ContactUs from './components/ContactUs'
import Bookcall from './components/Bookcall'
import Dao from './components/Dao'
import Client from './components/Client'
import Blogs from './components/Blogs'
import Guide from './components/Guide'

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
      <Bookcall />
      <Dao />
      <Client />
      <Guide />
      <Blogs />
      <Introarea />
      <ContactUs />
    </div>
  )
}

export default page
