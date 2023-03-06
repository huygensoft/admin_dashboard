import React, { useState } from 'react'
import '../../sass/sign_board/forgot.scss'
import booksriteWhite from '../../images/booksriteWhite.svg'
import ResetModal from './ResetModal'

export default function SignReset() {

    const [show, setShow] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setShow(true);
    }

  return (
    <div className='sign-reset forgot'>
        <div className="grid-container-forgot">

            <div className="grid-left-container-forgot">
                <div className="grid-left-forgot">
                    <h2 className='grid-left-tag-forgot'>Reset your Password</h2>
                    <p className='grid-left-forgot-paragraph'>Enter a New Password to fully Recover your account</p>
                    <form onSubmit={handleSubmit} className='grid-left-form-forgot'>
                    <ResetModal show={show} onClose={() => setShow(false)}/>
                        <div className="form-label">Password</div>
                        <input type="password" name="" placeholder="Enter New Password" className="input" id="input-password-1" />
                        <i class="fa-solid fa-eye eye-icon" id="show-password-1" onclick="toggle()"> </i>
 
                        <br /><br />
                        <div className="form-label">Confirm Password</div>
                        <input type="password" name="" id="input-password-2" placeholder="Confirm New Password" className="input" />
                        <i className="fa-solid fa-eye eye-icon" id="show-password-2" onclick="toggle_2()"> </i>

                        
                        <input type="submit" value="Recover  Account" className="form-btn" />
                    </form>
                </div>
            </div>

            <div className="grid-right-container-forgot">
                <div className="grid-right-forgot">
                    <div className="grid-image-container-forgot">
                        <img src={booksriteWhite} alt="Booksrite logo" className="grid-image-forgot" />
                        <div className="grid-image-tag-forgot">BOOKSRITE</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
