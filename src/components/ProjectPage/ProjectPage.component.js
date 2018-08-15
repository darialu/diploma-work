import React from 'react';
import './ProjectPage.component.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Moment from 'react-moment';
import TableItem from '../TableItem/TableItem.component';
// import 'moment-timezone';
import { getElementById } from '../../utils';

const ProjectPage = function (
  { props,
    projects,
    employees }) {
  let projectID = props.match.params.id;
  let currentProject = getElementById(projects, projectID);
  let employeesID = currentProject.employees;
  let styles = {
    button: {
      marginLeft: 20
    }
  };
  let tableTemplate = employeesID.map((id, index) => {
    let currentEmployee = getElementById(employees, id);

    return <TableItem
      {...props}
      //   link={'/editEmployeeForm'}
      item={currentEmployee}
      key={index}/>;
  }
  );
  let result = 
  <div>
    <div className='infoAboutProject'>
      <h3>{currentProject.name}</h3>
      <p className='creationDate'><Moment format="DD.MM.YYYY">{currentProject.creationDate}</Moment></p>
      <p className='projectDescription'>{'Project description: ' + currentProject.description}</p>
    </div>
    <div className='projectPageButtons'>
      <Button 
        variant="contained" 
        color="primary">
        <Link className='linkComponent' to={`${'/taskManager'}/${projectID}`}>
          Task manager
        </Link>
      </Button>
      <Button 
        style={styles.button}
        variant="contained" 
        color="primary">
        <Link className='linkComponent' to={`${'/editProjectForm'}/${projectID}`}>
          Edit project
        </Link>
      </Button>
    </div>
    {employeesID.length === 0 
      ? <h3>Project team </h3>
      : <div className='projectTeamWrapper'>
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
      </div>
    }
  </div>;

  return result;
};

export default ProjectPage;

