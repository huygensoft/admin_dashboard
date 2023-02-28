import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import ProgressBar from 'react-customizable-progressbar'


export default function ProgressPie() {
    
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
      
      const data3 = [
    
        { name: 'Male', value: 400 },
        { name: 'Female', value: 900 },
        
      ]

      const data4 = [
    
        { name: 'Read', value: 400 },
        { name: 'Unread', value: 900 },
        
      ]


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

    //   circular progressbar
      const p1 = 75;

  return (
    <div className='pieChart'>

      {/* Pie container one */}
        <div className='pie-container'>
            <div className='box-left'>
              <span className='pie-span span-left'>Existing Readers</span>
              <span className='pie-span span-right'>Newly Onboarded Readers</span>
            <div className='reader-inner-flex'>     
                <ResponsiveContainer width="23%" height="100%">
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

                <ResponsiveContainer width="23%" height="100%">
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
            <div className='box-right'>
            <h3 className='box-right-tag'>Stats of  Unidentified Readers</h3>
            <div className='bar-inner box-right-inner'>
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
                                            {/* <div className='text'>All Time</div> */}
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
                                        {/* <div className='text'>All Time</div> */}
                                    </div>
                                </div>    
                            }
                        </div>
                </div>
            </div>
        </div>


        {/* Pie container two */}
        <div className='pie-container'>
            <div className='box-left'>
              <span className='pie-span span-left'>Readers using the App the Most</span>
              <span className='pie-span span-right'>Readers Engaging  Books</span>
                <div className='reader-inner-flex'>     
                <ResponsiveContainer width="23%" height="100%">
                    <PieChart width={400} height={400} className='pie-chart'>
                        <Pie
                            data={data3}
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

                <ResponsiveContainer width="23%" height="100%">
                    <PieChart width={400} height={400} className='pie-chart'>
                        <Pie
                            data={data4}
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
                    <div className='pie-item'><span style={{backgroundColor: '#5E3FBE'}}></span>Read</div>
                    <div className='pie-item'><span style={{backgroundColor: '#E5DAFB'}}></span>Unread</div>
                </div>
                </div>
                
            </div>
            {/* <div className='box-right'></div> */}
        </div>

    </div>
  )
}
