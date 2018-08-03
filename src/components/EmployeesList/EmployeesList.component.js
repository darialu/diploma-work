import React, { Component } from 'react';
import './EmployeesList.component.css';
import { Link } from 'react-router-dom';
import EmployeeItem from '../EmployeeItem/EmployeeItem.component';

const EmployeesList = function (
  { employees, 
    viewEmplPage, 
    deleteEmployee, 
    editEmployee }) {
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
  let result = <div className='Table-area'>
    <table>
      <tr>
        <th>NAME</th>
        <th>POSITION</th>
        <th>LOCATION</th>
        <th>BIRTHDAY</th>
      </tr>
      {tableTemplate}
    </table>
    {/* {employees.map((employee, index) => {
      <EmployeeItem
        employee={employee}
        id={index}
        key={index}/>;
      
    }
    )} */}

    {employees.length === 0 &&
      <p>nothing found</p>
    }

  </div>;

  return result;
};

export default EmployeesList;
