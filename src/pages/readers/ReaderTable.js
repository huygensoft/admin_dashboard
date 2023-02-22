import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';


const rows = [
  { 
    id: 1,
    Avatar: 'no img', 
    Firstname: 'John', 
    Lastname: 'Oluwafemi',
    Middlename: 'James',
    'Email Address': 'john@Mail.com',
    'Phone Number': +2340813939,
    'Reg. Date': 2020,
    Action: 'free',
    View: 'button'   
  },
  { 
    id: 2,
    Avatar: 'no img', 
    Firstname: 'John', 
    Lastname: 'Oluwafemi',
    Middlename: 'James',
    'Email Address': 'john@Mail.com',
    'Phone Number': +2340813939,
    'Reg. Date': 2020,
    Action: 'free',
    View: 'button'   
  },
  { 
    id: 3,
    Avatar: 'no img', 
    Firstname: 'John', 
    Lastname: 'Oluwafemi',
    Middlename: 'James',
    'Email Address': 'john@Mail.com',
    'Phone Number': +2340813939,
    'Reg. Date': 2020,
    Action: 'free',
    View: 'button'   
  },
  { 
    id: 4,
    Avatar: 'no img', 
    Firstname: 'John', 
    Lastname: 'Oluwafemi',
    Middlename: 'James',
    'Email Address': 'john@Mail.com',
    'Phone Number': +2340813939,
    'Reg. Date': 2020,
    Action: 'free',
    View: 'button'   
  },
  { 
    id: 5,
    Avatar: 'no img', 
    Firstname: 'John', 
    Lastname: 'Oluwafemi',
    Middlename: 'James',
    'Email Address': 'john@Mail.com',
    'Phone Number': +2340813939,
    'Reg. Date': 2020,
    Action: 'free',
    View: 'button'   
  },
  
];

const columns = [
  { field: 'Avatar', headerName: 'Avatar', width: 100, textAlign: 'center', },
  { field: 'Firstname', headerName: 'Firstname', width: 150 },
  { field: 'Lastname', headerName: 'Lastname', width: 150 },
  { field: 'Middlename', headerName: 'Middle Name', width: 150 },
  { field: 'Email Address', headerName: 'Email Address', width: 150 },
  { field: 'Phone Number', headerName: 'Phone Number', width: 150 },
  { field: 'Reg. Date', headerName: 'Reg. Date', width: 150 },
  { field: 'Action', headerName: 'Action', width: 150 },
  { field: 'View', headerName: 'View', width: 150 },
];






export default function ReaderTable() {
  const [pageSize, setPageSize] = useState(5);
  return (
      <div style={{ height: 600, width: '100%', background: '#fff', borderRadius: 16, marginTop: 15, marginBottom: 15,}} >
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