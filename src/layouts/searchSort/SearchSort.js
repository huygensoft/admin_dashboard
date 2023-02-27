import React from 'react'
import './searchsort.scss'
import FilterIcon from '../../images/FilterIcon.svg'


export default function SearchSort() {
  return (
    <div className='search-sort'>
        <form className='sort-form'>
            <input type='text' placeholder='Search' className='sort-input'/>
            <div className='sort-inner'>
                Filter By: 
                <img src={FilterIcon} alt='' className='sort-img'/>
            </div>
        </form>
    </div>
  )
}
