import React, { Component } from 'react';
import './EmployeePage.component.css';
import Moment from 'react-moment';
import 'moment-timezone';
import { Link } from 'react-router-dom';

class EmployeePage extends Component {

  render () {
    
    let employees = this.props.employees;
    let id = this.props.id;
    let name = employees[id].name;
    let surname = employees[id].surName;
    let position = employees[id].position.name;
    let dateToFormat = employees[id].birthday;
    let location = employees[id].location.name;

    return (
      <div className='EmployeePageArea'>
        <div className='Header'>
          <div className='toEmplList'>
            <Link to='/' className='Link'>Employees</Link>
          </div>
          <div className='toProjList'>
            <Link to='/projects' className='Link'>Projects</Link>
          </div>
        </div>
        <div className='Content'>
          <div>
            <div className='avatar'></div>
            <input type='file'/>
            <button>Upload</button>
          </div>
          <div className='aboutAmployee'>
            <p className='employeeName'>{name + ' ' + surname}</p>
            <p className='employeePosition'>{position}</p>
            <p>Birthday: <Moment format="DD.MM.YYYY">{dateToFormat}</Moment></p>
            <p>{'Location: ' + location}</p>         
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeePage;
