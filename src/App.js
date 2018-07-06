import './App.css';
import React, { Component } from 'react';
import EmployeesList from './components/EmployeesList/EmployeesList.component';
import EmployeePage from './components/EmployeePage/EmployeePage.component';
import ProjectsList from './components/ProjectsList/ProjectsList.component';
import AddEmplForm from './components/AddEmplForm/AddEmplForm.component';
import EditEmplForm from './components/EditEmplForm/EditEmplForm.component';
import {
  fetchEmployees,
  // fetchPositions,
  fetchProjects,
  changeCarrentId,
  addEmployee,
  deleteEmployee,
  editEmployee
} from './redux/actions';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';
import './App.css';


class App extends Component {

  componentDidMount () {
    // this.props.dispatch(fetchPositions());
    this.props.dispatch(fetchEmployees());
    this.props.dispatch(fetchProjects());
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
    this.props.dispatch(changeCarrentId(id));
  };

  editEmployeeClicked = id => {
    this.props.dispatch(changeCarrentId(id));
  }

  addEmployee = data => {
    this.props.dispatch(addEmployee(data));
  }

  editEmployee = (data) => {
    let currentId = this.props.carrentEmployeeId;
    let id = this.props.employees[currentId].id.toString();

    console.log(id);

    this.props.dispatch(editEmployee(id, data));
  }

  deleteEmployee = id => {

    this.props.dispatch(deleteEmployee(id));
  }

  renderEmployee = () => 
    <div>
      { !this.props.employees.length
        ? <p>loading...</p>
        : <EmployeePage
          id={this.props.carrentEmployeeId}
          employees={this.props.employees}/>
      }
    </div>

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
          id={this.props.carrentEmployeeId}/>
      </div>

  renderPtojectList = () =>
    <div>
      { !this.props.projects.length
        ? <p>loading...</p>
        : <ProjectsList
          projects={this.props.projects}/>
      }
    </div>
  

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
                      <button><Link to="/addEmployeeForm">add employee</Link></button>
                    </div>
                  }
                </div>
                
            
            
            
              </div>
            } />
          <Route path='/employee' render={this.renderEmployee} />
          <Route path='/addEmployeeForm' render={this.renderAddEmplForm} />
          <Route path='/editEmployeeForm' render={this.renderEditEmployeeForm} />
          <Route path='/projects' render={this.renderPtojectList} />
          
        </Switch>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    employees: state.employees,
    projects: state.projects,
    carrentEmployeeId: state.carrentEmployeeId,
    locations: state.locations,
    positions: state.positions
  };
}

export default withRouter(connect(mapStateToProps)(App));

