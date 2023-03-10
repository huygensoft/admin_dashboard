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
// import Writers from '../../pages/writers/Writers'
// import Readers from '../../pages/readers/Readers'
// import Earnings from '../../pages/earnings/Earnings'
// import Forum from '../../pages/forum/Forum'
// import Automation from '../../pages/automation/Automation'

// Books Inner Sections
import Published from './pages/books/Published';
import DraftBook from './pages/books/DraftBook';
import ReadBook from './pages/books/ReadBook';
import NewlyBook from './pages/books/NewlyBook';
import BookDetail from './pages/books/BookDetail';
import BookOverview from './pages/books/BookOverview'
import DraftBookDetail from './pages/books/DraftBookDetail';

// 
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
                    <Route index path='overview' element={<Overview />} />
                    {/* Users */}
                    <Route path='user' element={<User />} />
                    <Route path='profile' element={<Profile />} >
                        <Route path='basic' element={<Basic />} />
                        <Route path='resident' element={<Resident />} />
                        <Route path='job' element={<Job />} />
                        <Route path='financial' element={<Financial />} />
                        <Route path='invoice' element={<Invoice />} />
                    </Route>  

                    {/* Books */}
                  <Route path='books' element={<Books />} />
                  <Route path='published' element={<Published />} />
                  <Route path='bookdetail' element={<BookDetail />} />
                  <Route path='bookoverview' element={<BookOverview />} />
                  <Route path='draftbook' element={<DraftBook />} />
                  <Route path='draftbookdetail' element={<DraftBookDetail />} />
                  <Route path='readbook' element={<ReadBook />} />
                  <Route path='newlybook' element={<NewlyBook />} />
                
                
                </Route>
            </Routes>

          {/* <Dashboard /> */}
        </div>
  );
}

export default App;
