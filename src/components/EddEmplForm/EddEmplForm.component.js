import React, { Component } from 'react';
import './EddEmplForm.component.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import { Form, Text } from 'react-form';
// import EmployeeItem from '../EmployeeItem/EmployeeItem.component';

class EddEmplForm extends Component {
    onSubmit = values => {
      console.info(values);
    };

    render () {
      let name = 'llllll';

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
                  <li>
                    <label for="avatar">Avatar:</label>
                    <Text field="name" defaultValue='' placeholder=""/>
                  </li>
                  <li>
                    <label for="email">Email:</label>
                    <Text field="email" placeholder="john@gmail.com" defaultValue=''/>
                  </li>
                  <li>
                    <label for="birthday">Date of birthday:</label>
                    <Text field="birthday" defaultValue='' placeholder='YYYY-MM-DD'/>
                  </li>
                  <li>
                    <label for="surname">Surname:</label>
                    <Text field="surname" defaultValue='' placeholder='Doie'/>
                  </li>

                  <li>
                    <button className="submit" type="submit">Submit Form</button>
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
