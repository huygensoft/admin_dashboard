import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
// import ProgressBar from 'react-customizable-progressbar'
import './progressbar.scss'



export default function Progressbar() {

    // For Piechart
    const data = [
        { name: 'Others', value: 300 },
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


    //   For Circular Progress Bar
    // const pg = 35;
    // const pw = 25;
    // const pf = 68;

  return (
    <div className='progress'>

        {/* Left */}
        <div className='progress-left' >
           <h3> Gender Distribution</h3>

           <div className='inner-flex'>     
                <ResponsiveContainer width="56%" height="100%">
                    <PieChart width={500} height={400} className='pie-chart'>
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
                    <div className='pie-item'><span style={{backgroundColor: '#5E3FBE'}}></span>Female {data[2].value}</div>
                    <div className='pie-item'><span style={{backgroundColor: '#E5DAFB'}}></span>Male {data[1].value}</div>
                    <div className='pie-item'><span style={{backgroundColor: '#F4F0FD'}}></span>Others {data[0].value}</div>
                </div>

            </div>
        </div>

        {/* Right */}
        <div className='progress-right' >
            <h3>Corporate Distribution</h3>
            <h3 className='progress-right-title'>Books Distribution</h3>
        
            <div className='inner-flex-2'>     
                <ResponsiveContainer width="56%" height="100%">
                    <PieChart width={500} height={400} className='pie-chart'>
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
                    <div className='pie-item'><span style={{backgroundColor: '#5E3FBE'}}></span>Readers </div>
                    <div className='pie-item'><span style={{backgroundColor: '#E5DAFB'}}></span>Writers </div>
                    <div className='pie-item'><span style={{backgroundColor: '#F4F0FD'}}></span>Invalid </div>
                </div>


            {/* inner 2 */}

            <ResponsiveContainer width="56%" height="100%">
                    <PieChart width={500} height={400} className='pie-chart'>
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
                    <div className='pie-item'><span style={{backgroundColor: '#5E3FBE'}}></span>Read</div>
                    <div className='pie-item'><span style={{backgroundColor: '#E5DAFB'}}></span>Unread</div>
                </div>

            </div>

            
        </div>
    </div>
  )
}
