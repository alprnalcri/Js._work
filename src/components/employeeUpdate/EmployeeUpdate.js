import React, { useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext'


export default function EmployeeUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id)
  const {
    employees,
    setList,
    selectedEmployee,
    setSelectedEmployee
  } = useContext(AppContext);

  const handleChange = (e) => {
    setSelectedEmployee({
      ...selectedEmployee,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([
      ...employees.filter(emp => emp.id !== selectedEmployee.id),
      selectedEmployee
    ])
    navigate(`/employees`);
  }

  return (
    <div>
      <h3>Employee Update</h3>
      <p>
        {JSON.stringify(selectedEmployee)}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          id="firstName"
          name='firstName'
          onChange={handleChange}
          value={selectedEmployee?.firstName}
          type="text"
          placeholder="First Name"
        />
        <input
          id="lastName"
          name='lastName'
          onChange={handleChange}
          value={selectedEmployee?.lastName}
          type="text"
          placeholder="Last Name"
        />
        <button type='submit' >Update</button>
      </form>

    </div>
  )
}
