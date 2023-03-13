import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '../../images/DeleteIcon.svg'
import HideIcon from '../../images/HideIcon.svg'
import EditIcon from '../../images/EditIcon.svg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'


const rows = [
  { 
    id: 1,
    'book title': 'Tijapa Toroko', 
    "book author": 'Soyinka',
    'cover': 'no img',
    'book price': '_____',
    'date': '26, Oct, 2021',
    'actions': 'Edit'
  }
];


const columns = [
  
  { field: 'cover', headerName: 'Cover', width: 150 },
  { field: 'book title', headerName: 'Book Title', width: 200 },
  { field: 'book author', headerName: 'Book Author', width: 200 },
  { field: 'book price', headerName: 'Book Price', width: 150 },
  { field: 'date', headerName: 'Date Started', width: 200 },
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
          <Link to='draftbookdetail'><VisibilityIcon /></Link>
        </div>
      )
    }
  }
  
];


export default function DraftTable() {
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
              border: 1,
              height: 520,
              fontSize: 17,
              borderColor: 'grey',
              '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
              },
            }} 
          />
      </div>
  )
  
}
