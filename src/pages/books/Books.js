import React from 'react'
import '../users/user.scss'
import Footer from '../home/Footer'

export default function Books() {
  return (
    <div className='container'>

        <div className='title'>
            <h3 className='title-salute'>Books </h3>
            <span className='title-tag'>All Users in Booksrite Platform</span>
        </div>

        {/* <Cates />
        <Chart />
        <Table /> */}
        <Footer />
    </div>
  )
}
