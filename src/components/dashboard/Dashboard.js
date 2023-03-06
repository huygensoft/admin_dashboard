import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom'
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




// Pages
import Overview from '../../pages/overview/Overview'
import User from '../../pages/users/User'
import Profile from '../../pages/users/Profile';
import Books from '../../pages/books/Books'
import Writers from '../../pages/writers/Writers'
import Readers from '../../pages/readers/Readers'
import Earnings from '../../pages/earnings/Earnings'
import Forum from '../../pages/forum/Forum'
import Automation from '../../pages/automation/Automation'
import Basic from '../../pages/users/Basic'
import Resident from '../../pages/users/Resident'
import Job from '../../pages/users/Job'
import Financial from '../../pages/users/Financial'
import Invoice from '../../pages/users/Invoice';

// Books Inner Sections
import Published from '../../pages/books/Published';
import DraftBook from '../../pages/books/DraftBook';
import ReadBook from '../../pages/books/ReadBook';
import NewlyBook from '../../pages/books/NewlyBook';
import BookDetail from '../../pages/books/BookDetail';
import BookOverview from '../../pages/books/BookOverview'
import DraftBookDetail from '../../pages/books/DraftBookDetail';

// Writer Profile pages
import WriterProfile from '../../pages/writers/WriterProfile';
import WriterBasic from '../../pages/writers/WriterBasic';
import WriterJob from '../../pages/writers/WriterJob';
import WriterBook from '../../pages/writers/WriterBook';
// import WriterFinancial from '../../pages/writers/WriterFinancial';
// import WriterInvoice from '../../pages/writers/WriterInvoice';

// Reader Profile
import ReaderTableAll from '../../pages/readers/ReaderTableAll';
import ReaderProfile from '../../pages/readers/ReaderProfile';
import ReaderBasic from '../../pages/readers/ReaderBasic';






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
                  <li className='sidebar-list-item'> <NavLink to='/' className='link'>
                      <GridViewIcon className='sidebar-icon'/>Overview</NavLink>
                  </li>
                  <li className='sidebar-list-item'> <NavLink to='/user' className='link'>
                      <PeopleAltIcon className='sidebar-icon'/> Users</NavLink>
                  </li>
                  <li className='sidebar-list-item'> <NavLink to='/books' className='link'>
                      <LibraryBooksIcon className='sidebar-icon'/>Books</NavLink>
                  </li>
                  <li className='sidebar-list-item'> <NavLink to='/writers' className='link'>
                      <HistoryEduIcon className='sidebar-icon'/>Writers</NavLink>
                  </li>
                  <li className='sidebar-list-item'> <NavLink to='/readers' className='link'>
                      <LocalLibraryIcon className='sidebar-icon'/>Readers</NavLink>
                  </li>
              </ul>

                <h3 className='sidebar-title'>Other Categories</h3>
      

              <ul className='sidebar-list'>
                    <li className='sidebar-list-item'> <NavLink to='/earnings' className='link'>
                        <LocalAtmIcon className='sidebar-icon'/>Earnings</NavLink>
                    </li>
                    <li className='sidebar-list-item'> <NavLink to='/automation' className='link'>
                        <NewspaperIcon className='sidebar-icon'/>Automation</NavLink>
                    </li>
                    <li className='sidebar-list-item'> <NavLink to='/forum' className='link'>
                        <ForumIcon className='sidebar-icon'/>Community Forum</NavLink>
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
            
            {/* Overview */}
            <Route path='/' element={<Overview />} />

              {/* Users */}
            <Route path='/user' element={<User />} />
            <Route path='/profile' element={<Profile />} >
                <Route path='basic' element={<Basic />} />
                <Route path='resident' element={<Resident />} />
                <Route path='job' element={<Job />} />
                <Route path='financial' element={<Financial />} />
                <Route path='invoice' element={<Invoice />} />
            </Route>  

              {/* Books */}
            <Route path='/books' element={<Books />} />
            <Route path='published' element={<Published />} />
            <Route path='/bookdetail' element={<BookDetail />} />
            <Route path='bookoverview' element={<BookOverview />} />
            <Route path='draftbook' element={<DraftBook />} />
            <Route path='draftbookdetail' element={<DraftBookDetail />} />
            <Route path='readbook' element={<ReadBook />} />
            <Route path='newlybook' element={<NewlyBook />} />

              {/* Writers */}
            <Route path='/writers' element={<Writers />} />
            <Route path='/writerprofile' element={<WriterProfile />} >
                <Route path='writerbasic' element={<WriterBasic />} />
                <Route path='writerjob' element={<WriterJob />} />
                <Route path='writerbook' element={<WriterBook />} />
                <Route path='financial' element={<Financial />} />
                <Route path='invoice' element={<Invoice />} />
            </Route>  



            {/* Readers */}
            <Route path='/readers' element={<Readers />} />
            <Route path='/readertableall' element={<ReaderTableAll />} />
            <Route path='/readerprofile' element={<ReaderProfile />} >
                <Route path='readerbasic' element={<ReaderBasic />} />
                {/* <Route path='writerjob' element={<WriterJob />} />
                <Route path='writerbook' element={<WriterBook />} /> */}
                <Route path='financial' element={<Financial />} />
                <Route path='invoice' element={<Invoice />} />
            </Route>  


            {/* Earnings */}
            <Route path='/earnings' element={<Earnings />} />
            <Route path='/forum' element={<Forum />} />
            <Route path='/automation' element={<Automation />} />
          </Routes>
        </div>
        {/* <div className='footer'>
          <Footer />
        </div> */}
         
         
    </div>
  );
}

export default Dashboard;