import { NavLink, Link, useParams, Outlet } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import profiles from '../../components/profile'
import './profile.scss';
import User from '../../components/dashboard/User.svg'


export default function Profile() {
    const { profileId } = useParams();
    const profile = profiles.find((profile) => profile.id === profileId);
    const { email, name } = profile;
    
    return (
    <div className='profile'>
        <span className='arrow'><Link to='/user'><ArrowBackIcon /></Link></span>

        <div className='detail-container'>
            <img src={User} alt='user'/>
            
            <div className='detail-name-container'>
                <div className='user-name'>{name}</div>
                <div className='user-email'>{email}</div>
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
    
        {/* <Link to='/user'>Back to Users</Link> */}
    </div>
  )
}
