import React, { Component } from 'react';
import './EmployeesList.component.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import EmployeeItem from '../EmployeeItem/EmployeeItem.component';
import TabBar from '../TabBar/TabBar.component';

const EmployeesList = function (
  { employees, 
    viewEmplPage, 
    deleteEmployee, 
    editEmployee,
    userID }) {
  let tableTemplate = employees.map((employee, index) => {
    return <EmployeeItem
      employee={employee}
      viewEmplPage={viewEmplPage}
      deleteEmployee={deleteEmployee}
      editEmployee={editEmployee}
      id={index}
      key={index}/>;
    
  }
  );
  let result = 
  <div>
    {/* <TabBar
      userID={userID}
      employees={employees}/> */}
    <h3>Our team:</h3>
    <table  className='employeesTable'>
      <tr>
        <th>NAME</th>
        <th>POSITION</th>
        <th>LOCATION</th>
        <th>BIRTHDAY</th>
      </tr>
      {tableTemplate}
    </table>
    <Button
      // className='addButt'
      variant="contained"
      color="primary">
      <Link 
        className='linkBut' 
        to="/addEmployeeForm">
        Edd employee
      </Link>
    </Button>
    {employees.length === 0 &&
      <p>nothing found</p>
    }
  </div>;

  return result;
};

export default EmployeesList;
