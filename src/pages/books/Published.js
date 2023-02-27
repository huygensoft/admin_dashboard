import React from 'react'
import PublishedTable from './PublishedTable'
import Footer from '../overview/Footer'
import SearchSort from '../../layouts/searchSort/SearchSort'
// import { Link } from 'react-router-dom'

export default function Published() {
  return (
    <div className='published container'>

         {/* Search Button */}
         <div className='book-search-container'>
            <SearchSort />
        </div>

        <h2> List of Published Books</h2>
        <PublishedTable />
        
        <Footer />
    </div>
  )
}
