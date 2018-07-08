import React, { Component } from 'react';
import './AddEmplForm.component.css';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import { Form, Text, Select } from 'react-form';
import EmployeeForm from '../EmployeeForm/EmployeeForm.component';


const AddEmplForm = function ({
  employeeFormSubmit,
  locations,
  positions
}){
  let result = <div>
    <EmployeeForm
      employeeFormSubmit={employeeFormSubmit}
      locations={locations}
      positions={positions}/>
  </div>;

  return result;
};
  
export default AddEmplForm;
