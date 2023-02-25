import React from 'react'
// import { Link } from 'react-router-dom'
import Category from './Category'
import Chart from '../overview/Chart'
import Table from './Table'
import Footer from '../overview/Footer'

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
        <Chart title='Statistical' />
        <div className='table-title'>All Users</div>
        <Table />
        
          {/* Url params
            <div>Users</div>
            <div>
            {profiles.map((profile) => {
                    return (
                        <section key={profile.id}>
                            <h3>{profile.id}</h3>
                            <h2>{profile.name}</h2>
                            <Link to={`/user/${profile.id}`}>View</Link> 
                        </section>
                    )
                })}
        </div> */}


        {/* ends */}
        <Footer />
    </div>
  )
}
