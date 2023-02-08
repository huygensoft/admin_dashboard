import React from 'react'
import './progressbar.scss'



export default function Progressbar() {
  return (
    <div className='progress'>

        {/* Left */}
        <div className='progress-left' >
           <h3> Gender Distribution</h3>
           <div className='inner-flex'>
                <div className='text-position'>
                    <svg className='svg-container'>
                        <circle className='svg-track'/>
                        <circle className='svg-indicator'/>
                    </svg>
                    <div className='inner-content'>
                        <div className='percent'>25%</div>
                        <div className='text'>Male</div>
                    </div>
                </div>
                    
                <div className='text-position'>
                    <svg className='svg-container'>
                        <circle className='svg-track'/>
                        <circle className='svg-indicator'/>
                    </svg>
                    <div className='inner-content'>
                        <div className='percent'>25%</div>
                        <div className='text'>Female</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right */}
        <div className='progress-right' >
            <h3>Corporate Distribution</h3>

            <div className='inner-flex'>

                <div className='text-position'>
                    <svg className='svg-container'>
                        <circle className='svg-track'/>
                        <circle className='svg-indicator'/>
                    </svg>
                    <div className='inner-content'>
                        <div className='percent'>25%</div>
                        <div className='text'>Readers</div>
                    </div>
                </div>
            
                <div className='text-position'>
                    <svg className='svg-container'>
                        <circle className='svg-track'/>
                        <circle className='svg-indicator'/>
                    </svg>
                    <div className='inner-content'>
                        <div className='percent'>25%</div>
                        <div className='text'>Writers</div>
                    </div>
                </div>
        
                <div className='text-position'>
                    <svg className='svg-container'>
                        <circle className='svg-track'/>
                        <circle className='svg-indicator'/>
                    </svg>
                    <div className='inner-content'>
                        <div className='percent'>25%</div>
                        <div className='text'>Invalid</div>
                    </div>
                </div>
        
            </div>
        </div>
    </div>
  )
}
