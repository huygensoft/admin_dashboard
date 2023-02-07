import React from 'react'
import '../users/user.scss'
import Footer from '../home/Footer'

export default function Books() {
  return (
    <div className='container'>

        <div className='header'>
            <h3 className='header-title'>Books </h3>
            <span className='header-tag'>All Users in Booksrite Platform</span>
        </div>

        {/* <Cates />
        <Chart />
        <Table /> */}
        <Footer />
    </div>
  )
}
