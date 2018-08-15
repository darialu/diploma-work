import React, { Component } from 'react';
import './TabBar.component.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { getElementById } from '../../utils';
import Button from '@material-ui/core/Button';
import history from '../../history';


class TabBar extends Component {

  goToEmpl = () => {
    history.push('/employeesList');
  }

  goToProj = () => {
    history.push('/projects');
  }

  goToEmplPage = () =>{
    history.push('/');
    // window.location.reload();
  }

  exitBut = () => {
    localStorage.setItem('TOKEN', null);
    history.push('/auth');
    // window.location.reload();
  }

  render () {
    const styles = {
      barButtonsArea: {
        color: 'rgba(255, 255, 255, 0.714)',
        width: '60',
        height: '55'
      }
    };

    let id = this.props.userID.toString();
    let employees = this.props.employees;
    let employee = getElementById(employees, id);
    let name = employee.name;
    let surname = employee.surName;

    return (
      <div>
        
        <AppBar position="static">
          <Tabs>
            <Tab onClick={this.goToEmpl} label="Employees" />
            <Tab onClick={this.goToProj}label="Projects" />
          </Tabs>
          <div className='barButtonsArea'>
            <Button 
              style={styles.barButtonsArea} 
              className='userNameBut'
              onClick={this.goToEmplPage}>
              {name + ' ' + surname}
            </Button>
            <Button 
              style={styles.barButtonsArea} 
              className='logOutBut'
              onClick={this.exitBut}>
              Exit
            </Button>
          </div>  
          
        </AppBar>

      </div>
    );
  }
}

export default TabBar;
