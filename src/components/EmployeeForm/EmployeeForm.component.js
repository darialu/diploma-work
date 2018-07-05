import React, { Component } from 'react';
import './EmployeeForm.component.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { Form, Text, Select } from 'react-form';
import 'moment-timezone';

class EmployeeForm extends Component {
    onSubmit = values => {
      this.props.employeeFormSubmit(values);
    };
  
    render () {
      const locations = this.props.locations;
  
      let locationsArr = locations.map(location => {
        return location.name;
      });
  
      let locationsOptions = locationsArr.map((city, i) => {
        let item = {
          label: '',
          value: '',
        };
  
        item.label = city;
        item.value = i.toString();
        return item;
      });
  
      const positions = this.props.positions;
  
      let positionsArr = positions.map(position => {
        return position.name;
      });
  
      let positionOptions = positionsArr.map((position, i) => {
        let item = {
          label: '',
          value: '',
        };
  
        item.label = position;
        item.value = i.toString();
        return item;
      });
  
  
      return (
        <div className='EddEmplForm' >
          <Form onSubmit={submittedValues => this.onSubmit(submittedValues)}>
            { formApi => (
              <form onSubmit={formApi.submitForm}>
                <ul>
                  <li>
                    <h2>Fill in the form</h2>
                  </li>
                  <li>
                    <label for="name">Name:</label>
                    <Text 
                      field="name" 
                      defaultValue={this.props.defaultName} 
                      placeholder="John"/>
                  </li>
                  {/* <li>
                      <label for="avatar">Avatar:</label>
                      <Text field="name" value='' placeholder=""/>
                    </li> */}
                  <li>
                    <label for="email">Email:</label>
                    <Text 
                      field="email" 
                      placeholder="john@gmail.com" 
                      defaultValue={this.props.defaultEmail}/>
                  </li>
                  <li>
                    <label for="birthday">Date of birthday:</label>
                    <Text 
                      field="birthday" 
                      defaultValue={this.props.defaultBirthday}
                      placeholder='YYYY-MM-DD'/>
                  </li>
                  <li>
                    <label for="surName">Surname:</label>
                    <Text 
                      field="surName" 
                      defaultValue={this.props.defaultSurName} 
                      placeholder='Doie'/>
                  </li>
                  <li>
                    <label for="location">Location:</label>
                    <Select 
                      field="locationId" 
                      id="select-input-location" 
                      options={locationsOptions} 
                      defaultValue={this.props.defaultLocationId} 
                      className='select'/>
                  </li>
                  <li>
                    <label for="position">Position:</label>
                    <Select 
                      field="positionId" 
                      id="select-input-position" 
                      options={positionOptions}
                      defaultValue={this.props.defaultPositionId}  
                      className='select'/>
                  </li>
  
                  <li>
                    <button className="submit" type="submit">SUBMIT</button>
                  </li>
                </ul>
              </form>
            )}
          </Form>
        </div>
  
      );
    }
}

export default EmployeeForm;
