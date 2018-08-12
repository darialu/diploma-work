import React, { Component } from 'react';
import './Auth.component.css';
// import { Link } from 'react-router-dom';
import { Form, Text } from 'react-form';
import history from '../../history';

class Auth extends Component {
    onSubmit = values => { 
      this.props.auth(values)
        .then(() => {
          // history.push('/');
          console.log('auth props', this.props);
          this.props.fetchServerData();
          history.push('/');
          // call server fetch action
        })
        .catch(e => {
          console.info('login error', e);
        });
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
        <div className='LogoAuth'>
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
                            defaultValue='andy_wallcroft@mail.uk'
                            placeholder="email: john@gmail.com"/>
                        </li>
                        <li>
                          {/* <label for="password">Password: </label> */}
                          <Text 
                            field="password"
                            placeholder='password (12345)'
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
