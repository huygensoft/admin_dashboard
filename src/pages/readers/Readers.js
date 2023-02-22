import React from 'react'
import Chart from '../home/Chart'
import ProgressPie from './ProgressPie'
import ReaderTable from './ReaderTable'
import './reader.scss'

export default function Readers() {
  return (
    <div className='reader container'>

        <div className='title'>
            <h3 className='title-salute'>Statistics of Readers</h3>
            <span className='title-tag'>Newly Onboard and Existing</span>
        </div>

        <Chart title='Statistical' />
        <ProgressPie />
        <h2>Newly Registered Readers</h2>
        <ReaderTable />


    </div>
  )
}
