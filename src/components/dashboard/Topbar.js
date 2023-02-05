import React from 'react'
import './Topbar.scss';
import User from './User.svg';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';

export default function Topbar() {
  return (
    <div className='top-bar'>
        <div className='topbar-container'>
            
            <div className='top-left'>Dashboard </div>
            <div className='search'>
              <form>
                <input type='search' className='search-input' placeholder='Search Dashboard'/>
                <button type='submit' aria-label='submit form' className='search-btn'>
                  <SearchIcon />
                </button>
              </form>
            </div>
            <div className='top-right'> 
              <img src={User} alt='User' className='user-image' />
              <NotificationsNoneIcon sx={{ fontSize: 25 }}/>
            </div>
        </div>


    </div>
  )
}
