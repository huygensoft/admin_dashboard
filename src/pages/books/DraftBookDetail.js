import React from 'react'
import book_detail_image from '../../images/book_detail_image.svg'
import './bookOverview.scss'
import Footer from '../home/Footer'


export default function DraftBookDetail() {
  return (
    <div className='bookoverview container'>
      {/* top */}
      <div className='book-view-container'>
        
          <img src={book_detail_image} alt='book page'/>
      
        <div className='book-view-content'>
          <h1>THE PSYCHOLOGY OF MONEY</h1>
          <div className='book-view-btn'>
            <button className='btn-1'>View Book</button>
          </div>
        </div>
      </div>

    {/* down */}
        <div className='book-about-container'>
          <h2 className='book-about-title' style={{color: '#0E625F'}}>overview</h2>

          <p>
          In The Psychology of Money, award-winning author Morgan Housel shares 19 
          short stories exploring the strange ways people think about money and teaches
           you how to make better sense of one of life’s most important topics.

          “A genius is the man who can do the average thing when everyone else around 
          him is losing his mind.” —Napoleon “The world is full of obvious things which
           nobody by any chance ever observes.” —Sherlock Holmes

          Doing well with money isn’t necessarily about what you know. It’s about how 
          you behave. And behavior is hard to teach, even to really smart people.

          Money―investing, personal finance, and business decisions―is typically taught
           as a math-based field, where data and formulas tell us exactly what to do.
            But in the real world people don’t make financial decisions on a spreadsheet. 
            They make them at the dinner table, or in a meeting room, where personal history, 
            your own unique view of the world, ego, pride, marketing, and odd incentives are 
            scrambled together.
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
