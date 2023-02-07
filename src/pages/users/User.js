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
            <h3 className='header-title'>Users </h3>
            <span className='header-tag'>All Users in Booksrite Platform</span>
        </div>

        <Category />
        <Chart />
        <Table />
        <Footer />
    </div>
  )
}
