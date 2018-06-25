import React, { Component } from 'react';
import './EmployeesList.component.css';
import EmployeeItem from '../EmployeeItem/EmployeeItem.component';


// const EmployeesList = function({ employees }) {
//   let result = <div>
    
//     {employees.map((employee, index) =>
    
//       <EmployeeItem
//         {...employee}
//         id={index}
//         key={index}
//       />
//     )}
   
//     {employees.length === 0 &&
//       <p>nothing found</p>
//     }
//   </div>

//   return result;
// };



class EmployeesList extends Component {

  render() {
    

    let tableTemplate;

    function makeColumns(row) {
      let result = 
        <tr>
          <td>{row.name}</td> 
          <td>{row.surname}</td>
          <td>{row.position}</td>
        </tr>
      return result;
    }


    let employees = this.props.employees
    tableTemplate = employees.map((row, i) => {
      return makeColumns(row)
    })

    return (
      <div className='Table-area'>
        <table>
          <tr>
            <th>NAME</th>
            <th>SURNAME</th>
            <th>POSITION</th>
          </tr>

            {tableTemplate}
        </table>
        </div>
    )
  }
}

export default EmployeesList;
