import React, { Component } from 'react';
import './EmployeesList.component.css';

// import EmployeeItem from '../EmployeeItem/EmployeeItem.component';

class EmployeesList extends Component {

  render () {
    let tableTemplate;
    let position = this.props.position;

    function makeColumns (row, rowId) {
     
      let positionId = row.positionId;
      let rowPosition = position[positionId].name;
      
      let result = 
        <tr id={rowId}>
          <td>{row.name + ' ' + row.surName}</td> 
          <td>{rowPosition}</td>
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
          </tr>
          {tableTemplate}
        </table>
      </div>
    );
  }
}

export default EmployeesList;
