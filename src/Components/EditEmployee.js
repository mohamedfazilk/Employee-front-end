import React from 'react'

const EditEmployee = (props) => {
    const [open, setOpen] = useState(false);
    const [employee, setEmployee] = useState({

        email: '',
        firstname: '',
        lastname: '',

    })


    // Open the modal form
    const handleClickOpen = () => {
        setOpen(true)
    }

    // Close the modal form 
    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }

    // Update car and close modal form 
    const handleSave = ()=>{
       
    }

  return (
    <div></div>
  )
}

export default EditEmployee