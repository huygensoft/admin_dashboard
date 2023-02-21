import React from 'react'

export default function WriterBasic() {
  return (
    <div className='basic'>
        <div className='first'>
            <h5>Firstname</h5>
            <div>Adebayo</div>
        </div>
        <div className='last'>
            <h5>Lastname</h5>
            <div>Oluwafemi</div>
        </div>
        <div className='phone-no'>
            <h5>Phone Number</h5>
            <div>+234 812 345 6789</div>
        </div>
        <div className='gender'>
            <h5>Gender</h5>
            <div>Male</div>
        </div>
        <div className='status'>
            <h5>Status</h5>
            <div>Active</div>
        </div>
        <div className='reg'>
            <h5>Date of Registration</h5>
            <div> 4th, October 2020</div>
        </div>
        <div className='birth'>
            <h5>Date of Birth</h5>
            <div>28th of November 2001</div>
        </div>
        <div className='nin'>
            <h5>NIN</h5>
            <div>1234567890</div>
        </div>
        
        <div className='space'></div>

        {/* 2nd Grid */}
        <div className='second-grid'>
            <div className='country'>
                <h5>Country of Residence</h5>
                <div>Nigeria</div>
            </div>
            <div className='state'>
                <h5>State of Residence</h5>
                <div>Lagos State</div>
            </div>
            <div className='address'>
                <h5>Address of Residence</h5>
                <div>Block 6, Flat 2, Johnson Crescent, Bode Thomas, Surulere Lagos State.</div>
            </div>
            
            <div className='e-space'></div>
        </div>
    </div>
  )
}
