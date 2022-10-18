import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const AddEmployee = (props) => {
    const [open, setOpen] = useState(false);
    const [employee, setEmployee] = useState({

        email: '',
        firstname: '',
        lastname: '',

    })

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }

    const handleSave = ()=>{
        props.addEmployee(employee);
        handleClose();
    }
    return (
        <div>
            <button onClick={handleClickOpen}>New Employee</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Employee</DialogTitle>
                <DialogContent>
                    <input placeholder='Email' name='email' value={employee.email}
                        onChange={handleChange} />
                    <br />
                    <input placeholder='First Name' name='=firstname' valiue={employee.firstname} />
                    <input placeholder='Last Name' name='=lastname' valiue={employee.lastname} />

                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default AddEmployee