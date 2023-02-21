import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import btn from '../../images/btn.svg'
import hide from '../../images/hide.svg'
import edit from '../../images/edit.svg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'


const rows = [
  { 
    id: 1,
    'book title': 'Tijapa Toroko', 
    "book author": 'Soyinka',
    'cover': '***',
    'book price': '#3000',
    'date': '26, Oct, 2021',
    'actions': 'Edit'
  },
  { 
    id: 2,
    'book title': 'Tijapa Toroko', 
    "book author": 'Soyinka',
    'cover': '***',
    'book price': '#3000',
    'date': '27, Oct, 2021',
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
            <img src={btn} alt='Delete btn' />
            <span>Delete</span>
          </span>
          <span>
            <img src={hide} alt='Hide btn' />
            <span>Hide</span>
          </span>
          <span>
            <img src={edit} alt='edit btn' />
            <span>Edit</span>
          </span>
          <Link to='/draftbookdetail'><VisibilityIcon /></Link>
        </div>
      )
    }
  }
  
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
