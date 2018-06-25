import './App.css';
import React, { Component } from 'react';
import EmployeesList from './components/EmployeesList/EmployeesList.component'
import { connect } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';


class App extends Component {


  
 


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() =>
          <div>
            <div className="Logo-area">
              <div className='Dark-area'>
                <div className='Wellcome'>Welcome to our community!</div>
              </div>
            </div>

            <div className='EmployeesList-area'>
              <EmployeesList employees={this.props.employees} 
              />
            </div>
            
            
          </div>
          } />
          <Route path='/add' render={this.renderContactForm} />
          
          <Route path='/edit' render={this.renderContactEditForm} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    employees: state.employees
  }
};

export default withRouter(connect(mapStateToProps)(App));

