import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';



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


  return (
    <div className='pieChart'>

      {/* Pie container one */}
        <div className='pie-container'>
            <div className='box-left'>
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
            <div className='box-right'></div>
        </div>


        {/* Pie container two */}
        <div className='pie-container'>
            <div className='box-left'>
              <h2>title</h2>
            <div className='inner-flex'>     
                <ResponsiveContainer width="32%" height="100%">
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

                <ResponsiveContainer width="32%" height="100%">
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
                    <div className='pie-item'><span style={{backgroundColor: '#5E3FBE'}}></span>Female</div>
                    <div className='pie-item'><span style={{backgroundColor: '#E5DAFB'}}></span>Male</div>
                    <div className='pie-item'><span style={{backgroundColor: '#F4F0FD'}}></span>Others</div>
                </div>
            </div>
                
            </div>
            {/* <div className='box-right'></div> */}
        </div>

    </div>
  )
}
