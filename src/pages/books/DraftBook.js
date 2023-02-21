import React from 'react'
import DraftTable from './DraftTable'
import Footer from '../home/Footer'

export default function DraftBook() {
  return (
    <div className='draft-book container'>

       {/* Search Button */}
       <div className='book-search-container'>
            <form>
              <input type='text' placeholder='Search' />
            </form>
        </div>
      <h2>Books Still In Draft</h2>
      <DraftTable />
      <Footer />
    </div>
  )
}
