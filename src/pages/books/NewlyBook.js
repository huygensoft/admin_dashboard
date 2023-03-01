import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import SearchSort from '../../layouts/searchSort/SearchSort'
import DeleteIcon from '../../images/DeleteIcon.svg'
import HideIcon from '../../images/HideIcon.svg'
import UnpublishIcon from '../../images/UnpublishIcon.svg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'
import Footer from '../overview/Footer'


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
  
  { field: 'book title', headerName: 'Book Title', width: 150 },
  { field: 'book author', headerName: 'Book Author', width: 200 },
  { field: 'review', headerName: 'Review', width: 150 },
  { field: 'book price', headerName: 'Book Price', width: 150 },
  { field: 'download', headerName: 'Downloads', width: 150 },
  { field: 'actions', headerName: 'Actions', width: 340, headerAlign: 'center', 
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
            <img src={UnpublishIcon} alt='Unpublished btn' />
            <span>Unpublished</span>
          </span>
          <Link to='/bookdetail'><VisibilityIcon /></Link>
        </div>
      )
    }
  }
  
];


export default function NewlyBook() {
  const [pageSize, setPageSize] = useState(5);

  return (
    <div className='newly-book container'>
        
      {/* Search Button */}
      <div className='book-search-container'>
            <SearchSort />
      </div>

      <h2>Newly Added Books</h2>
      
      {/* Table */}
      <div className='newuser-table'>
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

      <Footer />
    </div>
  )
}
