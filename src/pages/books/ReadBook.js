import React from 'react'
import ReadTable from './ReadTable'
import Footer from '../home/Footer'

export default function ReadBook() {
  return (
    <div className='read-table container'>
        {/* Search Button */}
       <div className='book-search-container'>
            <form>
              <input type='text' placeholder='Search' />
            </form>
        </div>
      <h2>Most Read Books</h2>
      <ReadTable />
      <Footer />
    </div>
  )
}
