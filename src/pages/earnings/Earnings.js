import React from 'react'
import './earning.scss'
import ProgressBar from 'react-customizable-progressbar'
import bill from '../../images/bill.svg'
import TransactionTable from './TransactionTable'

export default function Earnings() {

  const p1 = 75;
  const p2 = 25;
  const p3 = 64;
  const p4 = 80;
  const p5 = 55;

  return (
    <div className='earning container'> 
      <h3>Transaction History</h3>

      <div className='bill-container'>
        {/* box one */}
        <div className='box-1'>
            <img src={bill} alt='bill' />
            <div className='box-inner'>
              <span className='box-span-1'>5,000,000,000</span>
              <span className='box-span-2'>Total Revenue</span>
            </div>
        </div>

        {/* box two */}
        <div className='box-2'>
            <img src={bill} alt='bill' />
            <div className='box-inner'>
              <span className='box-span-1'>9,000,000,000</span>
              <span className='box-span-2'>Total Payout</span>
            </div>
        </div>

      </div>

      {/* Progress */}
      <div className='progress-container'>
          {/* box one */}
          <div className='bar-1'>
              <h3>Total Amount of Payouts</h3>
              <div className='bar-inner'>
                      <div className='text-position'>
                          {/* all time */}
                            {p4 > 49 ?
                                <div>
                                    <ProgressBar
                                            radius={70}
                                            progress={p4}
                                            strokeWidth={8}
                                            strokeColor="seagreen"
                                            trackStrokeWidth={10}
                                        />
                                        <div className='inner-content'>
                                            <div className='percent'>{p4}%</div>
                                            <div className='text'>All Time</div>
                                        </div>
                                </div>
                                :
                                <div>
                                    <ProgressBar
                                        radius={70}
                                        progress={p4}
                                        strokeWidth={8}
                                        strokeColor="orange"
                                        trackStrokeWidth={10}
                                    />
                                    <div className='inner-content'>
                                        <div className='percent'>{p4}%</div>
                                        <div className='text'>All Time</div>
                                    </div>
                                </div>    
                            }
                        </div>

                    {/* this year  */}
                    <div className='text-position'>
                            {p5 > 49 ?
                                <div>
                                    <ProgressBar
                                            radius={70}
                                            progress={p5}
                                            strokeWidth={8}
                                            strokeColor="seagreen"
                                            trackStrokeWidth={10}
                                        />
                                        <div className='inner-content'>
                                            <div className='percent'>{p5}%</div>
                                            <div className='text'>This Year</div>
                                        </div>
                                </div>
                                :
                                <div>
                                    <ProgressBar
                                        radius={70}
                                        progress={p5}
                                        strokeWidth={8}
                                        strokeColor="orange"
                                        trackStrokeWidth={10}
                                    />
                                    <div className='inner-content'>
                                        <div className='percent'>{p5}%</div>
                                        <div className='text'>This year</div>
                                    </div>
                                </div>    
                            }
                        </div>
                    </div>
                  {/* ends */}
        
          </div>

          {/* box two */}
          <div className='bar-2'>
              <h3>Total Amount of Revenue</h3>
              <div className='bar-inner'>
              <div className='text-position'>
                  {/* Exposure */}
                    {p1 > 49 ?
                        <div>
                            <ProgressBar
                                    radius={70}
                                    progress={p1}
                                    strokeWidth={8}
                                    strokeColor="seagreen"
                                    trackStrokeWidth={10}
                                />
                                <div className='inner-content'>
                                    <div className='percent'>{p1}%</div>
                                    <div className='text'>Readers</div>
                                </div>
                        </div>
                        :
                        <div>
                            <ProgressBar
                                radius={70}
                                progress={p1}
                                strokeWidth={8}
                                strokeColor="orange"
                                trackStrokeWidth={10}
                            />
                            <div className='inner-content'>
                                <div className='percent'>{p1}%</div>
                                <div className='text'>Readers</div>
                            </div>
                        </div>    
                    }
                </div>

            {/* Writers  */}
            <div className='text-position'>
                    {p2 > 49 ?
                        <div>
                            <ProgressBar
                                    radius={70}
                                    progress={p2}
                                    strokeWidth={8}
                                    strokeColor="seagreen"
                                    trackStrokeWidth={10}
                                />
                                <div className='inner-content'>
                                    <div className='percent'>{p2}%</div>
                                    <div className='text'>Writers</div>
                                </div>
                        </div>
                        :
                        <div>
                            <ProgressBar
                                radius={70}
                                progress={p2}
                                strokeWidth={8}
                                strokeColor="orange"
                                trackStrokeWidth={10}
                            />
                            <div className='inner-content'>
                                <div className='percent'>{p2}%</div>
                                <div className='text'>Writers</div>
                            </div>
                        </div>    
                    }
                </div>

             {/* all time */}
            <div className='text-position'>
                    {p3 > 49 ?
                        <div>
                            <ProgressBar
                                    radius={70}
                                    progress={p3}
                                    strokeWidth={8}
                                    strokeColor="seagreen"
                                    trackStrokeWidth={10}
                                />
                                <div className='inner-content'>
                                    <div className='percent'>{p3}%</div>
                                    <div className='text'>All Time</div>
                                </div>
                        </div>
                        :
                        <div>
                            <ProgressBar
                                radius={70}
                                progress={p3}
                                strokeWidth={8}
                                strokeColor="orange"
                                trackStrokeWidth={10}
                            />
                            <div className='inner-content'>
                                <div className='percent'>{p3}%</div>
                                <div className='text'>All Time</div>
                            </div>
                        </div>    
                    }
                </div>
            </div>
          </div>
          {/* ends */}

      </div>

      {/* Table */}
        <TransactionTable />


    </div>
  )
}
