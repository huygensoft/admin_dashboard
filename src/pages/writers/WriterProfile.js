import React from 'react'
import './writerprofile.scss'
import { Link, NavLink, Outlet } from 'react-router-dom'
import ArrowLeft from '../../images/ArrowLeft.svg'
import User from '../../components/dashboard/User.svg'
import Footer from '../overview/Footer'

export default  function WriterProfile() {
  return (
    <div className='writerprofile container'>
        <span className='arrow'><Link to='/writers'><img src={ArrowLeft} alt='icon'/></Link></span>
    
        <div className='writer-detail-container'>
            <img src={User} alt='user' className='writer-detail-img'/>
            
            <div className='writer-name-container'>
                <div className='user-name'>Adebayo Oluwafemi</div>
                <div className='user-email'>adebayo@mail.com</div>
            </div>

            <nav>
                <NavLink to='writerbasic'>Basic Profile</NavLink>
                <NavLink to='writerjob'>Job Profile</NavLink>
                <NavLink to='writerbook'>Book Profile</NavLink>
                <NavLink to='financial'>Financial Profile</NavLink>
                <NavLink to='invoice'>Invoices</NavLink>
            </nav>
            <Outlet className='outlet'/>
        </div>
    
        <Footer />
    
    </div>
  );
}
