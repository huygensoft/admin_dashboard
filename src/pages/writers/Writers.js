import React, { useState } from 'react'
import './writer.scss'
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '../../images/DeleteIcon.svg'
import HideIcon from '../../images/HideIcon.svg'
import EditIcon from '../../images/EditIcon.svg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'

export default function Writers() {
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
    { field: 'actions', headerName: 'Actions', width: 300, 
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
            <Link to='/writerprofile'><VisibilityIcon /></Link>
          </div>
        )
      }
    }
    
  ];
  
    return (
    <div className='writer container'>
          <h2>All Writers</h2>

          {/* Table starts */}
          <div style={{ height: 400, width: '100%', background: '#fff', borderRadius: 16, marginTop: 15, marginBottom: 20}} >
            {/* Search Button */}
            <div className='writer-search-container'>
                  <form>
                    <input type='text' placeholder='Search' />
                  </form>
              </div>
            <DataGrid 
              rows={rows} 
              columns={columns} 
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 10, 20]}
              pagination  
            />
        </div>

          {/* Table ends */}
    </div>
  );
}
