import React, { Component } from 'react';
import './EmployeeItem.component.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// import { employeesUrl } from '../../urls';
import 'moment-timezone';

class EmployeeItem extends Component {
  handleClick = (event) => {
    event.preventDefault;
    this.props.viewEmplPage(this.props.employee.id);
  };

  deleteEmployee = (event) => {
    event.preventDefault;
    this.props.deleteEmployee(this.props.employee.id);
  }

  editEmployee = (event) => {
    event.preventDefault;
    this.props.editEmployee(this.props.employee.id);
  }

  render () {
    const styles = {
      button: {
        
      },
      extendedIcon: {
        
      },
    };

    let employee = this.props.employee;
    // let id = this.props.id;
    let id = employee.id;
    let name = employee.name;
    let surname = employee.surName;
    let position = employee.position.name;
    let location = employee.location.name;
    let birthday = employee.birthday;
    

    return (
      <tr>
        <td key={id}>
          <Link 
            to={`${'/employee'}/${id}`} 
            onClick={this.handleClick} 
            className='Link'>
            {name + ' ' + surname}
          </Link>
        </td> 
        <td>{position}</td>
        <td>{location}</td>
        <td><Moment format="DD.MM.YYYY">{birthday}</Moment></td>
        <td>
          <Button 
            variant="fab" 
            mini
            // disabled aria-label="Delete" 
            onClick={this.deleteEmployee}
            className={styles.button}>
            <DeleteIcon />
          </Button>
        </td>
        <td>
          <Button 
            variant="fab" 
            mini
            color="secondary" 
            aria-label="Edit" 
            className={styles.button} 
            onClick={this.editEmployee}>
            <Link className='linkComponent' to={`${'/editEmployeeForm'}/${id}`}>
              <EditIcon />
            </Link>
          </Button>
        </td>
      </tr>

    );
  }
}

export default EmployeeItem;
