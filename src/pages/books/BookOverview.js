import React from 'react'
import book_detail_image from '../../images/book_detail_image.svg'
import './bookOverview.scss'
import Footer from '../home/Footer'


export default function BookOverview() {
  return (
    <div className='bookoverview container'>
      {/* top */}
      <div className='book-view-container'>
        
          <img src={book_detail_image} alt='book page'/>
      
        <div className='book-view-content'>
          <h1>THE PSYCHOLOGY OF MONEY</h1>
          <p>#2000</p>
          <div className='book-view-btn'>
            <button className='btn-1'>View Book</button>
            <button className='btn-2'>Edit Book</button>
          </div>
        </div>
      </div>

    {/* down */}
        <div className='book-about-container'>
          <h2 className='book-about-title'>OVERVIEW</h2>

          <h2>AUTHOR </h2>
          <div>MORGAN HOUSEL </div>

          <h2>DATE OF PUBLICATION </h2>
          <div>8, SEPTEMBER 2020 </div>

          <h2>TOTAL GENERATED INCOME </h2>
          <div>over $100,000 </div>
          
          <div>ABOUT THE BOOK </div>
          <p>
            In The Psychology of Money, award-winning author Morgan Housel shares 
            19 short stories exploring the strange ways people think about money 
            and teaches you how to make better sense of one of life’s most important
            topics. <br /> <br />

            “A genius is the man who can do the average thing when everyone else 
            around him is losing his mind.” —Napoleon “The world is full of obvious 
            things which nobody by any chance ever observes.” —Sherlock Holmes
          </p>


          <div className='book-overview-btns'> 
            <button>Delete Book</button>
            <button>Hide Book</button>
            <button>Unlist Book</button>
            <button>Unpublished Book</button>
          </div>
        </div>

        <Footer />
    </div>
  )
}
