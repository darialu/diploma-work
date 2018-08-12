import React from 'react';
import './ProjectsList.component.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TableItem from '../TableItem/TableItem.component';
import 'moment-timezone';

const ProjectsList = function (
  { projects,  
    deleteProject, 
    editProject,
    userID }) {
  let tableTemplate = projects.map((project, index) => {
    return <TableItem
      item={project}
      link={'/editProjectForm'}
      // viewPage={viewEmplPage}
      deleteItem={deleteProject}
      editItem={editProject}
      key={index}/>;
    
  }
  );
  let result = 
  <div>
    <h3>Our projects:</h3>
    <table  className='employeesTable'>
      <tr>
        <th>NAME</th>
        <th>DESCRIPTION</th>
        <th>CREATION DATE</th>
      </tr>
      {tableTemplate}
    </table>
    <Button
      // className='addButt'
      variant="contained"
      color="primary">
      <Link 
        className='linkBut' 
        to="/addProjectForm">
        Add Project
      </Link>
    </Button>
    {projects.length === 0 &&
      <p>nothing found</p>
    }
  </div>;

  return result;
};

export default ProjectsList;

