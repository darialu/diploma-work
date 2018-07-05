import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import { Form, Text, Select } from 'react-form';
import EmployeeForm from '../EmployeeForm/EmployeeForm.component';

const EditEmplForm = function ({
  employeeFormSubmit,
  locations,
  positions,
  employees,
  id
}){
  let result = <div>
    <EmployeeForm
      employeeFormSubmit={employeeFormSubmit}
      locations={locations}
      positions={positions}
      defaultName={employees[id].name}
      defaultEmail={employees[id].email}
      defaultBirthday={employees[id].birthday}
      defaultSurName={employees[id].surName}
      defaultLocationId={employees[id].locationId}
      defaultPositionId={employees[id].ositionId}/>
  </div>;

  return result;
};
  
export default EditEmplForm;
