import React, { Component } from 'react';
import './EmployeesList.component.css';
import { Link } from 'react-router-dom';
// import EmployeeItem from '../EmployeeItem/EmployeeItem.component';

class EmployeesList extends Component {

  render () {
    let tableTemplate;
    // let position = this.props.position;

    const handleClick = id => {
      this.props.viewEmplPage(id);
    };

    function makeColumns (row, rowId) {
     
      // let positionId = row.positionId;
      // let rowPosition = position[positionId].name;
      
      let result = 
        <tr id={rowId}>
          <td><Link to="/employee" onClick={handleClick(rowId)} className='Link'>{row.name + ' ' + row.surName}</Link></td> 
          <td>{row.position.name}</td>
          <td>{row.location.name}</td>
        </tr>;

      return result;
    }

    let employees = this.props.employees;

    tableTemplate = employees.map((row, i) => {
      return makeColumns(row, i);
    }); 

    return (
      <div className='Table-area'>
        <table>
          <tr>
            <th>NAME</th>
            <th>POSITION</th>
            <th>LOCATION</th>
          </tr>
          {tableTemplate}
        </table>
        {/* <button onClick={this.props.onEddEmpl('vasya')}>add</button> */}
      </div>
    );
  }
}

export default EmployeesList;
