import './App.css';
import React, { Component } from 'react';
import EmployeesList from './components/EmployeesList/EmployeesList.component';
import EmployeePage from './components/EmployeePage/EmployeePage.component';
import ProjectsList from './components/ProjectsList/ProjectsList.component';
import AddEmplForm from './components/AddEmplForm/AddEmplForm.component';
import EditEmplForm from './components/EditEmplForm/EditEmplForm.component';
import Auth from './components/Auth/Auth.component';
import {
  fetchEmployees,
  fetchPositions,
  fetchProjects,
  fetchTasks,
  fetchSkills,
  fetchLevels,
  currentId,
  addEmployee,
  fetchLocations,
  deleteEmployee,
  editEmployee,
  authUser
} from './redux/actions';
import { employeesUrl } from './urls';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import 'moment-timezone';
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import './App.css';


class App extends Component {

  componentDidMount () {
    
    this.props.dispatch(fetchPositions());
    this.props.dispatch(fetchEmployees());
    this.props.dispatch(fetchProjects());
    this.props.dispatch(fetchLocations());
    this.props.dispatch(fetchSkills());
    this.props.dispatch(fetchLevels());
  }

  // getPosition = id => {
  //   this.props.dispatch(fetchPositions(id));
  // }

  
  fileUploadHendler = () => {
    axios.get('http://localhost:8000/employees')
      .then(({ data }) => {
      
        return console.log(data);
      });
  }

  emplClicked = id => {
    console.log('id for tasks', id);
    this.props.dispatch(fetchTasks(id));
  };

  editEmployeeClicked = id => {
    this.props.dispatch(currentId(id));
  }

  addEmployee = data => {
    
    this.props.dispatch(addEmployee(data));
  }

  editEmployee = (data, id, index) => {
    this.props.dispatch(editEmployee(id, data, index));
  }

  deleteEmployee = id => {

    this.props.dispatch(deleteEmployee(id));
  }

  changeSkill = (indexOfCurrentEmployee, skillName, levelName, emplId) => {
    let currentEmployee = this.props.employees[indexOfCurrentEmployee];
    let skillObj = {};

    skillObj.skill = skillName;
    skillObj.level = levelName;
    if (currentEmployee.skills == undefined){
      currentEmployee.skills = [];
      currentEmployee.skills.push(skillObj);
      // console.log('defined!!', currentEmployee.skills);
    } 
    else {
      currentEmployee.skills.push(skillObj);
    }
    console.log('current empl', currentEmployee );
    this.props.dispatch(editEmployee(emplId, currentEmployee));
  }

  auth = data => {
    this.props.dispatch(authUser(data));
  }

  // renderEmployee = () => 
  //   <div>
  //     { !this.props.employees.length
  //       ? <p>loading...</p>
  //       : !this.props.projects.length 
  //         ? <p>loading...</p>
  //         : <EmployeePage
  //         // id={this.props.params.employeeId}
          
  //           projects={this.props.projects}
  //           employees={this.props.employees}
  //           skills={this.props.skills}
  //           levels={this.props.levels}/>
  //     }
  //   </div>

  renderAddEmplForm = () =>
    <div>
      <AddEmplForm
        locations={this.props.locations}
        positions={this.props.positions}
        employeeFormSubmit={this.addEmployee}/>
    </div>

    renderEditEmployeeForm = () =>
    
      <div>
        <EditEmplForm
          locations={this.props.locations}
          positions={this.props.positions}
          employeeFormSubmit={this.editEmployee}
          employees={this.props.employees}
          id={this.props.currentEmployeeId}/>
      </div>

  renderPtojectList = () =>
    <div>
      { !this.props.projects.length
        ? <p>loading...</p>
        : <ProjectsList
          projects={this.props.projects}/>
      }
    </div>

  renderAuth = () =>
    <Auth 
      auth={this.auth}/>
  

  // eddEmpl = (id, name, avatar, email, birthday, password, surName, positionId, locationId) => {
  //   this.props.dispatch(eddEmployee(id, name, avatar, email, birthday, password, surName, positionId, locationId));
  // }
  
  


  render () {
    return (
      <div className="App">
        <Switch>
          <Route
            exact path='/' render={() =>
              <div>
                <div className="Logo-area">
                  <div className='Dark-area'>
                    <div className='Wellcome'>Welcome to our community!</div>
                  </div>
                </div>

                <div className='EmployeesList-area'>
                  { !this.props.employees.length
                    ? <p>loading...</p>
                    : <div>
                      <p>EMPLOYEES:</p>
                      <EmployeesList
                        employees={this.props.employees} 
                        viewEmplPage={this.emplClicked}
                        deleteEmployee={this.deleteEmployee}
                        editEmployee={this.editEmployeeClicked}/>
                      <Button
                        // className="formButton"
                        className='addButt'
                        variant="contained" 
                        color="primary">
                        <Link 
                          className='linkComponent' 
                          to="/addEmployeeForm">
                        add employee
                        </Link>
                      </Button>
                    </div>
                  }
                  {/* <Button variant="contained" color="primary">
                    Hello World
                  </Button> */}
                </div>
                
            
            
            
              </div>
            } />
          {/* <Route path='/employee/:employeeId' render={this.renderEmployee} /> */}
          <Route 
            path={`${'/employee'}/:id`}
            render={(props) => 
              <div>
                { !this.props.employees.length 
                  ? <p>loading...</p>
                  : !this.props.skills.length 
                    ? <p>loading...</p>
                    : !this.props.levels.length 
                      ? <p>loading...</p>
                      // : !this.props.currentTasks.length 
                      //   ? <p>loading...</p>
                      : !this.props.projects.length 
                        ? <p>loading...</p>
                        : <EmployeePage 
                          {...props}
                          tasks={this.props.currentTasks}
                          projects={this.props.projects}
                          employees={this.props.employees}
                          skills={this.props.skills}
                          levels={this.props.levels}
                          changeSkill={this.changeSkill}/>
                }
              </div>
            }/>
          <Route path='/addEmployeeForm' render={this.renderAddEmplForm} />
          <Route path='/editEmployeeForm' render={this.renderEditEmployeeForm} />
          <Route path='/projects' render={this.renderPtojectList} />
          <Route path='/auth' render={this.renderAuth} />
          
        </Switch>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    token: state.token,
    employees: state.employees,
    employeesSkills: state.employeesSkills,
    projects: state.projects,
    currentTasks: state.currentTasks,
    skills: state.skills,
    levels: state.levels,
    currentEmployeeId: state.currentEmployeeId,
    locations: state.locations,
    positions: state.positions
  };
}

export default withRouter(connect(mapStateToProps)(App));

