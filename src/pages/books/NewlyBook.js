import React from 'react'
import NewlyTable from './NewlyTable'
import Footer from '../home/Footer'

export default function NewlyBook() {
  return (
    <div className='newly-book container'>
        {/* Search Button */}
       <div className='book-search-container'>
            <form>
              <input type='text' placeholder='Search' />
            </form>
        </div>
      <h2>Newly Added Books</h2>
      <NewlyTable />
      <Footer />
    </div>
  )
}
