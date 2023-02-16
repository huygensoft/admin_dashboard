import React from 'react'

export default function Resident() {
  return (
    <div className='resident'>
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
            <div>No 1, Providence House,
              Admiralty Way, Lekki Phase 1,<br />
              Lagos State
              </div>
        </div>
        <div className='space'> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5778439352584!2d3.4665345226072555!3d6.448208380413678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf44febeed03f%3A0xadce619e2dbfa36c!2sProvidence%20House%2C%20Admiralty%20Way%2C%20Lekki%20Phase%20I%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1676521840178!5m2!1sen!2sng" 
        style={{border:0, width: 560, height: 352 }} 
        title='place'
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}
