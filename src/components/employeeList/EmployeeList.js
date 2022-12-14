import React, { useContext } from 'react'
import AppContext from '../../context/AppContext';
import Employee from './employee/Employee';

function EmployeeList() {
    const { employees, setList, setSelectedEmployee } = useContext(AppContext);
   
    const handleClearAll = () => {
        setList([])
    };

    const handleRemove = (id) => {
        setList([employees.filter(emp => emp.id !== id)])
    };


    return (
        <div>
            <h3>Employee List {employees.length}</h3>
            {
                employees.map((emp, index) => (
                    <Employee
                        setSelectedEmployee={setSelectedEmployee}
                        key={index}
                        employee={emp}
                        handleRemove={handleRemove} />

                ))
            }
            <button onClick={handleClearAll} >Clear All</button>
        </div>
    )
}
export default EmployeeList;