import React, { Component } from 'react';
import './EmployeeItem.component.css';
import { Link } from 'react-router-dom';

class EmployeeItem extends Component {
  handleClick = (event) => {
    event.preventDefault;
    console.log('i am working');
    this.props.viewEmplPage(this.props.id);
  };

  render () {
    let employee = this.props.employee;
    let id = this.props.id;
    let name = employee.name;
    let surname = employee.surName;
    let position = employee.position.name;
    let location = employee.location.name;

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
      </tr>

    );
  }
}

export default EmployeeItem;
