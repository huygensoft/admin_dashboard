import React from 'react'
import './writerprofile.scss'
import { Link, NavLink, Outlet } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import User from '../../components/dashboard/User.svg'
import Footer from '../home/Footer'

export default  function WriterProfile() {
  return (
    <div className='writerprofile container'>
        <span className='arrow'><Link to='/writers'><ArrowBackIcon /></Link></span>
    
        <div className='writer-detail-container'>
            <img src={User} alt='user'/>
            
            <div className='writer-name-container'>
                <div className='user-name'>Adebayo Oluwafemi</div>
                <div className='user-email'>adebayo@mail.com</div>
            </div>

            <nav>
                <NavLink to='writerbasic'>Basic Profile</NavLink>
                <NavLink to='writerjob'>Job Profile</NavLink>
                <NavLink to='writerbook'>Book Profile</NavLink>
                <NavLink to='writerfinancial'>Financial Profile</NavLink>
                <NavLink to='writerinvoice'>Invoices</NavLink>
            </nav>
            <Outlet className='outlet'/>
        </div>
    
        <Footer />
    
    </div>
  );
}
