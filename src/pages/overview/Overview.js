import React from 'react'
import './overview.scss'
import Info from './Info'
import Chart from './Chart'
import Progressbar from './Progressbar'
import NewUser from './NewUser'
import Footer from './Footer'

export default function Home() {
  return (
    <div  className='overview'>

        <div className='title'>
            <h3 className='title-salute'>Good Evening Faith, </h3>
            <span className='title-tag'> Welcome back to your Dashboard</span>
        </div>

        <Info />
        <Chart title='Statistical' />
        <Progressbar />
        <div className='NewUser-title'>Newly Registered Users</div>
        <NewUser />
        <Footer />

    </div>
  )
}
