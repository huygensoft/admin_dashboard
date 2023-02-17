import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';



const rows = [
  { 
    id: 1,
    Avatar: 'no img', 
    Firstname: 'John', 
    Lastname: 'Oluwafemi',
    'Email Address': 'john@Mail.com',
    'Phone Number': +2340813939,
    'Reg. Date': 2020,
    Action: 'free'
  },
  { 
    id: 2,
    Avatar: 'no img', 
    Firstname: 'John', 
    Lastname: 'Oluwafemi',
    'Email Address': 'john@Mail.com',
    'Phone Number': +2340813939,
    'Reg. Date': 2020,
    Action: 'free'
  },
  // { 
  //   id: 3,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 4,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 5,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 6,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 7,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 8,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 9,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 10,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 11,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 12,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 13,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 14,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 15,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 16,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 17,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 18,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 19,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 20,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // },
  // { 
  //   id: 21,
  //   Avatar: 'no img', 
  //   Firstname: 'John', 
  //   Lastname: 'Oluwafemi',
  //   'Email Address': 'john@Mail.com',
  //   'Phone Number': +2340813939,
  //   'Reg. Date': 2020,
  //   Action: 'free',
  //   View: 'button'   
  // }
  
];

function handleClick(event) {
  rows.map((row) => {
    return ( 
      <div>
        alert ({row.id} + {row.name} );
      </div>
    );

  })
}



const columns = [
  { field: 'Avatar', headerName: 'Avatar', width: 100, textAlign: 'center', },
  { field: 'Firstname', headerName: 'Firstname', width: 150 },
  { field: 'Lastname', headerName: 'Lastname', width: 150 },
  { field: 'Email Address', headerName: 'Email Address', width: 150 },
  { field: 'Phone Number', headerName: 'Phone Number', width: 150 },
  { field: 'Reg. Date', headerName: 'Reg. Date', width: 150 },
  { field: 'Action', headerName: 'Action', width: 150 },
  { field: 'View', headerName: 'View', width: 150, 
    renderCell: () => {
      return (
        <div>
          View
        </div>
      );
    }
  }
];



export default function Table() {

  const [pageSize, setPageSize] = useState(5);
  return (
      <div style={{ height: 600, width: '100%', background: '#fff', borderRadius: 16, marginTop: 15, }} >
          <DataGrid 
            rows={rows} 
            columns={columns} 
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            pagination  
            onCellClick={handleClick}
          />
      </div>
  )
}
