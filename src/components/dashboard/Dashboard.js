import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './Dashboard.scss';
import Topbar from './Topbar';
import logo from './logo.svg';
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import ForumIcon from '@mui/icons-material/Forum';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

// Pages
import Home from '../../pages/home/Home'
import User from '../../pages/users/User'
import Books from '../../pages/books/Books'
import Writers from '../../pages/writers/Writers'
import Readers from '../../pages/readers/Readers'
import Earnings from '../../pages/earnings/Earnings'
import Forum from '../../pages/forum/Forum'
import Blog from '../../pages/blog/Blog'
import Reports from '../../pages/reports/Reports'

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
              <li className='sidebar-list-item'> <Link to='/' className='link'>
                  <GridViewIcon className='sidebar-icon'/>Overview</Link>
              </li>
              <li className='sidebar-list-item'> <Link to='/user' className='link'>
                  <PeopleAltIcon className='sidebar-icon'/> Users</Link>
              </li>
              <li className='sidebar-list-item'> <Link to='/books' className='link'>
                  <LibraryBooksIcon className='sidebar-icon'/>Books</Link>
              </li>
              <li className='sidebar-list-item'> <Link to='/writers' className='link'>
                  <HistoryEduIcon className='sidebar-icon'/>Writers</Link>
              </li>
              <li className='sidebar-list-item'> <Link to='/readers' className='link'>
                  <LocalLibraryIcon className='sidebar-icon'/>Readers</Link>
              </li>
          </ul>

            <h3 className='sidebar-title'>Other Categories</h3>
  

           <ul className='sidebar-list'>
                <li className='sidebar-list-item'> <Link to='/earnings' className='link'>
                    <LocalAtmIcon className='sidebar-icon'/>Earnings</Link>
                </li>
                <li className='sidebar-list-item'> <Link to='/forum' className='link'>
                    <ForumIcon className='sidebar-icon'/>Community Forum</Link>
                </li>
                <li className='sidebar-list-item'> <Link to='/blog' className='link'>
                    <NewspaperIcon className='sidebar-icon'/>Blog</Link>
                </li>
                <li className='sidebar-list-item'> <Link to='/reports' className='link'>
                    <ReportGmailerrorredIcon className='sidebar-icon'/>Reports</Link>
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
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user' element={<User />} />
            <Route path='/books' element={<Books />} />
            <Route path='/writers' element={<Writers />} />
            <Route path='/readers' element={<Readers />} />
            <Route path='/earnings' element={<Earnings />} />
            <Route path='/forum' element={<Forum />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/reports' element={<Reports />} />
          </Routes>
        </div>
        {/* <div className='footer'>
          <Footer />
        </div> */}
         
         
    </div>
  );
}

export default Dashboard;