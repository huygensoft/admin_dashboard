import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import TableTops from '../../layouts/TableTops'
import Footer from '../overview/Footer'
import DeleteIcon from '../../images/DeleteIcon.svg'
import HideIcon from '../../images/HideIcon.svg'
import EditIcon from '../../images/EditIcon.svg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'

export default function ReaderTableAll() {
  const [pageSize, setPageSize] = useState(5);



  const rows = [
    { 
      id: 1,
      'firstname': 'Adebayo', 
      "lastname": 'Oluwafemi',
      'email': 'adebayo@email.com',
      'phone-no': '+234 703 124 556', 
      'reg-date': '26, Oct, 2021',
      'status': 'Active',
      'actions': 'Edit'
    },
    { 
      id: 2,
      'firstname': 'Adebayo', 
      "lastname": 'Oluwafemi',
      'email': 'adebayo@email.com',
      'phone-no': '+234 703 124 556',
      'reg-date': '26, Oct, 2021',
      'status': 'Active',
      'actions': 'Edit'
    }
  ];
  
  
  const columns = [
    
    { field: 'firstname', headerName: 'Firstname', width: 150 },
    { field: 'lastname', headerName: 'Lastname', width: 150 },
    { field: 'email', headerName: 'Email Address', width: 150 },
    { field: 'phone-no', headerName: 'Mobile Number', width: 170 },
    { field: 'reg-date', headerName: 'Reg. Date', width: 170 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'actions', headerName: 'Actions', width: 280, headerAlign: 'center', 
      renderCell:
      (params) => {
        return(
          <div>
            <span>
              <img src={DeleteIcon} alt='Delete btn' />
              <span>Delete</span>
            </span>
            <span>
              <img src={HideIcon} alt='Hide btn' />
              <span>Hide</span>
            </span>
            <span>
              <img src={EditIcon} alt='edit btn' />
              <span>Edit</span>
            </span>
            <Link to='/readerprofile'><VisibilityIcon /></Link>
          </div>
        )
      }
    }
    
  ];
  
    return (
    <div className='reader-table container'>
          <h2>All Readers</h2>

          {/* Table starts */}
          <div className='table' >
            <TableTops text='Search Reader'/>
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

          {/* Table ends */}

          <Footer/>
    </div>
  );
}
