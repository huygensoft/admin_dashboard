import React from 'react'
import './gender.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const green = 75;
const blue = 64;
const yellow = 34;

export default function Gender() {
  return (
    <div className='gender'>
        <div className='gender-left' >
           <h3> Gender Distribution</h3>
           
           <div className='left'>
                <div className='text-position path-green'>
                    <CircularProgressbar
                        value={green}
                        strokeWidth={5}
                        percentage={green}
                        text={`${green}%`}
                        style={ buildStyles({
                            pathColor: `rgba(14, 98, 95, ${blue / 100})`,
                            strokeLinecap: 'butt',
                            textColor: 'red',
                            trailColor: 'red',
                            backgroundColor: 'red'
                        })}
                        className='circ' />
                    <div className='inner-text'>Male</div>
                </div>
                    
                <div className='text-position'>
                    <CircularProgressbar
                    className='circ'
                    value={blue} 
                    strokeWidth={5}
                    text={`${blue}%`}
                    style={ buildStyles({
                        
                        pathColor: `rgba(62, 152, 199, ${blue / 100})`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7'
                    })} />
                    <div className='inner-text'>Female</div>
                </div>
           </div>
             
        </div>

        {/* Right */}
        <div className='gender-right' >
            <h3>Corporate Distribution</h3>

            <div className='right'>

                 <div className='text-position path-green'>
                    <CircularProgressbar
                    className='circ'
                    value={green} 
                    strokeWidth={5}
                    text={`${green}%`}
                    style={ buildStyles({
                        stroke: 'blue',
                        pathColor: `red`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7'
                    })} 
                    />
                    <div className='inner-text'>Readers</div>
                </div>
            
                <div className='text-position'>
                    <CircularProgressbar
                    className='circ'
                    value={blue} 
                    strokeWidth={5}
                    text={`${blue}%`}
                    style={ buildStyles({
                        
                        pathColor: `rgba(62, 152, 199, ${blue / 100})`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7'
                    })} />
                    <div className='inner-text'>Writers</div>
                </div>
        
                <div className='text-position'>
                    <CircularProgressbar
                        className='circ'
                        value={yellow} 
                        strokeWidth={5}
                        text={`${yellow}%`}
                        style={ buildStyles({
                            
                            pathColor: `rgba(62, 152, 111, ${yellow / 100})`,
                            textColor: '#f88',
                            trailColor: '#d6d6d6',
                            backgroundColor: '#3e98c7'
                        })} />
                        <div className='inner-text'>Invalid</div>
                </div>
        
            </div>
        </div>
    </div>
  )
}
