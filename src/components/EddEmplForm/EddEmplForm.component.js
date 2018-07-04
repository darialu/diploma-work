import React, { Component } from 'react';
import './EddEmplForm.component.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import { Form, Text, Select } from 'react-form';
// import EmployeeItem from '../EmployeeItem/EmployeeItem.component';

class EddEmplForm extends Component {
    onSubmit = values => {
      this.props.EddEmplSubmit(values);
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
        item.value = i;
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
        item.value = i;
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
                    <Text field="name" defaultValue='' placeholder="John"/>
                  </li>
                  {/* <li>
                    <label for="avatar">Avatar:</label>
                    <Text field="name" value='' placeholder=""/>
                  </li> */}
                  <li>
                    <label for="email">Email:</label>
                    <Text field="email" placeholder="john@gmail.com" defaultValue=''/>
                  </li>
                  <li>
                    <label for="birthday">Date of birthday:</label>
                    <Text field="birthday" defaultValue='' placeholder='YYYY-MM-DD'/>
                  </li>
                  <li>
                    <label for="surName">Surname:</label>
                    <Text field="surName" defaultValue='' placeholder='Doie'/>
                  </li>
                  <li>
                    <label for="location">Location:</label>
                    <Select 
                      field="locationId" 
                      id="select-input-location" 
                      options={locationsOptions} 
                      className='select'/>
                  </li>
                  <li>
                    <label for="position">Position:</label>
                    <Select 
                      field="positionId" 
                      id="select-input-position" 
                      options={positionOptions} 
                      className='select'/>
                  </li>

                  <li>
                    <button className="submit" type="submit">Edd employee</button>
                  </li>
                </ul>
              </form>
            )}
          </Form>
        </div>

      );
    }
}

export default EddEmplForm;
