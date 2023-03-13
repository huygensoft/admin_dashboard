import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
// Sign-Ups
import SignUp from './components/login/SignUp'
import Forgot from './components/login/Forgot'
import SignReset from './components/login/SignReset'

// Dashboard
import Dashboard from './components/dashboard/Dashboard';
import Overview from './pages/overview/Overview'
import User from './pages/users/User'
import Profile from './pages/users/Profile';
import Books from './pages/books/Books'
import Writers from './pages/writers/Writers'
import Readers from './pages/readers/Readers'
import Earnings from './pages/earnings/Earnings'
import Automation from './pages/automation/Automation'

// Books Inner Sections
import Published from './pages/books/Published';
import DraftBook from './pages/books/DraftBook';
import ReadBook from './pages/books/ReadBook';
import NewlyBook from './pages/books/NewlyBook';
import BookDetail from './pages/books/BookDetail';
import BookOverview from './pages/books/BookOverview'
import DraftBookDetail from './pages/books/DraftBookDetail';

// Writer Profile pages
import WriterProfile from './pages/writers/WriterProfile';
import WriterBasic from './pages/writers/WriterBasic';
import WriterJob from './pages/writers/WriterJob';
import WriterBook from './pages/writers/WriterBook';
// import WriterFinancial from './pages/writers/WriterFinancial';
// import WriterInvoice from './pages/writers/WriterInvoice';

// Reader Profile
import ReaderTableAll from './pages/readers/ReaderTableAll';
import ReaderProfile from './pages/readers/ReaderProfile';
import ReaderBasic from './pages/readers/ReaderBasic';


// Users profile
import Basic from './pages/users/Basic'
import Resident from './pages/users/Resident'
import Job from './pages/users/Job'
import Financial from './pages/users/Financial'
import Invoice from './pages/users/Invoice';

import ProtectedRoute from './components/ProtectedRoute'
import './App.css';

function App() {

  let [user, setUser] = useState();

  return (
        <div className="App">
            
            <Routes>
                <Route path='/' element={<SignUp setUser={setUser}/>} />
                <Route path='/forgot' element={<Forgot />} />
                <Route path='/signreset' element={<SignReset />} />
                
                {/* Dashboard */}
                <Route path='/dashboard' element={<ProtectedRoute user={user}><Dashboard /> </ProtectedRoute>} >
                    <Route path='overview' element={<Overview />} />

                    {/* Users */}
                    <Route path='user' element={<User />} />
                    <Route path='user/profile' element={<Profile />} >
                        <Route path='basic' element={<Basic />} />
                        <Route path='resident' element={<Resident />} />
                        <Route path='job' element={<Job />} />
                        <Route path='financial' element={<Financial />} />
                        <Route path='invoice' element={<Invoice />} />
                    </Route>  

                    {/* Books */}
                  <Route path='books' element={<Books />} />
                  <Route path='books/bookoverview' element={<BookOverview />} />
                  <Route path='books/published' element={<Published />} />
                  <Route path='books/published/bookdetail' element={<BookDetail />} />
                  <Route path='books/published/bookdetail/bookoverview' element={<BookOverview />} />
                  <Route path='books/draftbook' element={<DraftBook />} />
                  <Route path='books/draftbook/draftbookdetail' element={<DraftBookDetail />} />
                  <Route path='books/readbook' element={<ReadBook />} />
                  <Route path='books/readbook/bookdetail' element={<BookDetail />} />
                  <Route path='books/readbook/bookdetail/bookoverview' element={<BookOverview />} />
                  <Route path='books/newlybook' element={<NewlyBook />} />
                  <Route path='books/newlybook/bookdetail' element={<BookDetail />} />
                  <Route path='books/newlybook/bookdetail/bookoverview' element={<BookOverview />} />

                    {/* Writers */}
                  <Route path='writers' element={<Writers />} />
                  <Route path='writers/writerprofile' element={<WriterProfile />} >
                      <Route path='writerbasic' element={<WriterBasic />} />
                      <Route path='writerjob' element={<WriterJob />} />
                      <Route path='writerbook' element={<WriterBook />} />
                      <Route path='financial' element={<Financial />} />
                      <Route path='invoice' element={<Invoice />} />
                  </Route>  

                      {/* Readers */}
                  <Route path='readers' element={<Readers />} />
                  <Route path='readers/readertableall' element={<ReaderTableAll />} />
                  <Route path='readers/readertableall/readerprofile' element={<ReaderProfile />} >
                      <Route path='readerbasic' element={<ReaderBasic />} />
                      <Route path='financial' element={<Financial />} />
                      <Route path='invoice' element={<Invoice />} />
                  </Route>
                  <Route path='readers/readerprofile' element={<ReaderProfile />} >
                      <Route path='readerbasic' element={<ReaderBasic />} />
                      <Route path='financial' element={<Financial />} />
                      <Route path='invoice' element={<Invoice />} />
                  </Route>  


                  {/* Earnings */}
                  <Route path='earnings' element={<Earnings />} />
                  <Route path='automation' element={<Automation />} />
                
        
                
                
                </Route>
            </Routes>

          {/* <Dashboard /> */}
        </div>
  );
}

export default App;
