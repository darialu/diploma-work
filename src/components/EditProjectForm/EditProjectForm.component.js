import React from 'react';
import ProjectForm from '../ProjectForm/ProjectForm.component';
import { getElementById } from '../../utils';


const EditProjectForm = function ({
  props,
  projectFormSubmit,
  projects,
  employees,
  link
}){
  let id = props.match.params.id;
  let project = getElementById(projects, id);

  let result = <div>
    <ProjectForm
      {...props}
      id={id}
      link={link}
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
