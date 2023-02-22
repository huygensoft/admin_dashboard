import React from 'react'

export default function WriterBook() {
  return (
    <div className='book'>
        <div className='book-profile-flex-container'>
            <div className='book-flex-1'>
                <div className='top-book'>
                  <h5>Top Books Written</h5>
                  <div className='top-flex'>
                      <div className='top-box'>Half of a yellow sun</div>
                      <div className='top-box'>Things Fall Apart</div>
                      <div className='top-box'>Purple Hibiscus</div>
                  </div>
                </div>

                <div className='top-book'>
                  <h5>Recently Added Books</h5>
                  <div className='top-flex'>
                      <div className='top-box'>Half of a yellow sun</div>
                      <div className='top-box'>Things Fall Apart</div>
                      <div className='top-box'>Purple Hibiscus</div>
                  </div>
                </div>

                <div className='top-book'>
                  <h5>Awards Won</h5>
                  <div className='top-flex'>
                      <div className='top-box'>Best Selling Author</div>
                  </div>
                </div>

            </div>

            {/* Empty boxes */}
            <div className='book-flex-2'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        

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
