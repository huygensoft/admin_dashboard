import React from 'react'
// import { Link } from 'react-router-dom'
import '../../sass/sign_board/check_mail.scss'
import checkMail from '../../images/checkMail.svg'

export default function ResetModal(props) {

  if (!props.show) {
    return null
  }

  return (
    <div className='forgot-modal'>
        <div className='forgot-modal-content'>
            <img src={checkMail} alt="icon" />
            <div>
                Your administrator&#39;s account has been recovered <br />
                successfully. Login with the button below.
            </div>
            <button>Login Here</button>
        </div>
    </div>
  );
}
