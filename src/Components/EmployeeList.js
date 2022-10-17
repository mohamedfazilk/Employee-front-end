import React, { useState, useEffect } from 'react'
import { SERVER_URL } from '../Constants.js';
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';



const EmployeeList = () => {
    const [employee, setEmployee] = useState([]);
    const [open, setOpen] = useState(false);


    const fetchInfo = async () => {
        try{
            const response = await fetch(SERVER_URL + 'api/v1/employees');
            const employee = await response.json()
            setEmployee(employee);
            console.log(employee);
        }
        catch(error){
            console.log(error);
        }

     
    }


    useEffect(() => {
        fetchInfo();
        
    }, [])


    const onDelClick = (url) => {
        if (window.confirm("Are you sure to delete?"))
        fetch(SERVER_URL + 'api/v1/employees/'+url, { method: 'DELETE'}, )
            .then(res => {
                fetchInfo();
                setOpen(true)
             
            }).catch(err => console.log(err))
        }

    const columns = [
        { field: 'firstName', headerName: 'First Name', width: 200 },
        { field: 'lastName', headerName: 'Last Name', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'id',
            headerName: '',
            sortable: false,
            filterable: false,
            renderCell: row => <button onClick={() => onDelClick(row.id)}>Delete
            </button>
        }
    ];

   






    return (
        <div style={{ height: 500, width: '100%' }}>

            <DataGrid
                rows={employee}
                columns={columns}
                disableSelectionOnClick={true}
                getRowId={row => row.id} />

            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                message="Car deleted"
            />

        </div>
    )
}

export default EmployeeList