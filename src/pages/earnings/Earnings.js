import React from 'react'
import './earning.scss'
import ProgressBar from 'react-customizable-progressbar'
import bill from '../../images/bill.svg'
import TransactionTable from './TransactionTable'
import ArrowUp from '../../images/ArrowUp.svg'
import earnGraph from '../../dummyData/earnGraph'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Footer from '../overview/Footer'

export default function Earnings() {

  const p1 = 75;
  const p2 = 25;
  const p3 = 64;
  const p4 = 80;
  const p5 = 55;

  return (
    <div className='earning'> 
      <h3>Transaction History</h3>

    {/* Bill Infos */}
      <div className='bill-container'>
        {/* box one */}
        <div className='box box-1'>
            <img src={bill} alt='bill'className='box-img' />
            <div className='box-inner'>
              <span className='box-span-1'>5,000,000</span>
              <span className='box-span-2'>Total Revenue</span>
              <div className='box-percent'>
                <span className='box-percent-inner'>
                    <img src={ArrowUp} alt='btn' className='box-percent-img'/>
                    11.09%
                </span>
              </div>
            </div>
        </div>

        {/* box two */}
        <div className='box box-2'>
            <img src={bill} alt='bill' />
            <div className='box-inner'>
              <span className='box-span-1'>500,000</span>
              <span className='box-span-2'>Expenses</span>
              <div className='box-percent'>
                <span className='box-percent-inner'>
                    <img src={ArrowUp} alt='btn' className='box-percent-img'/>
                    11.09%
                </span>
              </div>
            </div>
        </div>

        {/* box 3 */}
        <div className='box box-3'>
            <img src={bill} alt='bill' />
            <div className='box-inner'>
              <span className='box-span-1'>900,000</span>
              <span className='box-span-2'>Balance</span>
              <div className='box-percent'>
                <span className='box-percent-inner'>
                    <img src={ArrowUp} alt='btn' className='box-percent-img'/>
                    11.09%
                </span>
              </div>
            </div>
        </div>

        {/* box 4 */}
        <div className='box box-4'>
            <img src={bill} alt='bill' />
            <div className='box-inner'>
              <span className='box-span-1'>900,000</span>
              <span className='box-span-2'>Savings</span>
              <div className='box-percent'>
                <span className='box-percent-inner'>
                    <img src={ArrowUp} alt='btn' className='box-percent-img'/>
                    11.09%
                </span>
              </div>
            </div>
        </div>

      </div>

    {/* Graph */}
    <div className="earn-chart">
        <h3 className="chartTitle">Transactional Graph</h3>
      
        <ResponsiveContainer width="90%" height="100%">
        <BarChart width={80} height={40} data={earnGraph}>
        
          <Bar dataKey="amt" barSize={90} fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
          <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          
        </BarChart>
      </ResponsiveContainer>
         
      </div>


      {/* Progress */}
      <div className='progress-container'>
          {/* box one */}
          <div className='bar-1'>
              <h3>Total Amount of Payouts</h3>
              <div className='bar-inner'>
                    {/* Jan-Jun */}
                    <div className='text-position'>
                          
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
                                            <div className='percent'>{p4}M</div>
                                            <div className='text'>Jan-Jun</div>
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
                                        <div className='percent'>{p4}M</div>
                                        <div className='text'>Jan-Jun</div>
                                    </div>
                                </div>    
                            }
                    </div>

                    {/* Jul-Dec  */}
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
                                            <div className='percent'>{p5}M</div>
                                            <div className='text'>Jul-Dec</div>
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
                                        <div className='percent'>{p5}M</div>
                                        <div className='text'>Jul-Dec</div>
                                    </div>
                                </div>    
                            }
                    </div>
              </div>
          </div>

          {/* box two */}
          <div className='bar-2'>
              <h3>Total Amount of Revenue</h3>
              <div className='bar-inner'>

                {/* Jan-Apr */}
              <div className='text-position'>
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
                                    <div className='percent'>{p1}M</div>
                                    <div className='text'>Jan-Apr</div>
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
                                <div className='percent'>{p1}M</div>
                                <div className='text'>Jan-Apr</div>
                            </div>
                        </div>    
                    }
                </div>

                {/* May-Aug */}
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
                                    <div className='percent'>{p2}M</div>
                                    <div className='text'>May-Aug</div>
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
                                <div className='percent'>{p2}M</div>
                                <div className='text'>May-Aug</div>
                            </div>
                        </div>    
                    }
                </div>

                {/* Sep-Dec */}
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
                                    <div className='percent'>{p3}M</div>
                                    <div className='text'>Sep-Dec</div>
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
                                <div className='percent'>{p3}M</div>
                                <div className='text'>Sep-Dec</div>
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
        <Footer />

    </div>
  )
}
