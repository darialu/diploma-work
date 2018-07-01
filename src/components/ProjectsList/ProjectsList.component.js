import React, { Component } from 'react';
import './ProjectsList.component.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
// import EmployeeItem from '../EmployeeItem/EmployeeItem.component';

class ProjectsList extends Component {

  render () {
    let tableTemplate;

    function makeColumns (row, rowId) {
      let dateToFormat = row.creationDate;
      let result = 
        <tr id={rowId}>
          {/* <td><Link to="/employee" onClick={handleClick(rowId)} className='Link'>{row.name + ' ' + row.surName}</Link></td>  */}
          <td>{row.name}</td>
          <td>{row.description}</td>
          <td><Moment format="DD.MM.YYYY">{dateToFormat}</Moment></td>
        </tr>;

      return result;
    }

    let projects = this.props.projects;

    tableTemplate = projects.map((row, i) => {
      return makeColumns(row, i);
    }); 

    return (
      <div className='Table-area'>
        <table>
          <tr>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>CREATION DATE</th>
          </tr>
          {tableTemplate}
        </table>
        {/* <button onClick={this.props.onEddEmpl('vasya')}>add</button> */}
      </div>
    );
  }
}

export default ProjectsList;
