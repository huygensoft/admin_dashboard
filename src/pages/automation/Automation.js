import React, { useState } from 'react'
import Info from '../overview/Info'
import './automation.scss'
import Progressbar from '../overview/Progressbar';
import Footer from '../overview/Footer';
import TransactionTable from '../earnings/TransactionTable';
import Modal from './Modal';

export default function Automation() {
  const [show, setShow] = useState(false);

  

  return (
    <div className='automation'> 
        <div className='title'>
            <h3 className='title-salute'>Good Evening Faith, </h3>
            {/* <span className='title-tag'> Welcome back to your Dashboard</span> */}
        </div>

        <Info/>

        {/* Automation details */}
        <div className='auto-detail-container'>
            <h3 className='auto-title'>Automations</h3>
            <div className='auto-grid'>

              {/* box 1 */}
                <div className='auto-box'>
                    <h3 className='auto-tag'>Auto Email Schedule</h3>
                    <p className='auto-paragraph'>Schedule a mail to send to all members of this  Subscription </p>
                    <div className='auto-duration'>Jan 25, 2023 . 12:00 AM</div>
                    <div className='auto-btn-container'>
                      <button className='auto-btn-1' onClick={() => setShow(true)}>Start</button>
                      <Modal show={show} onClose={() => setShow(false)}/>
                      <button className='auto-btn-2'>Add Subscribers</button>
                    </div>
                </div>

                {/* box 2 */}
                <div className='auto-box'>
                    <h3 className='auto-tag'>Auto Publish</h3>
                    <p className='auto-paragraph'>Schedule a publication to occur and send to all members of this  Subscription </p>
                    <div className='auto-duration'>Jan 25, 2023 . 12:00 AM</div>
                    <div className='auto-btn-container'>
                      <button className='auto-btn-1'onClick={() => setShow(true)}>Start</button>
                      <button className='auto-btn-2'>Add Subscribers</button>
                    </div>
                </div>

                {/* box 3 */}
                <div className='auto-box box-fade'>
                    <h3 className='auto-tag'>Auto Reward Writers</h3>
                    <p className='auto-paragraph'>Automatically Reward Writers for reaching a milestone and get them encouraged </p>
                    <div className='auto-duration'>Jan 25, 2023 . 12:00 AM</div>
                    <div className='auto-btn-container'>
                      <button className='auto-btn-1' >Start</button>
                      <button className='auto-btn-2'>Add Subscribers</button>
                    </div>
                </div>

                {/* box 4 */}
                <div className='auto-box box-fade'>
                    <h3 className='auto-tag'>Auto Reward Readers</h3>
                    <p className='auto-paragraph'>Automatically Reward Readers for reaching a milestone and get them encouraged. </p>
                    <div className='auto-duration'>Jan 25, 2023 . 12:00 AM</div>
                    <div className='auto-btn-container'>
                      <button className='auto-btn-1'>Start</button>
                      <button className='auto-btn-2'>Add Subscribers</button>
                    </div>
                </div>

                {/* box 5 */}
                <div className='auto-box'>
                    <h3 className='auto-tag'>Auto Bank settlement</h3>
                    <p className='auto-paragraph'>Send Bank settlement on request/demand by user who wants it </p>
                    <div className='auto-duration'>Jan 25, 2023 . 12:00 AM</div>
                    <div className='auto-btn-container'>
                      <button className='auto-btn-1' onClick={() => setShow(true)}>Start</button>
                      <button className='auto-btn-2'>Add Subscribers</button>
                    </div>
                </div>

                {/* box 6 */}
                <div className='auto-box'>
                    <h3 className='auto-tag'>Auto Report Generation</h3>
                    <p className='auto-paragraph'>Automatically generate report of any type when in need </p>
                    <div className='auto-duration'>Jan 25, 2023 . 12:00 AM</div>
                    <div className='auto-btn-container'>
                      <button className='auto-btn-1' onClick={() => setShow(true)}>Start</button>
                      <button className='auto-btn-2'>Add Subscribers</button>
                    </div>
                </div>
            </div>
        </div>

        
        <Progressbar />
        <TransactionTable />
        <Footer />

    </div>
  );
}
