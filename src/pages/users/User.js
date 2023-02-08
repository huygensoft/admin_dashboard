import React from 'react'
import Category from './Category'
import Chart from '../home/Chart'
import Table from './Table'
import Footer from '../home/Footer'
import './user.scss'

export default function User() {
  return (
    <div className='container'>

        <div className='header'>
            <div className='header-left'>
              <h3 className='header-title'>Users </h3>
              <span className='header-tag'>All Users in Booksrite Platform</span>
            </div>

            <div className='header-right'>
              <h3 className='header-title'>All Users </h3>
              <span className='header-tag'>120,000</span>
            </div>
        </div>

        <Category />
        <Chart />
        <div className='table-title'>All Users</div>
        <Table />
        <Footer />
    </div>
  )
}
