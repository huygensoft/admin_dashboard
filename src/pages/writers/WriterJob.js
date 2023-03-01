import React from 'react'
// import ProgressBar from 'react-customizable-progressbar'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function WriterJob() {


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
    <div className='job'>
        <div className='job-stats'>
            <h5>Job Status</h5>
            <div>Employed</div>
        </div>
        <div className='company'>
            <h5>Recruiting Company</h5>
            <div>Google Inc.</div>
        </div>
        <div className='role'>
            <h5>Job Role</h5>
            <div>Copywriter</div>
        </div>
        <div className='level'>
            <h5>Experience Level</h5>
            <div>Intermediate</div>
        </div>
        <div className='com-address'>
            <h5>Company Address</h5>
            <div>McKenzie Hernandez
              Ap #367-674 Mi Street Greensboro VT 40684
              (168) 222-1592 Haviva Holcomb
            </div>
        </div>
        <div className='space'></div>


             {/* Pie chart */}
        
        <div className='pie-container-writer pie-position-writer pie-position-writer-job'>
            <div className='r-left box-left'>
              <span className='pie-span span-left'>Existing Writers</span>
              <span className='pie-span span-right'>Newly Onboarded Writers</span>
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
            <div className='r-right box-right'>
                {/* <h3 className='box-right-tag'>Stats of  Undentified Readers</h3>
                <div className='bar-inner'>
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
                </div> */}
            </div>
        </div>



    </div>
  )
}
