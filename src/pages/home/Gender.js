import React from 'react'
import './gender.scss'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
// import 'react-circular-progressbar/dist/styles.css';

const percent = 60;

export default function Gender() {
  return (
    <div className='gender'>
        <div className='gender-left' >
           <h3> Gender Distribution</h3>
           
           <div className='left'>
                <CircularProgressbarWithChildren
                    value={percent} 
                    strokeWidth={5}
                    text={`${percent}%`}
                    style={ buildStyles({
                        stroke: `red`,
                        strokeLinecap: 'butt',
                        pathColor: `red`,
                        textColor: 'red',
                        trailColor: 'red',
                        backgroundColor: 'red'
                    })}
                    className='circ'>
                        <div className='inner-text'> mate</div>
                    </CircularProgressbarWithChildren>

                    <CircularProgressbarWithChildren
                    className='circ'
                    value={percent} 
                    strokeWidth={5}
                    text={`${percent}%`}
                    style={ buildStyles({
                        
                        pathColor: `rgba(62, 152, 199, ${percent / 100})`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7'
                    })}>
                        <div className='inner-text'> mate</div>
                    </CircularProgressbarWithChildren>
           </div>
             
        </div>

        {/* Right */}
        <div className='gender-right' >
            <h3>Corporate Distribution</h3>

            <div className='right'>
                <CircularProgressbarWithChildren
                className='circ'
                value={percent} 
                strokeWidth={5}
                text={`${percent}%`}
                style={ buildStyles({
                    
                    pathColor: `rgba(62, 152, 199, ${percent / 100})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7'
                })}>
                <div className='inner-text'>mate</div>
            </CircularProgressbarWithChildren>
            
            <CircularProgressbarWithChildren
            className='circ'
            value={percent} 
            strokeWidth={5}
            text={`${percent}%`}
            style={ buildStyles({
                
                pathColor: `rgba(62, 152, 199, ${percent / 100})`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7'
            })}>
                <div className='inner-text'>mate</div>
            </CircularProgressbarWithChildren>
            
            <CircularProgressbarWithChildren 
                className='circ'
                value={percent} 
                strokeWidth={5}
                text={`${percent}%`}
                style={ buildStyles({
                    
                    pathColor: `rgba(62, 152, 199, ${percent / 100})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7'
                })}>
                 <div className='inner-text'>mate</div>
            </CircularProgressbarWithChildren>
            </div>
        </div>
    </div>
  )
}
