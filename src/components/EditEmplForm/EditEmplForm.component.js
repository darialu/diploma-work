import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import { Form, Text, Select } from 'react-form';
import EmployeeForm from '../EmployeeForm/EmployeeForm.component';
import { getEmployee } from '../../utils';

const EditEmplForm = function ({
  employeeFormSubmit,
  locations,
  positions,
  employees,
  id
}){

  let employee = getEmployee(employees, id);
  let index = employees.indexOf(employee);

  let result = <div>
    <EmployeeForm
      id={id}   
      index = {index}
      employeeFormSubmit={employeeFormSubmit}
      locations={locations}
      positions={positions}
      defaultName={employee.name}
      defaultEmail={employee.email}
      defaultBirthday={employee.birthday}
      defaultSurName={employee.surName}
      defaultLocationId={employee.locationId}
      defaultPositionId={employee.ositionId}/>
  </div>;

  return result;
};
  
export default EditEmplForm;
