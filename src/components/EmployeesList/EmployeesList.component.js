import React, { Component } from 'react';
import './EmployeesList.component.css';
import { Link } from 'react-router-dom';
import EmployeeItem from '../EmployeeItem/EmployeeItem.component';


// class EmployeesList extends Component {


//   render () {
//     let tableTemplate;

// const handleClick = (event, id) => {
//   event.preventDefault;
//   console.log('i am working');
//   this.props.viewEmplPage(id);
// };

//     function makeColumns (row, rowId) {
    
//       let result = 
//         <tr id={rowId}>
//           <td><Link to="/employee" onClick={handleClick(1)} className='Link'>{row.name + ' ' + row.surName}</Link></td> 
//           <td>{row.position.name}</td>
//           <td>{row.location.name}</td>
//         </tr>;

//       return result;
//     }

//     let employees = this.props.employees;

//     tableTemplate = employees.map((row, index) => {
//       return makeColumns(row, index);
//     }); 

//     return (
//       <div className='Table-area'>
//         <table>
//           <tr>
//             <th>NAME</th>
//             <th>POSITION</th>
//             <th>LOCATION</th>
//           </tr>
//           {tableTemplate}
//         </table>
//       </div>
//     );
//   }
// }

// export default EmployeesList;

const EmployeesList = function (
  { employees, 
    viewEmplPage, 
    deleteEmployee, 
    editEmployee }) {
  let tableTemplate = employees.map((employee, index) => {
    return <EmployeeItem
      employee={employee}
      viewEmplPage={viewEmplPage}
      deleteEmployee={deleteEmployee}
      editEmployee={editEmployee}
      id={index}
      key={index}/>;
    
  }
  );
  let result = <div className='Table-area'>
    <table>
      <tr>
        <th>NAME</th>
        <th>POSITION</th>
        <th>LOCATION</th>
        <th>BIRTHDAY</th>
      </tr>
      {tableTemplate}
    </table>
    {/* {employees.map((employee, index) => {
      <EmployeeItem
        employee={employee}
        id={index}
        key={index}/>;
      
    }
    )} */}



    {employees.length === 0 &&
      <p>nothing found</p>
    }

  </div>;

  return result;
};

export default EmployeesList;
