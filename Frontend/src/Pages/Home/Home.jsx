import React from 'react'
import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import Nav from '../../Components/Nav/Navigation'
import Card from '../../Components/Cards/Card'
import Footer from '../../Components/Footer/Footer'


function Home() {
  return (
    <div>
      {/* Nav */}
      <Nav/>

      {/* Banner */}
      <Banner/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default Home