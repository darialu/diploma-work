import React, { Component } from 'react';
import './EmployeePage.component.css';
import { Link } from 'react-router-dom';

class EmployeePage extends Component {

  render () {
    
    let employees = this.props.employees;
    let id = this.props.id;
    let name = employees[id].name;
    let surname = employees[id].surName;
    let position = employees[id].position.name;
    let birthday = employees[id].birthday;

    return (
      <div className='EmployeePageArea'>
        <div className='avatar'></div>
        <div className='aboutAmployee'>
          <p className='employeeName'>{name + ' ' + surname}</p>
          <p className='employeeName'>{position}</p>
          <p>{birthday}</p>
        </div>
      </div>
    );
  }
}

export default EmployeePage;
