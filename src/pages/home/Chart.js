import React from 'react'
import './chart.scss'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

    
  
  export default function Chart(props) {

    const data = [
        
        {
          name: 'Users',
          amt: 12000,
        },
        {
          name: 'Books',
          amt: 9000,
        },
        {
          name: 'Writers',
          amt: 8000,
        },
        {
          name: 'Readers',
          amt: 10500,
        },
        {
          name: 'Invalid',
          amt: 2500,
        },
        
       
      ];
      
    
  
    return (
      <div className="chart">
        <h3 className="chartTitle">{props.title} Graph</h3>
      
        <ResponsiveContainer width="90%" height="100%">
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
    );
  }