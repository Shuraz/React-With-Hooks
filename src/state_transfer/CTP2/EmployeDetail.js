import React, { useState } from "react";
import EmployeeSalary from "./EmployeeSalary";

function EmployeDetail() {
  const [stateEmp, setEmp] = useState({
    Id: "",
    Name: "",
    Salary: "",
    Location: "",
  });

  const employeeDetailHandle=(e)=>{
    setEmp({...stateEmp,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <h1>Employee Details</h1>
      <label>
        Employee ID :
        <input
          type="number"
          name="Id"
          value={stateEmp.Id}
            onChange={employeeDetailHandle}
        ></input>
      </label> <br />
      <label>
        Employee Name :
        <input
          type="text"
          name="Name"
          value={stateEmp.Name}
          onChange={employeeDetailHandle}
        ></input> <br />
      </label>
      <label>
        Employee Salary :
        <input
          type="text"
          name="Salary"
          value={stateEmp.Salary}
          onChange={employeeDetailHandle}
        ></input> <br />
      </label>
      <label>
        Employee Location :
        <input
          type="text"
          name="Location"
          value={stateEmp.Location}
          onChange={employeeDetailHandle}
        ></input><br />
      </label>
        <p>`Employee Name is: {stateEmp.Name}, Employee Id is : {stateEmp.Id}
            Employee Location is : {stateEmp.Location}, Employee Salary is : {stateEmp.Salary}`
            </p>

            <EmployeeSalary salary={stateEmp.Salary} onChangeSalary={employeeDetailHandle}/>
    </div>
  );
}

export default EmployeDetail;
