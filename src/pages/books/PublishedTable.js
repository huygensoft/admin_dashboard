import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';


const rows = [
  { 
    id: 1,
    'book title': 'Tijapa Toroko', 
    "book author": 'Soyinka',
    'review': '***',
    'book price': '#3000',
    'download': 530,
    'actions': 'Edit'
  },
  { 
    id: 2,
    'book title': 'Tijapa Toroko', 
    "book author": 'Soyinka',
    'review': '***',
    'book price': '#3000',
    'download': 400,
    'actions': 'Edit'
  }
];


const columns = [
  
  { field: 'book title', headerName: 'Book Title', width: 200 },
  { field: 'book author', headerName: 'Book Author', width: 200 },
  { field: 'review', headerName: 'Review', width: 150 },
  { field: 'book price', headerName: 'Book Price', width: 150 },
  { field: 'download', headerName: 'Downloads', width: 200 },
  { field: 'actions', headerName: 'Actions', width: 200 },
  
];


export default function PublishedTable() {
  const [pageSize, setPageSize] = useState(5);
  return (
      <div style={{ height: 400, width: '100%', background: '#fff', borderRadius: 16, marginTop: 15, marginBottom: 20}} >
          <DataGrid 
            rows={rows} 
            columns={columns} 
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            pagination  
          />
      </div>
  )
  
}
