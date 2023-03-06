import React, { useState } from 'react'
import '../../sass/sign_board/forgot.scss'
import booksriteWhite from '../../images/booksriteWhite.svg'
import ForgotModal from './ForgotModal'

export default function Forgot() {
    const [show, setShow] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setShow(true);
    }

  return (
    <div className='forgot'>

        <div className="grid-container-forgot">

            <div className="grid-left-container-forgot">
                <div className="grid-left-forgot">
                    <h2 className='grid-left-tag-forgot'>Forgot Password?</h2>
                    <p className='grid-left-forgot-paragraph'>Enter Email Address used in registering the account</p>
                    <form onSubmit={handleSubmit} className='grid-left-form-forgot'>
                    <ForgotModal show={show} onClose={() => setShow(false)}/>
                        <div className="form-label">Email Address</div>
                        <input type="email" name="" id="" placeholder="Enter Email Address" className="input" />
                        <input type="submit" value="Continue" className="form-btn" />
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
