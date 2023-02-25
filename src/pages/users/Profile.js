import { NavLink, Link, Outlet } from 'react-router-dom'
import ArrowLeft from '../../images/ArrowLeft.svg' 
// import profiles from '../../dummyData/profile'
import './profile.scss';
import User from '../../components/dashboard/User.svg'
import Footer from '../overview/Footer'


export default function Profile() {
    // const { profileId } = useParams();
    // const profile = profiles.find((profile) => profile.id === profileId);
    // const { email, name } = profile;
    
    return (
    <div className='profile'>
        <span className='arrow'><Link to='/user'>
            <img src={ArrowLeft} alt='arrow'/></Link>
        </span>

        <div className='detail-container'>
            <img src={User} alt='user' className='detail-img'/>
            
            <div className='detail-name-container'>
                <div className='user-name'></div>
                <div className='user-email'></div>
            </div>

            <nav>
                <NavLink to='basic'>Basic Profile</NavLink>
                <NavLink to='resident'>Residential Profile</NavLink>
                <NavLink to='job'>Job Profile</NavLink>
                <NavLink to='financial'>Financial Profile</NavLink>
                <NavLink to='invoice'>Invoices</NavLink>
            </nav>
            <Outlet className='outlet'/>
        </div>
    
        <Footer />
    </div>
  )
}
