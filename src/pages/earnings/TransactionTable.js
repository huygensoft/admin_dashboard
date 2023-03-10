import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import TableTops from '../../layouts/TableTops';
// import  -btn from '../../images/search-btn.svg'
// import ex-btn from '../../images/ex-btn.svg'

// 

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

export default function TransactionTable() {

    const [pageSize, setPageSize] = useState(5);

  return (      
        <div className='trans-table-container'>
            <h3>Transaction History</h3>
            <div className='table'>
                
                <TableTops text='Search Transaction'/>
                <DataGrid 
                    rows={rows} 
                    columns={columns} 
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination  
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

  )
}
