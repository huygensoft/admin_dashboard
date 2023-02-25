import React from 'react'
import user from './user.svg'
import books from './books.svg'
import writers from './writers.svg'
import readers from './readers.svg'
import './Info.scss';

export default function Info() {
  return (
    <div className='info'>
        <div className='info-container'>
            <div className='info-item'>
                <img src={user} alt='forum'/>
                <div className='info-item-right'>
                    <span className='info-item-number'>120,000</span>
                    <span className='info-item-word'>Users</span>
                </div>
            </div>

            <div className='info-item'>
                <img src={writers} alt='forum'/>
                <div className='info-item-right'>
                    <span className='info-item-number'>20,000</span>
                    <span className='info-item-word'>Writers</span>
                </div>
            </div>

            <div className='info-item'>
                <img src={readers} alt='forum'/>
                <div className='info-item-right'>
                    <span className='info-item-number'>100,000</span>
                    <span className='info-item-word'>Readers</span>
                </div>
            </div>

            <div className='info-item'>
                <img src={books} alt='forum'/>
                <div className='info-item-right'>
                    <span className='info-item-number'>80,000</span>
                    <span className='info-item-word'>Books</span>
                </div>
            </div>
        </div>

    </div>
  )
}
