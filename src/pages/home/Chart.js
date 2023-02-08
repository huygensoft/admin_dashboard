import React from 'react'
import './chart.scss'


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

    
  
  export default function Chart() {

    const data = [
        {
          name: 'First',
          user: 1000,
          books: 2400,
          amt: 2400,
        },
        {
          name: 'Users',
          user: 4000,
          books: 7398,
          amt: 3810,
        },
        {
          name: 'Books',
          user: 2000,
          books: 5800,
          amt: 1290,
        },
        {
          name: 'Writers',
          user: 8780,
          books: 3908,
          amt: 2200,
        },
        {
          name: 'Readers',
          user: 1890,
          books: 4800,
          amt: 2181,
        },
        {
          name: 'none',
          user: 1890,
          books: 4800,
          amt: 2181,
        },
        {
          name: 'none',
          user: 1890,
          books: 4800,
          amt: 2181,
        },
       
      ];
    
  
    return (
      <div className="chart">
        <h3 className="chartTitle">Statistical Graph</h3>
        {/* <ResponsiveContainer width="80%" height="100%" aspect={4 / 1} className="chart-container">
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#2D2D2D" />
            <YAxis dataKey={"uv"} stroke="#2D2D2D"/>
            <Line type="monotone" dataKey={"amt"} stroke="#0E625F" />
            <Line type="monotone" dataKey={"pv"} stroke="#F37273" />
             <Tooltip />
             <CartesianGrid stroke='#DDDDDD' />
             {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}  
          </LineChart>
        </ResponsiveContainer> */}

        <ResponsiveContainer width="90%" height="120%">
        <LineChart
          width={500}
          height={700}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend width={100} height={150}
            wrapperStyle={{ top: 5, 
              right: -100, backgroundColor: '#f5f5f5', 
              border: '1px solid #d5d5d5', borderRadius: 3, 
              lineHeight: '40px' }}
          />
          <Line type="monotone" dataKey="books" stroke="#0E625F" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="user" stroke="#F37273" />
        </LineChart>
      </ResponsiveContainer>
         
      </div>
    );
  }