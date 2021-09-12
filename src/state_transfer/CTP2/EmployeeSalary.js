import React from 'react'

function EmployeeSalary({onChangeSalary, salary}) {
    const salaryHandle=(e)=>{
        onChangeSalary(e);
    }
    return (
        <div>
            <h1>Welcome to Employee Salary</h1>
            <label htmlFor="salay">Employee Salary :
            <input type="text" name="Salary" onChange={salaryHandle} value={salary}/>
            </label>
        </div>
    )
}

export default EmployeeSalary
