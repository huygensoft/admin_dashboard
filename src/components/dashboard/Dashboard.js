import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'
import './Dashboard.scss';
import Topbar from './Topbar';
import logo from './logo.svg';
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import NewspaperIcon from '@mui/icons-material/Newspaper';



function Dashboard() {
  return (
    <div className='dashboard'>

      {/* Sidebar */}
        <div className='side'>
            <div className='side-top'>
                    <img src={logo} alt='Booksrites logo' className='top-logo'/>
                    <div className='top-logo-tag'>Booksrite</div>
            </div>
            <div className='sidebar-menu'>
              <ul className='sidebar-list'>
                  <li className='sidebar-list-item'> <NavLink to='overview' className='link'>
                      <GridViewIcon className='sidebar-icon'/>Overview</NavLink>
                  </li>
                  <li className='sidebar-list-item'> <NavLink to='user' className='link'>
                      <PeopleAltIcon className='sidebar-icon'/> Users</NavLink>
                  </li>
                  <li className='sidebar-list-item'> <NavLink to='books' className='link'>
                      <LibraryBooksIcon className='sidebar-icon'/>Books</NavLink>
                  </li>
                  <li className='sidebar-list-item'> <NavLink to='writers' className='link'>
                      <HistoryEduIcon className='sidebar-icon'/>Writers</NavLink>
                  </li>
                  <li className='sidebar-list-item'> <NavLink to='readers' className='link'>
                      <LocalLibraryIcon className='sidebar-icon'/>Readers</NavLink>
                  </li>
              </ul>

                <h3 className='sidebar-title'>Other Categories</h3>
      

              <ul className='sidebar-list'>
                    <li className='sidebar-list-item'> <NavLink to='earnings' className='link'>
                        <LocalAtmIcon className='sidebar-icon'/>Earnings</NavLink>
                    </li>
                    <li className='sidebar-list-item'> <NavLink to='automation' className='link'>
                        <NewspaperIcon className='sidebar-icon'/>Automation</NavLink>
                    </li>
                            
              </ul>
            </div>
        </div>

        {/* Topbar */}
        <div className='topbar'>
          <Topbar />
        </div>

        {/* Main Board */}
        <div className='main'>
          <Outlet />
        </div>
         
    </div>
  );
}

export default Dashboard;