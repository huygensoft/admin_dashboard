import React from 'react'
import book_detail_image from '../../images/book_detail_image.svg'
import './bookOverview.scss'


export default function BookOverview() {
  return (
    <div className='bookoverview container'>
      <div className='book-view-container'>
        
          <img src={book_detail_image} alt='book page'/>
      
        <div className='book-view-content'>
          <h1>THE PSYCHOLOGY OF MONEY</h1>
          <p>#200</p>
          <div className='book-view-btn'>
            <button>View Book</button>
            <button>Edit Book</button>
          </div>
        </div>
      </div>
    </div>
  )
}
