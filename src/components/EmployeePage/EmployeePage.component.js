import React, { Component } from 'react';
import './EmployeePage.component.css';
import Moment from 'react-moment';
import 'moment-timezone';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Form, Text, Select } from 'react-form';

class EmployeePage extends Component {
  

  render () {

    console.log('props are',  this.props);
    const styles = {
      avatar: {
        width: 140,
        height: 140
      }
    };
    
    let employees = this.props.employees;

    function getEmployee (array, value) {
      var obj = array.filter(function (arr, i){
        return arr.id === value ? arr.value : '';
      });

      return obj;
    }

    console.log (getEmployee(employees, this.props.match.params.ids));

    let id = this.props.match.params.id;
    let name = employees[id].name;
    let surname = employees[id].surName;
    let position = employees[id].position.name;
    let dateToFormat = employees[id].birthday;
    let location = employees[id].location.name;
    let avatar = employees[id].avatar;
    let skills = this.props.skills;
    let levels = this.props.levels;

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
      <div className='Logo-area'>
        <div className='EmployeePageContent'>
          <div className='TopMenu'>
            <div className='toEmplList'>
              <Link to='/' className='Link'>Employees</Link>
            </div>
            <div className='toProjList'>
              <Link to='/projects' className='Link'>Projects</Link>
            </div>
          </div>
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
                      <p>Skill</p>
                      <Select 
                        field="SkillId" 
                        id="select-skill" 
                        options={skillsOptions} 
                        // defaultValue={this.props.defaultLocationId} 
                        className='selectEmployeePage'/>
                    </div>
                    <div className='selectArea'>
                      <p>Level</p>
                      <Select 
                        field="LevelId" 
                        id="select-level" 
                        options={levelsOptions} 
                        // defaultValue={this.props.defaultLocationId} 
                        className='selectEmployeePage'/>
                      <button className="submit" type="submit">SUBMIT</button>
                    </div>
                  </form>
                )}
              </Form>
            </div>
            <div className='uploadArea'>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default EmployeePage;
