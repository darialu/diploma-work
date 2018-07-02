import React, { Component } from 'react';
import './EddEmplForm.component.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import { Form, Text } from 'react-form';
// import EmployeeItem from '../EmployeeItem/EmployeeItem.component';

class EddEmplForm extends Component {

  render () {
    

    return (
      <div className='EddEmplForm' >
        <Form>
          <ul>
            <li>
              <h2>Contact Us</h2>
            
            </li>
            <li>
              <label for="name">Name:</label>
              <input type="text" name="name" placeholder="John Doe"/>
            </li>
            <li>
              <label for="email">Email:</label>
              <input type="text" name="email" placeholder="email format"/>
            </li>
            <li>
              <label for="website">Website:</label>
              <input type="text" name="website" placeholder="http://johndoe.com/" required/>
            </li>

            <li>
              <button className="submit" type="submit">Submit Form</button>
            </li>
          </ul>
        </Form>
      </div>

    );
  }
}

export default EddEmplForm;
