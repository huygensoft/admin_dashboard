import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import ProgressBar from 'react-customizable-progressbar'

export default function ReaderBasic() {
const p1 = 70;

const data = [
    { name: 'Inactive', value: 300 },
    { name: 'Male', value: 550 },
    { name: 'Female', value: 700 },
    
    // { name: 'Group D', value: 200 },
  ];

  const data2 = [
    { name: 'Others', value: 500 },
    { name: 'Male', value: 450 },
    { name: 'Female', value: 500 },
    
    // { name: 'Group D', value: 200 },
  ];
  
//   const data3 = [

//     { name: 'Male', value: 400 },
//     { name: 'Female', value: 900 },
    
//   ]

//   const data4 = [

//     { name: 'Read', value: 400 },
//     { name: 'Unread', value: 900 },
    
//   ]


  const COLORS = ['#F4F0FD', '#E5DAFB', '#5E3FBE'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


  return (
    <div className='reader-basic'>
        <div className='first'>
            <h5>Firstname</h5>
            <div>Adebayo</div>
        </div>
        <div className='last'>
            <h5>Lastname</h5>
            <div>Oluwafemi</div>
        </div>
        <div className='phone-no'>
            <h5>Phone Number</h5>
            <div>+234 812 345 6789</div>
        </div>
        <div className='gender'>
            <h5>Gender</h5>
            <div>Male</div>
        </div>
        <div className='reader-status'>
            <h5>Status</h5>
            <div>Active</div>
        </div>
        <div className='reader-reg'>
            <h5>Date of Registration</h5>
            <div> 4th, October 2020</div>
        </div>
        <div className='reader-birth'>
            <h5>Date of Birth</h5>
            <div>28th of November 2001</div>
        </div>
        <div className='reader-nin'>
            <h5>NIN</h5>
            <div>1234567890</div>
        </div>
        
        <div className='space'>
            <div className='space-inner'>
                <button className='btn-1'>Edit Info</button>
                <button className='btn-2'>Delete</button> <br />
                <button className='btn-3'>Total Ban</button>
                <button className='btn-4'>Shadow Ban</button>
            </div>
        </div>

        {/* 2nd Grid */}
        <div className='second-grid'>
            <div className='country'>
                <h5>Country of Residence</h5>
                <div>Nigeria</div>
            </div>
            <div className='state'>
                <h5>State of Residence</h5>
                <div>Lagos State</div>
            </div>
            <div className='address'>
                <h5>Address of Residence</h5>
                <div>Block 6, Flat 2, Johnson Crescent, Bode Thomas, Surulere Lagos State.</div>
            </div>
            
            <div className='e-space'></div>
        </div>

        {/* Pie chart */}
        
        <div className='pie-container pie-position'>
            <div className='r-left box-left'>
              <h2>title</h2>
            <div className='inner-flex'>     
                <ResponsiveContainer width="32%" height="100%">
                    <PieChart width={400} height={400} className='pie-chart'>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="black"
                            dataKey="value"
                            startAngle={-270}
    
                        >
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className='pie-detail'>
                    <div className='pie-item'><span style={{backgroundColor: '#5E3FBE'}}></span>Female </div>
                    <div className='pie-item'><span style={{backgroundColor: '#E5DAFB'}}></span>Male </div>
                    <div className='pie-item'><span style={{backgroundColor: '#F4F0FD'}}></span>Others </div>
                </div>

                <ResponsiveContainer width="32%" height="100%">
                    <PieChart width={400} height={400} className='pie-chart'>
                        <Pie
                            data={data2}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="black"
                            dataKey="value"
                            startAngle={-270}
    
                        >
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className='pie-detail'>
                    <div className='pie-item'><span style={{backgroundColor: '#5E3FBE'}}></span>Female</div>
                    <div className='pie-item'><span style={{backgroundColor: '#E5DAFB'}}></span>Male</div>
                    <div className='pie-item'><span style={{backgroundColor: '#F4F0FD'}}></span>Others</div>
                </div>

            </div>
            </div>

            {/* Circular progress-bar */}
            <div className='r-right box-right'>
            <h3>Stats of  Undentified Readers</h3>
            <div className='bar-inner'>
                      <div className='text-position'>
                          {/* all time */}
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
                                            <div className='text'>All Time</div>
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
                                        <div className='text'>All Time</div>
                                    </div>
                                </div>    
                            }
                        </div>
                </div>
            </div>
        </div>

    </div>
  )
}
