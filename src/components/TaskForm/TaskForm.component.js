import React, { Component } from 'react';
import './TaskForm.component.css';
import { Link } from 'react-router-dom';
import { Form, Text, TextArea, Select } from 'react-form';
import 'moment-timezone';
import Button from '@material-ui/core/Button';
import { getElementById } from '../../utils';
import history from '../../history';

class TaskForm extends Component {
  state = {
    projectTeam: []
  }

    onSubmit = values => { 
      values.projectId = this.props.match.params.id;
      values.status = 'todos';
      this.props.projectFormSubmit(values, this.props.match.params.id);
      // .then(() => {
      //   history.push(`${'/taskManager'}/${this.props.match.params.id}`);
      // });
    };
  
    render () {
      const styles = {
        button: {
          width: '60',
          height: '55',
          margin: 20
        },
        addButton: {
          marginLeft: 15
        }
      };

      let project = getElementById(this.props.projects, this.props.match.params.id);
      let team = project.employees;
      let employees = this.props.employees;
      let projectTeam = [];

      for (let i = 0; i < team.length; i++){
        let employee = getElementById(employees, team[i]);

        projectTeam.push(employee);
        console.log('projectTeam', projectTeam);
      }
      
      
      let employeesOptions = projectTeam.map((employee) => {
        let item = {
          label: '',
          value: '',
        };
    
        item.label = employee.name + ' ' + employee.surName;
        item.value = employee.id;
        return item;
      });
  
      return (
        <div>
          <div className='EddEmplForm' >
            <Form onSubmit={submittedValues => this.onSubmit(submittedValues)}>
              { formApi => (
                <form onSubmit={formApi.submitForm}>
                  <ul>
                    <li>
                      <h3>Fill out the form</h3>
                    </li>
                    <li>
                      <label for="name">Task name:</label>
                      <Text 
                        field="name" 
                        required
                        defaultValue={this.props.defaultName} 
                        placeholder="New task"/>
                    </li>
                    <li>
                      <label for="description">Description:</label>
                      <TextArea 
                        className='projectTextArea'
                        field="description" 
                        defaultValue={this.props.defaultDescription} 
                        placeholder='Few words about task...'
                        required/>
                    </li>
                    <li>
                      <label for="employeeId">Employee:</label>
                      <Select 
                        defaultValue={this.props.userId}
                        field="employeeId" 
                        id="select-employee" 
                        options={employeesOptions}  
                        className='selectTeam'/>
                    </li>
                    
                    <li>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        style={styles.button}
                        type="submit">
                          SUBMIT
                      </Button>
                      <Button 
                        style={styles.button}
                        variant="contained" 
                        color="primary">
                        <Link to={`${'/taskManager'}/${this.props.match.params.id}`} className='linkComponent'>
                        CANCEL
                        </Link>
                      </Button>
                    </li>
                  </ul>
                </form>
              )}
            </Form>
          </div>
        </div>
      );
    }
}

export default TaskForm;
