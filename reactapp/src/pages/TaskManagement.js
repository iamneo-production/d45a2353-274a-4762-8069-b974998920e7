import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PersistentDrawerLeft from '../components/Drawer';
import './All.css';
import Tasks from '../assests/Task.jpg'
import HoverRating from '../components/Rating';
import ListEmployeeComponent from '../components/ListTask';
import TaskService from '../services/TaskService';
import ViewEmployeeComponent from '../components/ViewTask';
import Homes from './View';
export default function Task(){

    const columns = [
        { field: 'id', headerName: 'S.No', wsnoth: 50 },
        { field: 'taskName', headerName: 'Task name', wsnoth: 220 },
        { field: 'startDate', headerName: 'Start Date', wsnoth: 220 },
        { field: 'endDate', headerName: 'End Date', wsnoth: 220 },
        { field: 'status', headerName: 'Status', wsnoth: 220 },
        {field: 'responser',headerName: 'Responser',type:'text',wsnoth: 220}
        // {field:'rating',headerName: 'Review',type:'string',wsnoth:200}

      ];
      
      const rows = [
        { id: 1, taskName: 'House Keeping', startDate: '01-01-2023', endDate:'01-02-2023',status:'Completed',responser: 'Mink'},
        { id: 2, taskName: 'Plumbing ', startDate: '02-01-2023',  endDate:'02-02-2023',status:'Completed', responser: 'Lynn'},
        { id: 3, taskName: 'Electronic Fix ', startDate: '03-01-2023', endDate:'03-02-2023',status:'Completed',responser: 'Lascrea' },
        { id: 4, taskName: 'Carpentry', startDate: '04-01-2023', endDate:'04-02-2023',status:'Completed',responser: 'Jerusha' },
        { id: 5, taskName: 'Lawn Works', startDate: '05-01-2023', endDate:'05-02-2023',status:'Aborted',responser: 'Angel' },
        { id: 6, taskName: 'Custodian', startDate: '06-01-2023', endDate:'06-02-2023',status:'Completed',responser:'Anu'},
        { id: 7, taskName: 'Nanny', startDate: '07-01-2023', endDate:'07-02-2023',status:'Completed',responser: 'Varshini' },
        { id: 8, taskName: 'Decorator', startDate: '08-01-2023', endDate:'08-02-2023',status:'Completed',responser: 'Abinaya'},
        { id: 9, taskName: 'Cook', startDate: '09-01-2023', endDate:'09-02-2023',status:'Completed',responser: 'Monky' },
      ];
    return(
      <>
      <PersistentDrawerLeft/>
      <Homes/>
          {/* <TaskService/> */}
          {/* <ListEmployeeComponent/> */}
          {/* <ViewEmployeeComponent /> */}
          <div id="trail">
            <img src={Tasks} alt="see" width={'1250'} height={'200'}></img>
          </div>
        <div style={{ height: 400, wsnoth: '100%',color:'15317E'}}>
            <DataGrid backgroundColor='secondary' getDetailPanelContent={2}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
            
          },
        }}
        sx={{
          boxShadow: 2,
          border: 2,
          backgroundColor: '15317E',
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        />
        </div>
        </>
    )
}