import React from 'react'
import { useParams } from 'react-router-dom';
import profiles from '../../components/profile'

export default function Basic() {
    const { profileId } = useParams();
    const profile = profiles.find((profile) => profile.id === profileId);
    const { name } = profile;

  return (
    <div className='basic'>
        <div className='first'>
            <h5>Firstname</h5>
            <div>{name}</div>
        </div>
        <div className='last'>
            <h5>Lastname</h5>
        </div>
        <div className='status'>
            <h5>Status</h5>
        </div>
        <div className='gender'>
            <h5>Gender</h5>
        </div>
        <div className='birth'>
            <h5>Date of Birth</h5>
            <div>28th of November 2001</div>
        </div>
        <div className='nin'>
            <h5>NIN</h5>
            <div>1234567890</div>
        </div>
        <div className='reg'>
            <h5>Date of Registration</h5>
        </div>
        <div className='space'></div>
    </div>
  )
}
