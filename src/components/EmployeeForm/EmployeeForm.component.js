import React, { Component } from 'react';
import './EmployeeForm.component.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { Form, Text, Select } from 'react-form';
import 'moment-timezone';
import { getEmployee } from '../../utils';

class EmployeeForm extends Component {
    onSubmit = values => { 
      values.avatar = document.getElementById('file-id').files;
      this.props.employeeFormSubmit(values, this.props.id);
    };
  
    render () {
      console.log('empl form props are', this.props);

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
        <div className='Logo-area'>
        
          <div className='Wrapper'>
            <div className='EddEmplForm' >
              <Form onSubmit={submittedValues => this.onSubmit(submittedValues)}>
                { formApi => (
                  <form onSubmit={formApi.submitForm}>
                    <ul>
                      <li>
                        <h2>Fill out the form</h2>
                      </li>
                      <li>
                        <label for="name">Name:</label>
                        <Text 
                          field="name" 
                          required
                          defaultValue={this.props.defaultName} 
                          placeholder="John"/>
                      </li>
                      <li>
                        <label for="surName">Surname:</label>
                        <Text 
                          field="surName" 
                          defaultValue={this.props.defaultSurName} 
                          placeholder='Doie'
                          required/>
                      </li>
                      <li>
                        <label for="avatar">Avatar:</label>
                        <input
                          field="avatar" 
                          id='file-id'
                          defaultValue={this.props.defaultavatar} 
                          type='file'/>
                      </li>
                      <li>
                        <label for="email">Email:</label>
                        <Text 
                          field="email" 
                          placeholder="john@gmail.com" 
                          defaultValue={this.props.defaultEmail}
                          required/>
                      </li>
                      <li>
                        <label for="birthday">Date of birthday:</label>
                        <Text 
                          field="birthday" 
                          defaultValue={this.props.defaultBirthday}
                          placeholder='YYYY-MM-DD'
                          required/>
                      </li>
                      <li>
                        <label for="location">Location:</label>
                        <Select 
                          field="locationId" 
                          id="select-input-location" 
                          options={locationsOptions} 
                          defaultValue={this.props.defaultLocationId} 
                          className='select'
                          required/>
                      </li>
                      <li>
                        <label for="position">Position:</label>
                        <Select 
                          field="positionId" 
                          id="select-input-position" 
                          options={positionOptions}
                          defaultValue={this.props.defaultPositionId}  
                          className='select'
                          required/>
                      </li>
  
                      <li>
                        <button className="formButton" type="submit">SUBMIT</button>
                        <buton className="formButton"><Link to="/" className='linkComponent'>CANCEL</Link></buton>
                      </li>
                    </ul>
                  </form>
                )}
              </Form>
            </div>
          </div>
        </div>
  
      );
    }
}

export default EmployeeForm;
