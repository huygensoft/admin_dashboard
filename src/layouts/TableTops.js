import React from 'react'
import './tabletop.scss'
import SearchIcon from '../images/SearchIcon.svg'
import ExportIcon from '../images/ExportIcon.svg'
import FilterIcon from '../images/FilterIcon.svg'

export default function TableTops() {
  return (
    <div className='table-tops'>
        <form>
            <input type='search' placeholder='Search Transaction'/>
            <img src={SearchIcon} alt='search' className='table-search'/>
        </form>

        <div className='table-box'>
            <div className='tablebox-1'>Export CSV File <img src={ExportIcon} alt='export' className='tablebox-img'/></div>
            
            <div className='tablebox-2'>Filter By <img src={FilterIcon} alt='filter' className='tablebox-img-2'/></div>
        </div>
    </div>
  )
}
