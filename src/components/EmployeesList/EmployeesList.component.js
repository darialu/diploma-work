import React, { Component } from 'react';
import './EmployeesList.component.css';
import { Link } from 'react-router-dom';
// import EmployeeItem from '../EmployeeItem/EmployeeItem.component';

class EmployeesList extends Component {
  edd = event => {
    event.preventDefault();

    let newEmpl = {};

    let id = 0;
    let name = 'Andy';
    let avatar = '';
    let email = 'andy_wallcroft@mail.uk';
    let birthday = '1995-04-23T18:25:43.511Z';
    let password = '12345';
    let surName = 'Wallcroft';
    let positionId = 0;
  

    return (this.props.onEddEmpl(id, name, avatar, email, birthday, password, surName, positionId));
  };

  render () {
    let tableTemplate;
    // let position = this.props.position;

    const handleClick = (event, id) => {
      event.preventDefault;
      this.props.viewEmplPage(id);
    };

    function makeColumns (row, rowId) {
     
      // let positionId = row.positionId;
      // let rowPosition = position[positionId].name;
      
      let result = 
        <tr id={rowId}>
          <td><Link to="/employee" onClick={handleClick(rowId)} className='Link'>{row.name + ' ' + row.surName}</Link></td> 
          <td>{row.position.name}</td>
          {/* <td>{row.location.name}</td> */}
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
        <button onClick={this.edd}>add</button>
      </div>
    );
  }
}

export default EmployeesList;
