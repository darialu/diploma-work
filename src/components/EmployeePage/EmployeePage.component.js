import React, { Component } from 'react';
import './EmployeePage.component.css';
import Moment from 'react-moment';
import 'moment-timezone';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Form, Text, Select } from 'react-form';
import TabBar from '../TabBar/TabBar.component';
import { getEmployee } from '../../utils';

class EmployeePage extends Component {
  
  onSubmit = values => {
    if (values.SkillId === undefined || values.LevelId === undefined) {
      // console.log ('no value');
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

  handleDelete = () => {
    console.log('del skill');
  }

  handleClick = () => {
    console.log('del skill');
  }

  render () {

    const styles = {
      avatar: {
        width: 140,
        height: 140
      },
      chips: {
        width: 190,
        color: 'red',
        backgroundColor: 'blue'
      }
    };
    
    let employees = this.props.employees;
    let projects = this.props.projects;

    // let id = this.props.userID.toString();
    let id = this.props.userID !== undefined ? this.props.userID.toString() : this.props.match.params.id;

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

    const skillLevel = () => currentEmployee.skills.map((skill) => {
      // return <div className=''>
      //   <p className='emplSkills'>{skill.skill}</p>
      //   <p className='emplSkills'>{skill.level}</p>
      // </div>;
      return (
        <Chip
          key={skill.key}
          label={skill.skill + '  - ' + skill.level}
          style={styles.chips}
          onClick={this.handleClick}
          onDelete={this.handleDelete}/>
      );
      
    });


    return (
      <div className='Logo-area'>
        <div className='EmployeePageContent'>
          <TabBar 
            userID={id}
            employees={this.props.employees}/>
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
                        // onChange={this.onChangeSkill}
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
                    <button type='submit'>ADD SKILL</button>
                  </form>
                )}
              </Form>
              <div className='chipsArea'>
                {currentEmployee.skills !== undefined
                  ? skillLevel()
                  : <p>no skills</p>}
              </div>
            </div>
            {/* <div className='uploadArea'>
            </div> */}
          </div>
          <div className='projectsArea'>
            <p>Projects:</p>
            <div className='project'>
              {currentProjects !== undefined
                // ? getProjects()
                ? <div>
                  <p>{currentProjects.name}</p>
                  <p>{this.props.tasks[0].name}</p>
                </div>
                : <p>no projects found</p>}
              {/* <p>{this.props.tasks[0].name}</p> */}
            </div>
          </div>
        </div> 
        
      </div>
  
    );
  }
}

export default EmployeePage;
