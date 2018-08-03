import React, { Component } from 'react';
import './TabBar.component.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { getEmployee } from '../../utils';
import Typography from '@material-ui/core/Typography';

class TabBar extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render () {
    const styles = {
      tab:{
        // color: 'red'
        
      }

    };

    let id = this.props.userID.toString();
    let employees = this.props.employees;
    let employee = getEmployee(employees, id);
    let name = employee.name;
    let surname = employee.surName;

    return (
      <div>
        <AppBar position="static" style={styles.appBar}>
          <Tabs style={styles.tabs} onChange={this.handleChange}>
            <Tab style={styles.tab} label="Employees" />
            <Tab style={styles.tab} label="Projects" />
          </Tabs>
          <div className='barButtonsArea'>
            <button className='userNameBut'>{name + ' ' + surname}</button>
            <button className='logOutBut'>Exit</button>
          </div>  
          
        </AppBar>
        {/* {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>} */}

      </div>
    );
  }
}

export default TabBar;
