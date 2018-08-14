import React from 'react';
import TaskForm from '../TaskForm/TaskForm.component';


const AddTaskForm = function ({
  projectFormSubmit,
  employees,
  projects,
  props
}){
  let result = <div>
    <TaskForm
      {...props}
      projectFormSubmit={projectFormSubmit}
      projects={projects}
      employees={employees}/>
  </div>;

  return result;
};
  
export default AddTaskForm;
