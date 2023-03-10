import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../sass/sign_board/sign.scss'
import booksriteWhite from '../../images/booksriteWhite.svg'

export default function SignUp({setUser}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) return;
        setUser({ email: email, password: password });
        navigate('/dashboard');
    }


  return (
    <div className="sign-up">
        {/* <NavBar /> */}

        <div className="grid-container">
            <div className="grid-left-container">
                <div className="grid-left">
                    <div className="grid-image-container">
                        <img src={booksriteWhite} alt="Booksrite logo" className="grid-image"/>
                        <div className="grid-image-tag">BOOKSRITE</div>
                    </div>
                    <div className="grid-left-content">
                        View, Manage, Activities going on on the Reader App
                    </div>
                </div>
            </div>

            <div className="grid-right-container">
                <div className="grid-right">
                    <h2 className='grid-right-tag'>Sign In</h2>

                    {/* Form */}
                    <form action="" className='grid-right-form' onSubmit={handleSubmit}>
                        <div className="form-label">Email Address</div>
                        <input type="email" value={email} id="email" 
                        placeholder="Enter Email Address" 
                        className="input"
                        onChange={(e) => setEmail(e.target.value)}
                        />

                        <div className="form-label pass-label">Password</div>
                        <input type="password" value={password} id="password"
                         placeholder="Enter Password" 
                         className="input"
                         onChange={(e) => setPassword(e.target.value)}
                         />
                        
                        <div className="check-container">
                            <input type="checkbox" name="" id="" className="input-check"/>
                            <span>Keep Me Signed</span>
                        </div>

                        <div className="grid-right-forgot-password"><Link to='/forgot'>Forgot Password?</Link></div>
                        <input type="submit" value="Sign In" className="form-btn"/>
                    </form>
                </div>
            </div>
        </div>
    </div>

  );
}
