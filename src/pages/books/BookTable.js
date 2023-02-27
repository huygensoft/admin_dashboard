import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import Rows from '../../dummyData/RowBook'
import DeleteIcon from '../../images/DeleteIcon.svg'
import HideIcon from '../../images/HideIcon.svg'
import EditIcon from '../../images/EditIcon.svg'
import VisibilityIcon from '@mui/icons-material/Visibility';




const columns = [
  { field: 'cover', headerName: 'Cover', width: 100, },
  { field: 'book title', headerName: 'Book Title', width: 200 },
  { field: 'book author', headerName: 'Book Author', width: 200 },
  { field: 'book price', headerName: 'Book Price', width: 150 },
  { field: 'date added', headerName: 'Date Added', width: 200 },
  { field: 'actions', headerName: 'Actions', width: 300, headerAlign: 'center',
  renderCell: (params) => {
    return (
      <div>
          <span>
            <img src={DeleteIcon} alt='btn' />
            <span style={{paddingBottom: 20}}>Delete</span>
          </span>
          <span style={{paddingLeft: 20}}>
            <img src={HideIcon} alt='btn' />
            <span>Hide</span>
          </span>
          <span style={{paddingLeft: 20}}>
            <img src={EditIcon} alt='btn' />
            <span>Edit</span>
          </span>
          <Link to='/profile'><VisibilityIcon /></Link>
    </div>
    );
  }


  },
  
];


export default function BookTable() {
  const [pageSize, setPageSize] = useState(5);
  return (
      <div className='newuser-table'>
          <DataGrid 
            rows={Rows} 
            columns={columns} 
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            pagination  
            sx={{
              boxShadow: 2,
              border: 1,
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
