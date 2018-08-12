import React from 'react';
import ProjectForm from '../ProjectForm/ProjectForm.component';


const AddProjectForm = function ({
  projectFormSubmit,
  employees,
  projects
}){
  let result = <div>
    <ProjectForm
      projectFormSubmit={projectFormSubmit}
      employees={employees}/>
  </div>;

  return result;
};
  
export default AddProjectForm;
