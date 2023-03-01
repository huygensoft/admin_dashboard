import React, { useState } from 'react'
import Chart from '../overview/Chart'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import TableTops from '../../layouts/TableTops';
import CloseIcon from '../../images/CloseIcon.svg'



const columns = [
    { field: 'transaction id', headerName: 'Transaction ID', width: 140, headerAlign: 'center'},
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
            <div className='finance-table' >
                
                <TableTops text='Search Transaction'/>
                <DataGrid 
                    rows={rows} 
                    columns={columns} 
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination  
                    components={{ Toolbar: GridToolbar }}
                    sx={{
                      boxShadow: 2,
                      border: 2,
                      height: 520,
                      fontSize: 17,
                      borderColor: 'grey',
                      '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                      },
                    }}
                />
            </div>
        </div>

        <div className='transaction-detail-container'>
            <h3 style={{color: '#2D2D2D'}}>Transaction Details <img src={CloseIcon} alt='close button' className='trans-title-close-btn'/></h3>
            
            <div className='transaction-detail'>
                  <div className='trans-item'><span>Transaction ID</span> <span>47uyHRfe4ks9</span></div>
                  <div className='trans-item'><span>Amount Transacted</span> <span>120,000 (#) Naira</span></div>
                  <div className='trans-item'><span>Sender</span> <span>Booksrite</span></div>
                  <div className='trans-item'><span>Receiver</span> <span>Adebayo Oluwafemi</span></div>
                  <div className='trans-item'><span>Transaction Form</span> <span>Withdrawal/Monetary Transaction</span></div>
                  <div className='trans-item'><span>Transaction Type</span> <span>Debit</span></div>
                  <div className='trans-item'><span>Transaction Status</span> <span>Successful</span></div>
                  <div className='trans-item'><span>Date & Time of Transaction</span> <span>Transaction ID</span></div>
            
                  <div className='trans-btn-container'><button className='trans-btn'>Download</button></div>
            
            </div>
        </div>

    </div>
  )
}
