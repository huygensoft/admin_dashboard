import React from 'react'
import PublishedTable from './PublishedTable'
import Footer from '../home/Footer'
import { Link } from 'react-router-dom'

export default function Published() {
  return (
    <div className='published container'>

         {/* Search Button */}
         <div className='book-search-container'>
            <form>
              <input type='text' placeholder='Search' />
            </form>
        </div>
        <h2> List of Published Books</h2>
        <PublishedTable />
        <Link to='/bookdetail'>View</Link>
        <Footer />
    </div>
  )
}
