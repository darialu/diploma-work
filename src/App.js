import './App.css';
import React, { Component } from 'react';
import EmployeesList from './components/EmployeesList/EmployeesList.component';
import {
  fetchEmployees,
  fetchPositions
} from './redux/actions';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import axios from 'axios';
import './App.css';


class App extends Component {

  componentDidMount () {
    console.log('mounted');
    console.info('fetchEmployees', fetchEmployees);
    this.props.dispatch(fetchEmployees());
    console.log(this.props.positions);
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
    axios.get('http://localhost:8000/positions')
      .then(({ data }) => {
      
        return console.log(data);
      });
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
                    position={this.props.position}/>
                  <input type='file' onChange={this.fileSelectedHendler}  />
                  <button onClick={this.fileUploadHendler}>Upload</button>

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

function mapStateToProps (state) {
  return {
    employees: state.employees,
    position: state.position
  };
}

export default withRouter(connect(mapStateToProps)(App));

