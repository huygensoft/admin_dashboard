import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BookDetailGraph() {
  const data = [
        
    {
      name: 'Today',
      amt: 12000,
    },
    {
      name: 'Last Week',
      amt: 9000,
    },
    {
      name: 'Last Month',
      amt: 8000,
    },
    {
      name: 'Last 3 Months',
      amt: 10500,
    },
    {
        name: 'Last 6 Months',
        amt: 11300,
      }
    
  ];


  return (
    <div className="book-graph chart">
      
        <ResponsiveContainer width="90%" height="110%">
        <BarChart width={80} height={40} data={data}>
        
          <Bar dataKey="amt" barSize={90} fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
          <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          
        </BarChart>
      </ResponsiveContainer>
         
      </div>
  )
}
