import React, { useState, useEffect } from 'react'


const url = 'http://localhost:8080/api/v1/employees'

const EmployeeList = () => {
    const [employee, setEmployee] = useState([]);

    const fetchInfo = async () => {

        const response = await fetch(url);
        const employee = await response.json()
        setEmployee(employee);
        console.log(employee);


    }

    useEffect(() => {
        fetchInfo();
    }, [])

    return (
        <div>
            <table>
                <tbody>
                    {
                        employee.map((emp, index) => {
                            return (
                               <tr>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                               </tr>


                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList