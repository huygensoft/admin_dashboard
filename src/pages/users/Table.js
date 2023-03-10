import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import Rows from '../../dummyData/RowUser'
import ArrowRightIcon from '../../images/ArrowRightIcon.svg'
import SlashIcon from '../../images/SlashIcon.svg'
import CheckCircle from '../../images/CheckCircle.svg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import TableTops from '../../layouts/TableTops'




// function handleClick(event) {
//   rows.map((row) => {
//     return ( 
//       <div>
//         alert ({row.id} + {row.name} );
//       </div>
//     );

//   })
// }



const columns = [
  { field: 'Avatar', headerName: 'Avatar', width: 100, textAlign: 'center', },
  { field: 'Firstname', headerName: 'Firstname', width: 150 },
  { field: 'Lastname', headerName: 'Lastname', width: 150 },
  { field: 'Email Address', headerName: 'Email Address', width: 150 },
  { field: 'Phone Number', headerName: 'Mobile Number', width: 150 },
  { field: 'Reg. Date', headerName: 'Reg. Date', width: 150 },
  { field: 'Action', headerName: 'Action', width: 210,
    renderCell: (params) => {
      return (
        <div className='new-user-column'>
            <span>
              <img src={ArrowRightIcon} alt='btn' />
              {/* <span>Delete</span> */}
            </span>
            <span>
              <img src={SlashIcon} alt='btn' />
              {/* <span>Hide</span> */}
            </span>
            <span>
              <img src={CheckCircle} alt='btn' />
              {/* <span>Edit</span> */}
            </span>
            <Link to='profile'><VisibilityIcon /></Link>
      </div>
      );
    }
  }
];



export default function Table() {

  const [pageSize, setPageSize] = useState(5);
  return (
      <div className='table' >
          
          <TableTops text='Search Users' />
          <DataGrid 
            rows={Rows} 
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
  )
}
