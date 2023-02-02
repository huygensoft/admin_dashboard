import React from 'react'
import './Topbar.scss';
import logo from './logo.svg';

export default function Topbar() {
  return (
    <div className='top-bar'>
        <div className='topbar-container'>
            <div className='top-left'>
                <img src={logo} alt='Booksrites logo' className='topbar-logo'/>
                <span className='top-logo-tag'>Booksrite</span>
            </div>
            <div className='top-right'>Dashboard </div>
            <div>
              <form>
                <input type='search' id='search' placeholder='Search Dashboard'/>
              </form>
            </div>
            <div> Notify</div>
        </div>


    </div>
  )
}
