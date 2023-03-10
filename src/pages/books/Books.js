import React from 'react'
import './books.scss'
import { Link } from 'react-router-dom'
import bookOne from '../../images/bookOne.svg'
import bookTwo from '../../images/bookTwo.svg'
import bookThree from '../../images/bookThree.svg'
import bookFour from '../../images/bookFour.svg'
import BookGraph from './BookGraph'
import BookTable from './BookTable'
import Footer from '../overview/Footer'
import SearchSort from '../../layouts/searchSort/SearchSort'

export default function Books() {
  return (
    <div>

        <div className='title'>
            <h3 className='title-salute'>Books </h3>
            <span className='title-tag'>All Users in Booksrite Platform</span>
        </div>

        {/* Books Navigation */}
        <div className='book-info-container'>
            <div className='book-item'>
                <img src={bookOne} alt='forum'/>
                <div className='book-item-word'><Link to='published'>Published <br /> Books</Link></div>
            </div>

            <div className='book-item'>
                <img src={bookFour} alt='forum'/>
                <div className='book-item-word'><Link to='draftbook'>Books Still In <br /> Draft</Link></div>
            </div>

            <div className='book-item'>
                <img src={bookTwo} alt='forum'/>
                <div className='book-item-word'><Link to='readbook'>Most Read <br />Books</Link></div>
            </div>

            <div className='book-item'>
                <img src={bookThree} alt='forum'/>
                <div className='book-item-word'><Link to='newlybook'>Newly Added <br />Books</Link></div>
            </div>

        </div>


        {/* Search Button */}
        <div className='book-search-container'>
            <SearchSort />
        </div>

        {/* Graph */}
        <BookGraph />

        <div className='book-table-title'>Lists Of Books</div>
        <BookTable />
        <Footer />
    </div>
  )
}
