import './App.css';
import React, { Component } from 'react';
import EmployeesList from './components/EmployeesList/EmployeesList.component';
import EmployeePage from './components/EmployeePage/EmployeePage.component';
import {
  fetchEmployees,
  fetchPositions,
  changeCarrentId,
  eddEmployee
} from './redux/actions';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import './App.css';


class App extends Component {

  componentDidMount () {
    // this.props.dispatch(fetchPositions());
    this.props.dispatch(fetchEmployees());
  }

  // getPosition = id => {
  //   this.props.dispatch(fetchPositions(id));
  // }

  fileSelectedHendler = event => {
    this.setState({
      selecterFile: event.target.files[0]
    });
  }
  
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
  

  eddEmpl = (name) => {
    this.props.dispatch(eddEmployee(name));
  }
  
  


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
                  <EmployeesList
                    employees={this.props.employees} 
                    position={this.props.position}
                    viewEmplPage={this.emplClicked}
                    onEddEmpl={this.eddEmpl}
                  />
                  
                  <input type='file' onChange={this.fileSelectedHendler}  />
                  <button onClick={this.fileUploadHendler}>Upload</button>

                </div>
                
            
            
            
              </div>
            } />
          <Route path='/employee' render={this.renderEmployee} />
          
        </Switch>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    employees: state.employees,
    position: state.position,
    carrentEmployeeId: state.carrentEmployeeId
  };
}

export default withRouter(connect(mapStateToProps)(App));

