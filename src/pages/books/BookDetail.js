import React from 'react'
import BookDetailGraph from './BookDetailGraph'
import BookDetailImpression from './BookDetailImpression'
import BookDetailReview from './BookDetailReview'
import Footer from '../home/Footer'
import './bookdetail.scss'
import book_detail_image from '../../images/book_detail_image.svg'
// import user from ''

export default function BookDetail() {
  return (
    <div className='book-detail container'>
        {/* book portrait */}
        <div className='book-portrait-container'>
            <img src={book_detail_image} alt='book-portrait'/>
            
            <div className='book-portrait-content'>
                <h3>BEST SELLING AUTHOR</h3>
                <h2>THE PSYCHOLOGY OF MONEY</h2>
                <p>
                Doing well with money isn’t necessarily about what you <br />
                know. It’s about how you behave. And behaviour is hard <br />
                to teach, even to really smart people.
                </p>
                <button> See Overview</button>
            </div>

        </div>

        {/* book graph */}
        <h3 style={{color: '#0E625F', fontWeight: 700}}>GRAPHICAL REPRESENTATION</h3>
        <h2 style={{fontSize: 36, fontWeight: 600, marginTop: 5,}}>Number Of Downloads</h2>
        <BookDetailGraph />

        {/* book impression */}
        <h2 style={{fontSize: 36, fontWeight: 600, marginTop: 5,}}>Impressions</h2>
        <BookDetailImpression />

        {/* book reviews */}
        <h2 style={{fontSize: 36, fontWeight: 600, marginTop: 5,}}>Reviews</h2>
        <BookDetailReview />

        <Footer />

    </div>
  )
}
