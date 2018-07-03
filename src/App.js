import './App.css';
import React, { Component } from 'react';
import EmployeesList from './components/EmployeesList/EmployeesList.component';
import EmployeePage from './components/EmployeePage/EmployeePage.component';
import ProjectsList from './components/ProjectsList/ProjectsList.component';
import EddEmplForm from './components/EddEmplForm/EddEmplForm.component';
import {
  fetchEmployees,
  // fetchPositions,
  fetchProjects,
  changeCarrentId,
  eddEmployee
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

  renderEmployee = () => 
    <div>
      { !this.props.employees.length
        ? <p>loading...</p>
        : <EmployeePage
          id={this.props.carrentEmployeeId}
          employees={this.props.employees}/>
      }
    </div>

  renderEddEmplForm = () =>
    <div>
      <EddEmplForm
        val='qwerty'/>
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
                      <EmployeesList
                        employees={this.props.employees} 
                        viewEmplPage={this.emplClicked}
                        onEddEmpl={this.eddEmpl}/>
                      <button><Link to="/eddEmployeeForm">add employee</Link></button>
                    </div>
                  }
                </div>
                
            
            
            
              </div>
            } />
          <Route path='/employee' render={this.renderEmployee} />
          <Route path='/eddEmployeeForm' render={this.renderEddEmplForm} />
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
    carrentEmployeeId: state.carrentEmployeeId
  };
}

export default withRouter(connect(mapStateToProps)(App));

