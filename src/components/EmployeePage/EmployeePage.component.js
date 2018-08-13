import React, { Component } from 'react';
import './EmployeePage.component.css';
import Moment from 'react-moment';
import 'moment-timezone';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import { Form, Text, Select } from 'react-form';
import TabBar from '../TabBar/TabBar.component';
import { getEmployee } from '../../utils';

class EmployeePage extends Component {

  componentDidMount () {
    let id = this.props.userID !== undefined ? this.props.userID.toString() : this.props.match.params.id;
    
    this.props.fetchTasks(id);
  }
  
  onSubmit = values => {
    if (values.SkillId === undefined || values.LevelId === undefined) {
      alert ('choose skill and it\'s levell!');
      return;
    }

    let skillId = values.SkillId; //skill id in array
    let levelId = values.LevelId;
    // let indexOfCurrentEmployee = this.props.employees.indexOf(getEmployee(this.props.employees, this.props.match.params.id));
    let id = this.props.userID !== undefined ? this.props.userID.toString() : this.props.match.params.id;
    let skillName = getEmployee(this.props.skills, skillId).name;
    let levelName = getEmployee(this.props.levels, levelId).name;

    // console.log(' index', indexOfCurrentEmployee, skillName);
    this.props.changeSkill(skillName, levelName, id);
  }

  handleDelete = (skill, currentEmployeeSkills, id) => () => {
    let index = currentEmployeeSkills.indexOf(skill);

    currentEmployeeSkills.splice(index, 1);
    this.props.delSkill(currentEmployeeSkills, id);
    // console.log('del skill', skill, currentEmployeeSkills, index);
  }

  render () {

    const styles = {
      avatar: {
        width: 140,
        height: 140
      },
      chips: {
        color: 'white',
        margin: 3
      },
      button: {
        margin: 15
      }
    };
    
    let employees = this.props.employees;
    let projects = this.props.projects;

    // let id = this.props.userID.toString();
    let id = this.props.match === undefined ? localStorage.getItem('ID') : this.props.match.params.id;

    let currentEmployee = getEmployee(employees, id);
    let name = currentEmployee.name;
    let surname = currentEmployee.surName;
    let position = currentEmployee.position.name;
    let dateToFormat = currentEmployee.birthday;
    let location = currentEmployee.location.name;
    let avatar = currentEmployee.avatar;
    let skills = this.props.skills;
    let levels = this.props.levels;
    let currentProjects = getEmployee(projects, id);
    let tasks = this.props.tasks;

    let skillsArr = skills.map(skill => {
      return skill.name;
    });
  
    let skillsOptions = skillsArr.map((skill, i) => {
      let item = {
        label: '',
        value: '',
      };
  
      item.label = skill;
      item.value = i.toString();
      return item;
    });

    let levelsArr = levels.map(level => {
      return level.name;
    });
  
    let levelsOptions = levelsArr.map((level, i) => {
      let item = {
        label: '',
        value: '',
      };
  
      item.label = level;
      item.value = i.toString();
      return item;
    });

    return (
      <div>
        {/* <TabBar 
          userID={id}
          employees={this.props.employees}/> */}
        <div className='Content'>
          <div className='avatarArea'>
            {!avatar.length
              ? <div className='avatar'>
                <Avatar style={styles.avatar} src={require('../../images/default-avatar.png')}/>
              </div>
              : <Avatar style={styles.avatar} src={'data:image/jpeg;' + avatar} alt='NO AVATAR'/>
            }
          </div>
          <div className='aboutAmployee'>
            <p className='employeeName'>{name + ' ' + surname}</p>
            <p className='employeePosition'>{position}</p>
            <p>Birthday: <Moment format="DD.MM.YYYY">{dateToFormat}</Moment></p>
            <p>{'Location: ' + location}</p>         
          </div>
          <div className='skillsArea'>
            <Form onSubmit={submittedValues => this.onSubmit(submittedValues)}>
              { formApi => (
                <form onSubmit={formApi.submitForm}>
                  <div className='selectArea'>
                    <p>Skills:</p>
                    <Select 
                      field="SkillId" 
                      id="select-skill" 
                      options={skillsOptions} 
                      className='selectEmployeePage'/>
                  </div>
                  <div className='selectArea'>
                    <p>Levels:</p>
                    <Select 
                      field="LevelId" 
                      id="select-level" 
                      options={levelsOptions}  
                      className='selectEmployeePage'/>
                  </div>
                  <Button 
                    variant="contained"
                    color="primary" 
                    aria-label="Add"
                    mini
                    style={styles.button}
                    type='submit'>
                      Add skill
                  </Button>
                </form>
              )}
            </Form>
            <div className='chipsArea'>
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
            </div>
          </div>
          {/* <div className='uploadArea'>
            </div> */}
        </div>
        <div className='projectsArea'>
          <h3>Projects:</h3>
          <div className='project'>
            {currentProjects !== undefined
              ? <div>
                <p className='underlineParagraph'>{currentProjects.name}</p>
                {tasks.length === 0
                  ? <p>no tasks</p>
                  : 
                  tasks.map((task, index) => {
                    return <div><li key={index}>{task.name}</li></div>;
                      
                  })
                }
              </div>
              : <p>no projects found</p>}
            {/* <p>{this.props.tasks[0].name}</p> */}
          </div>
        </div>
        
      </div>
  
    );
  }
}

export default EmployeePage;
