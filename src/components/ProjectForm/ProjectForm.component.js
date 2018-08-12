import React, { Component } from 'react';
import './ProjectForm.component.css';
import { Link } from 'react-router-dom';
import { Form, Text, TextArea, Select } from 'react-form';
import 'moment-timezone';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import AddIcon from '@material-ui/icons/Add';
import history from '../../history';

class ProjectForm extends Component {
    onSubmit = values => { 
      this.props.projectFormSubmit(values, this.props.id);
      history.push('/projects');
    };

    addEmployeeToTeam = (empl, e) => {
      // event.preventDefault;
      console.log('add to team', empl);
    }
  
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

      let employees = this.props.employees;
    
      let employeesOptions = employees.map((employee) => {
        let item = {
          label: '',
          value: '',
        };
    
        item.label = employee.name;
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
                      <label for="name">Name:</label>
                      <Text 
                        field="name" 
                        required
                        defaultValue={this.props.defaultName} 
                        placeholder="New project"/>
                    </li>
                    <li>
                      <label for="description">Description:</label>
                      <TextArea 
                        className='projectTextArea'
                        field="description" 
                        defaultValue={this.props.defaultDescription} 
                        placeholder='Few words about project...'
                        required/>
                    </li>
                    <li>
                      <label for="employees">Team:</label>
                      <Select 
                        // multiple
                        field="employees" 
                        id="select-employee" 
                        options={employeesOptions}  
                        className='selectTeam'/>
                      <Button 
                        style={styles.addButton}
                        variant="fab" 
                        mini 
                        color="secondary" 
                        onClick={() => this.addEmployeeToTeam(formApi.values.employees)}
                        // onClick={(e) => {console.info('click', formApi.values.employees);}}
                        aria-label="Add">
                        <AddIcon />
                      </Button>
                    </li>
                    {/* <li className=''>
                      {currentEmployee.skills === undefined
                        ? <p>no skills</p>
                        : currentEmployee.skills.map((skill) => {
                          return (
                            <Chip
                              key={skill.key}
                              color="secondary"
                              label={skill.skill + '  - ' + skill.level}
                              style={styles.chips}
                              onDelete={this.handleDelete(skill, currentEmployee.skills, id)}/>
                          );
                        })
                      }
                    </li> */}
                    {/* <li>
                      <label for="creationDate">Creation date:</label>
                      <Text 
                        field="creationDate" 
                        type="date"
                        defaultValue={this.props.defaultCreationDate}
                        placeholder='YYYY-MM-DD'
                        required/>
                    </li> */}
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
                        <Link to="/projects" className='linkComponent'>
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

export default ProjectForm;
