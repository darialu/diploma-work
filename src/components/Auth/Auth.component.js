import React, { Component } from 'react';
import './Auth.component.css';
// import { Link } from 'react-router-dom';
import { Form, Text } from 'react-form';
import history from '../../history';

class Auth extends Component {
    onSubmit = values => { 
      this.props.auth(values);
      history.push('/');
    };
  
    render () {
      const styles = {
        form: {
          backgroundColor: 'transparent',
          color: 'white',
          width: 300,
          borderColor: 'white'
        },
      };
  
      return (
        <div className='Logo-area'>
          <div className='Dark-area'>
            <div className='AuthWrapper'>
              <div className='EddEmplForm' style={styles.form}>
                <Form onSubmit={submittedValues => this.onSubmit(submittedValues)}>
                  { formApi => (
                    <form onSubmit={formApi.submitForm}>
                      <ul>
                        <li>
                          <h2>Login in</h2>
                        </li>
                        <li>
                          {/* <label for="email">Email: </label> */}
                          <Text 
                            field="email" 
                            required
                            placeholder="email: john@gmail.com"/>
                        </li>
                        <li>
                          {/* <label for="password">Password: </label> */}
                          <Text 
                            field="password"
                            placeholder='password (no less than 5 characters)'
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
        </div>

  
      );
    }
}

export default Auth;
