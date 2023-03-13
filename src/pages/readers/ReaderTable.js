import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowRightIcon from '../../images/ArrowRightIcon.svg'
import SlashIcon from '../../images/SlashIcon.svg'
import CheckCircle from '../../images/CheckCircle.svg'


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
  }
  
];

const columns = [
  { field: 'Avatar', headerName: 'Avatar', width: 100},
  { field: 'Firstname', headerName: 'Firstname', width: 150 },
  { field: 'Lastname', headerName: 'Lastname', width: 130 },
  { field: 'Middlename', headerName: 'Middle Name', width: 130 },
  { field: 'Email Address', headerName: 'Email Address', width: 150 },
  { field: 'Phone Number', headerName: 'Mobile Number', width: 150 },
  { field: 'Reg. Date', headerName: 'Reg. Date', width: 150 },
  { field: 'Action', headerName: 'Action', width: 210, headerAlign: 'center', 
    renderCell: 
    (params) => {
      return(
        <div className='new-user-column'>
          <span>
            <img src={ArrowRightIcon} alt='Delete btn' />
            {/* <span>Delete</span> */}
          </span>
          <span>
            <img src={SlashIcon} alt='Hide btn' />
            {/* <span>Hide</span> */}
          </span>
          <span>
            <img src={CheckCircle} alt='edit btn' />
            {/* <span>Edit</span> */}
          </span>
          <Link to='readerprofile'><VisibilityIcon /></Link>
        </div>
      );
    }
  }
];



export default function ReaderTable() {
  const [pageSize, setPageSize] = useState(5);
  return (
      <div className='newuser-table' >
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

          <div className='newuser-btn-container'>
              <button>View All</button>
          </div>

      </div>
  )
}