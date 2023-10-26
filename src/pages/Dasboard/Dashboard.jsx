import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Footer from '../../components/views/LandingPage/Footer/Footer'
import Conversor from '../../components/Conversor/Conversor'

const Dashboard = () => {
  return (
    <div>
      <Layout/>
      <Conversor/>
      <Footer/>
    </div>
    
  )
}

export default Dashboard