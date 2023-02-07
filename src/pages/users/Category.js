import React from 'react'
import './category.scss'

export default function Category() {
  return (
    <div className='category'>
          <h3 className='category-title'>Categories of Users</h3>

          <div className='category-list'>

                {/* no 1 */}
              <div className='item'>
                  <span className='info-item-number'>20,000</span>
                  <span className='item-word'>Writers</span>  
              </div>
                {/* no 2 */}
              <div className='item'>
                  <span className='info-item-number'>20,000</span>
                  <span className='item-word'>Writers</span>  
              </div>
                {/* no 3 */}
              <div className='item'>
                  <span className='info-item-number'>20,000</span>
                  <span className='item-word'>Writers</span>  
              </div>
                {/* no 4 */}
              <div className='item'>
                  <span className='info-item-number'>20,000</span>
                  <span className='item-word'>Writers</span>  
              </div>
                {/* no 5 */}
              <div className='item'>
                  <span className='info-item-number'>20,000</span>
                  <span className='item-word'>Writers</span>  
              </div>
                {/* no 6 */}
              <div className='item'>
                  <span className='info-item-number'>20,000</span>
                  <span className='item-word'>Writers</span>  
              </div>

          </div>
    
    </div>
  )
}
