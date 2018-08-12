import React from 'react';
import './ProjectPage.component.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TableItem from '../TableItem/TableItem.component';
// import 'moment-timezone';
import { getEmployee } from '../../utils';

const ProjectPage = function (
  { props,
    projects,
    employees,   
    deleteEmployeeFromTeam }) {
  let projectID = props.match.params.id;
  let currentProject = getEmployee(projects, projectID);
  let employeesID = currentProject.employees;
  let tableTemplate = employeesID.map((id, index) => {
    let currentEmployee = getEmployee(employees, id);

    return <TableItem
      {...props}
      //   link={'/editEmployeeForm'}
      item={currentEmployee}
      //   viewPage={viewEmplPage}
      deleteItem={deleteEmployeeFromTeam}
      //   editItem={editEmployee}
      key={index}/>;
    
  }
  );
  let result = 
  <div>
    <h3>Project team:</h3>
    <table  className=''>
      <tr>
        <th>NAME</th>
        <th>POSITION</th>
        <th>LOCATION</th>
        <th>BIRTHDAY</th>
      </tr>
      {tableTemplate}
    </table>
    {projects.length === 0 &&
      <p>nothing found</p>
    }
  </div>;

  return result;
};

export default ProjectPage;

