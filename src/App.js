import './App.css';
import React, { Component } from 'react';
import EmployeesList from './components/EmployeesList/EmployeesList.component';
import EmployeePage from './components/EmployeePage/EmployeePage.container';
import AddEmplForm from './components/AddEmplForm/AddEmplForm.component';
import EditEmplForm from './components/EditEmplForm/EditEmplForm.component';
// import EmployeeForm from './components/EmployeeForm/EmployeeForm.component';
import ProjectPage from './components/ProjectPage/ProjectPage.component';
import ProjectsList from './components/ProjectsList/ProjectsList.component';
import AddProjectForm from './components/AddProjectForm/AddProjectForm.component';
import EditProjectForm from './components/EditProjectForm/EditProjectForm.component';
import TabBar from './components/TabBar/TabBar.component';
import TaskManager from './components/TaskManager/TaskManager.container';
import AddTaskForm from './components/AddTaskForm/AddTaskForm.component';
import Auth from './components/Auth/Auth.container';
import {
  setToken,
  fetchTasks,
  fetchServerData,
  addTask,
  deleteProject,
  addEmployee,
  deleteEmployee,
  editEmployee,
  addProject,
  editProject,
  authUser
} from './redux/actions';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
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
    // axios.defaults.headers.common['authtoken'] = token; // move to setToken
    this.props.dispatch(fetchServerData());
  }

  emplClicked = id => {
    this.props.dispatch(fetchTasks(id));
  };

  addEmployee = data => {
    this.props.dispatch(addEmployee(data));
  }

  editEmployee = (data, id) => {
    this.props.dispatch(editEmployee(id, data));
  }

  deleteEmployee = id => {
    this.props.dispatch(deleteEmployee(id));
  }

  deleteEmployeeFromTeam = () => {
    console.log('delete from team');
  }

  addProject = data => {
    // console.log('data add project', data);
    this.props.dispatch(addProject(data));
  }

  deleteProject = id => {
    // console.log('id for del project', id);
    this.props.dispatch(deleteProject(id));

  }

  editProject = (data, id) => {
    // console.log('id and data for edit project', id, data);
    this.props.dispatch(editProject(id, data));
  }

  addTask = data => {
    // console.log('data add project', data);
    this.props.dispatch(addTask(data));
  }

  changeSkill = (skillName, levelName, emplId) => {
    let currentEmployee = getEmployee(this.props.employees, emplId);
    let skillObj = {};

    skillObj.skill = skillName;
    skillObj.level = levelName;
    if (currentEmployee.skills == undefined){
      currentEmployee.skills = [];
      currentEmployee.skills.push(skillObj);
    } 
    else {
      currentEmployee.skills.push(skillObj);
    }
    // console.log('add skill', currentEmployee );
    this.props.dispatch(editEmployee(emplId, currentEmployee));
  }

  deleteSkill = (currentEmployeeSkills, id) => {
    let currentEmployee = getEmployee(this.props.employees, id);

    currentEmployee.skills = currentEmployeeSkills;
    this.props.dispatch(editEmployee(id, currentEmployee));
    // console.log ('del empl skills', currentEmployee.skills);
  }

  auth = data => {
    return this.props.dispatch(authUser(data));
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
          projects={this.props.projects}
          deleteProject={this.deleteProject}
          editProject={this.editProject}/>
      }
    </div>

  renderAddProjectForm = () =>
    <div>
      <AddProjectForm
        projectFormSubmit={this.addProject}
        employees={this.props.employees}/>
    </div>

  renderAuth = () =>
    <Auth 
      auth={this.auth}/>
  

  render () {
    
    return (
      <div className="App">
        <div className='Logo-area'>
          <div className='pageContent'>
            <div>
              { !this.props.employees.length ||
                  !this.props.skills.length ||
                  !this.props.levels.length ||
                  localStorage.getItem('TOKEN') === 'null' ||
                  !this.props.projects.length 
                ? <div></div>
                :  <TabBar
                  userID={localStorage.getItem('ID')}
                  employees={this.props.employees}/>}
            </div>
            <Switch>
              <Route
                exact path='/' render={() =>
                  <div>
                    { !this.props.employees.length ||
                  !this.props.skills.length ||
                  !this.props.levels.length ||
                  // this.props.authId === '10' ||
                  //!this.props.currentTasks.length 
                  !this.props.projects.length 
                      ? <p>loading...</p>
                      : <div>
                        <EmployeePage 
                          userID={localStorage.getItem('ID')}
                          delSkill={this.deleteSkill}
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
                        changeSkill={this.changeSkill}
                        delSkill={this.deleteSkill}/>
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
              <Route path='/addProjectForm' render={this.renderAddProjectForm} />
              <Route 
                path={`${'/editProjectForm'}/:id`}
                render={(props) =>
                  <div>
                    {!this.props.projects.length
                      ? <p>loading...</p>
                      : <EditProjectForm
                        employees={this.props.employees}
                        props={props}
                        projectFormSubmit={this.editProject}
                        projects={this.props.projects}/>
                    } 
                  </div>
                }/>
              <Route 
                path={`${'/project'}/:id`}
                render={(props) => 
                  <div>
                    { !this.props.projects.length ||
                      !this.props.employees.length
                      ? <p>loading...</p>
                      : <ProjectPage 
                        props={props}
                        projects={this.props.projects}
                        employees={this.props.employees}/>
                    }
                  </div>
                }/>
              <Route 
                path={`${'/taskManager'}/:id`}
                render={(props) => 
                  <div>
                    { !this.props.projects.length ||
                      !this.props.employees.length 
                      // !this.props.currentTasks.length
                      ? <p>loading...</p>
                      : <TaskManager 
                        {...props}
                        tasks={this.props.currentTasks}
                        projects={this.props.projects}
                        employees={this.props.employees}/>
                    }
                  </div>
                }/>
              <Route 
                path={`${'/addTask'}/:id`}
                render={(props) => 
                  <div>
                    { !this.props.projects.length ||
                      !this.props.employees.length 
                      // !this.props.currentTasks.length
                      ? <p>loading...</p>
                      : <AddTaskForm 
                        props={props}
                        projectFormSubmit={this.addTask}
                        projects={this.props.projects}
                        employees={this.props.employees}/>
                    }
                  </div>
                }/>
              <Route path='/auth' render={this.renderAuth} />
          
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    // token: state.token,
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

