import React from 'react'
import './automation.scss'
import CloseIcon from '../../images/CloseIcon.svg'

export default function Modal(props) {
  
  if (!props.show) {
    return null
  }

  // function handleSubmit(event) {
  //   event.preventDefault();
    
    
  // }

  function showOptions(event) {
    event.preventDefault()

    return (
      <div className='modal-submit-container'>
          Welcome
      </div>
    )

  }


  return (
    <div className='modal' onclick={props.onClose}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
          
          {/* the tag */}
          <div className='modal-tag-container'>
              <div className='modal-tag'>New Message </div>
              <img src={CloseIcon} alt='icon' className='modal-icon' onClick={props.onClose}/>
          </div>

        {/* the Form */}
         <form className='modal-form'>
         <input type="email" placeholder="From" autoFocus 
        //  required
              className='modal-input'
              // value={state.mail}
              // onChange={(e) =>
              //   dispatch({
              //     type: "setMail",
              //     payload: { setMail: e.target.value },
              //   })
              // }
            />

          <input type="email" placeholder="To" autoFocus 
          // required
              className='modal-input'
              // value={state.mail}
              // onChange={(e) =>
              //   dispatch({
              //     type: "setMail",
              //     payload: { setMail: e.target.value },
              //   })
              // }
            />

            <input type="text" placeholder="Subject" 
            // required
              className='modal-input'
              // value={state.subject}
              // onChange={(e) =>
              //   dispatch({
              //     type: "setSubject",
              //     payload: { setSubject: e.target.value },
              //   })
              // }
            />

            <div className="message-body" contentEditable="true" role="textbox" >
              Compose message...
            </div>

            <div className='message-btn-container'>
                <button onClick={showOptions} className='message-btn'>Send</button>
            </div>
         </form>
          
          
        </div>
    </div>
  )
}
