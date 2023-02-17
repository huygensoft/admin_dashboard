import React from 'react'
import './books.scss'
import { Link } from 'react-router-dom'
import user from '../home/user.svg'
import BookGraph from './BookGraph'
import BookTable from './BookTable'
import Footer from '../home/Footer'

export default function Books() {
  return (
    <div className='container'>

        <div className='title'>
            <h3 className='title-salute'>Books </h3>
            <span className='title-tag'>All Users in Booksrite Platform</span>
        </div>

        {/* Books Navigation */}
        <div className='book-info-container'>
            <div className='book-item'>
                <img src={user} alt='forum'/>
                <div className='book-item-word'><Link to='/published'>Published <br /> Books</Link></div>
            </div>

            <div className='book-item'>
                <img src={user} alt='forum'/>
                <div className='book-item-word'><Link to='/draftbook'>Books Still In <br /> Draft</Link></div>
            </div>

            <div className='book-item'>
                <img src={user} alt='forum'/>
                <div className='book-item-word'><Link to='/readbook'>Most Read <br />Books</Link></div>
            </div>

            <div className='book-item'>
                <img src={user} alt='forum'/>
                <div className='book-item-word'><Link to='/newlybook'>Newly Added <br />Books</Link></div>
            </div>

        </div>


        {/* Search Button */}
        <div className='book-search-container'>
            <form>
              <input type='text' placeholder='Search' />
            </form>
        </div>

    
        <BookGraph />

        <div className='book-table-title'>Lists Of Books</div>
        <BookTable />
        <Footer />
    </div>
  )
}
