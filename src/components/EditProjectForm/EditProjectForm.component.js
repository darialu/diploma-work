import React from 'react';
import ProjectForm from '../ProjectForm/ProjectForm.component';
import { getEmployee } from '../../utils';


const EditProjectForm = function ({
  props,
  projectFormSubmit,
  projects,
  employees
}){
  let id = props.match.params.id;
  let project = getEmployee(projects, id);

  let result = <div>
    <ProjectForm
      {...props}
      id={id}
      team={project.employees}
      employees={employees}
      defaultName ={project.name}
      defaultDescription={project.description}
      defaultCreationDate={project.creationDate}
      projectFormSubmit={projectFormSubmit}/>
  </div>;

  return result;
};
  
export default EditProjectForm;
