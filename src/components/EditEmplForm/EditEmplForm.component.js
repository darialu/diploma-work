import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import { Form, Text, Select } from 'react-form';
import EmployeeForm from '../EmployeeForm/EmployeeForm.component';
import { getEmployee } from '../../utils';

const EditEmplForm = function ({
  props,
  employeeFormSubmit,
  locations,
  positions,
  employees,
}){

  let id = props.match.params.id;
  let employee = getEmployee(employees, id);
  // let index = employees.indexOf(employee);

  let result = <div>
    <EmployeeForm
      {...props}
      id={id}   
      employeeFormSubmit={employeeFormSubmit}
      locations={locations}
      positions={positions}
      defaultEmail={employee.email}
      defaultName={employee.name}
      defaultBirthday={employee.birthday}
      defaultSurName={employee.surName}
      // defaultavatar={employee.avatar}
      defaultLocationId={employee.locationId}
      defaultPositionId={employee.ositionId}/>
  </div>;

  return result;
};
  
export default EditEmplForm;
