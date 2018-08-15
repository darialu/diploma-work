import React from 'react';
import TaskForm from '../TaskForm/TaskForm.component';
import { getElementById } from '../../utils';


const EditTaskForm = function ({
  props,
  projectFormSubmit,
  tasks,
  employees,
  projects
}){
  let id = props.match.params.id;
  let task = getElementById(tasks, id);

  let result = <div>
    <TaskForm
      {...props}
      id={id}
      defaultName ={task.name}
      defaultDescription={task.description}
      userId={task.userId}
      projectFormSubmit={projectFormSubmit}/>
  </div>;

  return result;
};
  
export default EditTaskForm;
