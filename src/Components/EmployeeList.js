import React, { useState, useEffect } from 'react'
import { SERVER_URL } from '../Constants.js';
import { DataGrid } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import AddEmployee from './AddEmployee.js';



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
            .then(response => {
               if(response.ok){
                fetchInfo();
                setOpen(true)
               }

               else{
                alert("Something went wrong")
               }
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

    const addEmployee =(employee)=>{
        fetch(SERVER_URL + 'api/v1/employees',
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(employee)
        })
        .then(response=>{
            if(response.ok){
                fetchInfo();
            }
            else{
                alert('Something went wrong!');

            }
        })
        .catch(err => console.error(err))

    }

   






    return (
        <React.Fragment>
            <AddEmployee addEmployee={addEmployee}/>
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
        </React.Fragment>
    )
}

export default EmployeeList