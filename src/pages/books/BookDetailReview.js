import React from 'react'
import bookStar from '../../images/bookStar.svg'

export default function BookDetailReview() {
  return (
    <div className='book-detail-review'>
        <div className='review-box'>
          <h3>Olamigoke Oluwaseun <img src={bookStar} alt='star'/></h3>
          <p className='review-paragraph'>This book is a very insightful one, also a lovely Book. I recommend 
            this 100% to any one seeking to break into real time wealth</p>
        </div>
        <div className='review-box'>
          <h3>Olamigoke Oluwaseun <img src={bookStar} alt='star'/></h3>
          <p className='review-paragraph'>This book is a very insightful one, also a lovely Book. I recommend 
            this 100% to any one seeking to break into real time wealth</p>
        </div> 
        <div className='review-box'>
          <h3>Olamigoke Oluwaseun <img src={bookStar} alt='star'/></h3>
          <p className='review-paragraph'>This book is a very insightful one, also a lovely Book. I recommend 
            this 100% to any one seeking to break into real time wealth</p>
        </div>
        <div className='review-box'>
          <h3>Olamigoke Oluwaseun <img src={bookStar} alt='star'/></h3>
          <p className='review-paragraph'>This book is a very insightful one, also a lovely Book. I recommend 
            this 100% to any one seeking to break into real time wealth</p>
        </div>
        <button> See more</button>
    </div>
  )
}
