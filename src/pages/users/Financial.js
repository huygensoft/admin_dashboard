import React, { useState } from 'react'
import Chart from '../home/Chart'
import { DataGrid } from '@mui/x-data-grid';



const columns = [
    { field: 'transaction id', headerName: 'Transaction ID', width: 200, textAlign: 'center', },
    { field: 'amount', headerName: 'Amount (N)', width: 170 },
    { field: 'transaction type', headerName: 'Transaction Type', width: 180 },
    { field: 'status', headerName: 'Status', width: 180 },
    { field: 'date-time', headerName: 'Transaction Date & Time', width: 230 },
    { field: 'View', headerName: 'View', width: 150 },
  ];


  const rows = [
    { 
      id: 1,
      'transaction id': 'no img', 
      'amount': 'John', 
      'transaction type': 'Oluwafemi',
      'status': 'john@Mail.com',
      'date-time': +2340813939,
      View: 'button'   
    },
    { 
        id: 2,
        'transaction id': 'Xdr5we43hhh', 
        'amount': '25,000', 
        'transaction type': 'Credit',
        'status': 'Successful',
        'date-time': '26 Oct 2021 4:56PM',
        View: 'button'   
      },
      { 
        id: 3,
        'transaction id': 'no img', 
        'amount': 'John', 
        'transaction type': 'Oluwafemi',
        'status': 'john@Mail.com',
        'date-time': +2340813939,
        View: 'button'   
      },
  ]

export default function Financial() {

    const [pageSize, setPageSize] = useState(5);

  return (
    <div className='finance'>
        <h2>Account Details</h2>

        <div className='finance-grid'>
            <div className='acc-name'>
                <h5>Account Name</h5>
                <div>Emmanuel Daniel Okoro</div>
            </div>
            <div className='bank-name'>
                <h5>Bank Name</h5>
                <div>Access Bank</div>
            </div>
            <div className='acc-no'>
                <h5>Account Number</h5>
                <div>0894580327</div>
            </div>
            <div className='bvn'>
                <h5>BVN Number</h5>
                <div>22289743200</div>
            </div>
            <div className='all-details-container'>
              <div className='all-total'>
                <h5>Total Balance</h5>
                <div>#800,000.00</div>
              </div>
              <div className='all-credit-debit'>
                  <div className='all-credit'>
                    <h5>Total Amount Credited</h5>
                    <div>#2,000,000.00</div>
                  </div>
                  <div className='all-debit'>
                    <h5>Total Amount Debited</h5>
                    <div>#1,200,000.00</div>
                  </div>
              </div>
            </div>
        </div>

        <div className='finance-graph-container'>
            {/* <h2> Transactional Graph</h2> */}
            <Chart title='Transactional' />
            {/* <div className='finance-graph'>

            </div> */}
        </div>

        <div className='finance-table-container'>
            <h3>All Transactions</h3>
            <div style={{ height: 400, width: '100%', background: '#fff', borderRadius: 16, marginTop: 15, }} >
                <DataGrid 
                    rows={rows} 
                    columns={columns} 
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination  
                />
            </div>
        </div>

        <div className='transaction-detail-container'>
            <h3>Transaction Details</h3>
        </div>

    </div>
  )
}
