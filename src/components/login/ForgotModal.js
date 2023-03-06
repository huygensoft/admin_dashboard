import React from 'react'
import { Link } from 'react-router-dom'
import '../../sass/sign_board/check_mail.scss'
import checkMail from '../../images/checkMail.svg'

export default function ForgotModal(props) {

  if (!props.show) {
    return null
  }

  return (
    <div className='forgot-modal'>
        <div className='forgot-modal-content'>
            <img src={checkMail} alt="icon" />
            <div>
                We have sent a recovery link to the email address <br />
                provided. Please check your mail to proceed.
            </div>
            <button><Link to='/signreset'>Check Email Address</Link></button>
        </div>
    
    </div>
  );
}
