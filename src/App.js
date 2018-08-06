import './App.css';
import React, { Component } from 'react';
import EmployeesList from './components/EmployeesList/EmployeesList.component';
import EmployeePage from './components/EmployeePage/EmployeePage.component';
import ProjectsList from './components/ProjectsList/ProjectsList.component';
import AddEmplForm from './components/AddEmplForm/AddEmplForm.component';
import EditEmplForm from './components/EditEmplForm/EditEmplForm.component';
import EmployeeForm from './components/EmployeeForm/EmployeeForm.component';
import TabBar from './components/TabBar/TabBar.component';
import Auth from './components/Auth/Auth.component';
import {
  setToken,
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
import { getEmployee } from './utils';
import './App.css';


class App extends Component {

  componentDidMount () {
    const token = localStorage.getItem('TOKEN');

    if (!token || token === 'null') {
      // redirect
      this.props.history.push('/auth');
      return;
    }

    this.props.dispatch(setToken(token));
    axios.defaults.headers.common['authtoken'] = token;
    this.props.dispatch(fetchPositions());
    this.props.dispatch(fetchEmployees());
    this.props.dispatch(fetchProjects());
    this.props.dispatch(fetchLocations());
    this.props.dispatch(fetchSkills());
    this.props.dispatch(fetchLevels());
  }

  emplClicked = id => {
    this.props.dispatch(fetchTasks(id));
  };

  editEmployeeClicked = id => {
    this.props.dispatch(currentId(id));
  }

  addEmployee = data => {
    
    this.props.dispatch(addEmployee(data));
  }

  editEmployee = (data, id) => {
    this.props.dispatch(editEmployee(id, data));
  }

  deleteEmployee = id => {

    this.props.dispatch(deleteEmployee(id));
  }

  changeSkill = (skillName, levelName, emplId) => {
    let currentEmployee = getEmployee(this.props.employees, emplId);
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
    console.log('add skill', currentEmployee );
    this.props.dispatch(editEmployee(emplId, currentEmployee));
  }

  auth = data => {
    this.props.dispatch(authUser(data));
  }

  renderEmployeesList = () =>
    <div>
      { !this.props.projects.length
        ? <p>loading...</p>
        : 
        <EmployeesList
          employees={this.props.employees} 
          viewEmplPage={this.emplClicked}
          deleteEmployee={this.deleteEmployee}
          editEmployee={this.editEmployeeClicked}
          buttonLabel={'Edd employee'}
          userID={this.props.authId}/>
      }
    </div>

  renderAddEmplForm = () =>
    <div>
      <AddEmplForm
        employees={this.props.employees}
        locations={this.props.locations}
        positions={this.props.positions}
        employeeFormSubmit={this.addEmployee}/>
    </div>

    renderEditEmployeeForm = () =>
    
      <div>
        {!this.props.employees.length
          ? <p>loading...</p>

          : <EditEmplForm
            locations={this.props.locations}
            positions={this.props.positions}
            employeeFormSubmit={this.editEmployee}
            employees={this.props.employees}
            id={this.props.currentEmployeeId}/>
        }
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
  

  render () {
    const styles = {
      addButton: {
        margin: 20,
      }
    };
    
    return (
      <div className="App">
        <Switch>
          <Route
            exact path='/' render={() =>
              <div>
                { !this.props.employees.length ||
                  !this.props.skills.length ||
                  !this.props.levels.length ||
                  //!this.props.currentTasks.length 
                  !this.props.projects.length 
                  ? <p>loading...</p>
                  : <div>
                    <EmployeePage 
                      userID={this.props.authId}
                      tasks={this.props.currentTasks}
                      projects={this.props.projects}
                      employees={this.props.employees}
                      skills={this.props.skills}
                      levels={this.props.levels}
                      changeSkill={this.changeSkill}/>
                  </div>
                }
              </div>    
            } />
          {/* <Route path='/employee/:employeeId' render={this.renderEmployee} /> */}
          <Route 
            path={`${'/employee'}/:id`}
            render={(props) => 
              <div>
                { !this.props.employees.length ||
                  !this.props.skills.length ||
                  !this.props.levels.length ||
                  //!this.props.currentTasks.length 
                  !this.props.projects.length 
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
          <Route path='/employeesList' render={this.renderEmployeesList} />
          <Route path='/addEmployeeForm' render={this.renderAddEmplForm} />
          <Route 
            path={`${'/editEmployeeForm'}/:id`}
            render={(props) =>
              <div>
                {!this.props.employees.length
                  ? <p>loading...</p>
                  : <EditEmplForm
                    props={props}
                    locations={this.props.locations}
                    positions={this.props.positions}
                    employeeFormSubmit={this.editEmployee}
                    employees={this.props.employees}/>
                } 
              </div>
            }/>
              
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
    authId: state.authId,
    locations: state.locations,
    positions: state.positions
  };
}

export default withRouter(connect(mapStateToProps)(App));

