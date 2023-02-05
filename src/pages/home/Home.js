import React from 'react'
import './home.scss'
import Info from './Info'
import Chart from './Chart'
import Gender from './Gender'
import NewUser from './NewUser'
import Footer from './Footer'

export default function Home() {
  return (
    <div  className='home'>

        <div className='title'>
            <h3>Good Evening Faith, </h3>
            <span className='title-tag'> Welcome back to your Dashboard</span>
        </div>

        <Info />
        <Chart />
        <Gender />
        <NewUser />
        <Footer />

    </div>
  )
}
