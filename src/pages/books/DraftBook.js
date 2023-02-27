import React from 'react'
import DraftTable from './DraftTable'
import SearchSort from '../../layouts/searchSort/SearchSort'
import Footer from '../overview/Footer'

export default function DraftBook() {
  return (
    <div className='draft-book container'>

          {/* Search Button */}
        <div className='book-search-container'>
            <SearchSort />
        </div>

      <h2>Books Still In Draft</h2>
      <DraftTable />
      <Footer />
    </div>
  )
}
