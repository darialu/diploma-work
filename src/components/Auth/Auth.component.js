import React, { Component } from 'react';
import './Auth.component.css';
import { Link } from 'react-router-dom';
import { Form, Text, Select } from 'react-form';

class Auth extends Component {
    onSubmit = values => { 
      this.props.auth(values);
    };
  
    render () {
  
      return (
        <div className='Logo-area'>
          <div className='Wrapper'>
            <div className='EddEmplForm' >
              <Form onSubmit={submittedValues => this.onSubmit(submittedValues)}>
                { formApi => (
                  <form onSubmit={formApi.submitForm}>
                    <ul>
                      <li>
                        <h2>Login in</h2>
                      </li>
                      <li>
                        <label for="email">Email: </label>
                        <Text 
                          field="email" 
                          required
                          placeholder="john@gmail.com"/>
                      </li>
                      <li>
                        <label for="password">Password: </label>
                        <Text 
                          field="password"
                          placeholder='no less than 6 characters'
                          required/>
                      </li>
                      <li>
                        <button className="formButton" type="submit">login!</button>
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

export default Auth;
