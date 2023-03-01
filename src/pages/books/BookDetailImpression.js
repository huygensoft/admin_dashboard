import React from 'react'
import ProgressBar from 'react-customizable-progressbar'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function BookDetailImpression() {

  const p4 = 80;
  const p5 = 55;

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
    <div className='book-impression-container'>
        <div className='imp-downloads'>
            <h3 className='imp-title t-1'>No of Downloads</h3>
            <div className='imp-inner-left'>
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
        </div>


        {/* --------------------------------------------- */}
        <div className='imp-right'>
            <div className='title-container'>
                <h3 className='imp-title-1'>Exposure</h3>
                <h3 className='imp-title-2'>No of Likes</h3>
            </div>
            <div className='imp-inner-right'>
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
                    <div className='pie-item'><span style={{backgroundColor: '#5E3FBE'}}></span>Readers </div>
                    <div className='pie-item'><span style={{backgroundColor: '#E5DAFB'}}></span>Writers </div>
                    <div className='pie-item'><span style={{backgroundColor: '#F4F0FD'}}></span>Invalid </div>
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
                    <div className='pie-item'><span style={{backgroundColor: '#5E3FBE'}}></span>Readers</div>
                    <div className='pie-item'><span style={{backgroundColor: '#E5DAFB'}}></span>Writers</div>
                    {/* <div className='pie-item'><span style={{backgroundColor: '#F4F0FD'}}></span>Others</div> */}
                </div>
            </div>
        </div>
    </div>
  )
}
