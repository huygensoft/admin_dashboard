import React from 'react'
import './automation.scss'

export default function Modal(props) {
  
  if (!props.show) {
    return null
  }


  return (
    <div className='modal' onclick={props.onClose}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
          <h2>the contents</h2>
          <button onClick={props.onClose}>close</button>
        </div>
    </div>
  )
}
