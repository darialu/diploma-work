import React, { Component } from 'react';
import './EmployeeItem.component.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';

class EmployeeItem extends Component {
  handleClick = (event) => {
    event.preventDefault;
    this.props.viewEmplPage(this.props.id);
  };

  deleteEmployee = (event) => {
    event.preventDefault;
    this.props.deleteEmployee(this.props.id);
  }

  editEmployee = (event) => {
    event.preventDefault;
    this.props.editEmployee(this.props.id);
  }

  render () {
    let employee = this.props.employee;
    let id = this.props.id;
    let name = employee.name;
    let surname = employee.surName;
    let position = employee.position.name;
    let location = employee.location.name;
    let birthday = employee.birthday;

    return (
      <tr id={id}>
        <td>
          <Link 
            to="/employee" 
            onClick={this.handleClick} 
            className='Link'>{name + ' ' + surname}
          </Link>
        </td> 
        <td>{position}</td>
        <td>{location}</td>
        <td><Moment format="DD.MM.YYYY">{birthday}</Moment></td>
        <td>
          <button onClick={this.deleteEmployee}>
            Delete
          </button>
          <button onClick={this.editEmployee}>
            <Link to='/editEmployeeForm'>
              Edit
            </Link>
          </button>
        </td>
      </tr>

    );
  }
}

export default EmployeeItem;
