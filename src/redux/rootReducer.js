import { 
  SET_TOKEN,
  SET_AUTH_DATA,
  SET_EMPLOYEES,
  SET_POSITIONS,
  SET_PROJECTS,
  SET_SKILLS,
  SET_CURRENTID,
  ON_CONTACT_DELETE,
  ADD_EMPLOYEE,
  ON_EDIT_EMPL,
  SET_LEVELS,
  SET_LOCATIONS,
  SET_TASKS,
  ADD_PROJECT,
  ON_PROJECT_DELETE,
  ON_EDIT_POJECT,
  SET_TASKS_STATUS,
  SET_NEW_TASK,
  DELETE_TASK
} from './actionTypes';
import axios from 'axios';
import { getElementById } from '../utils';

const initialState = {
  token: 'tttoken',
  employees: [],
  employeesSkills: [],
  projects: [],
  currentTasks: [],
  authId: '10',
  locations:[],
  positions:[],
  skills: [],
  levels: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA: {
      const token = action.data.token;
      const user = action.data.user;
      const authId = user.id;

      localStorage.setItem('TOKEN', token);
      localStorage.setItem('ID', authId);

      axios.defaults.headers.common['authtoken'] = token;

      return { ...state, token };
    }

    case SET_TOKEN: {
      const token = action.data.token;
      
      localStorage.setItem('TOKEN', token);
      axios.defaults.headers.common['authtoken'] = token;
      
      return { ...state, token };
    }

    case SET_EMPLOYEES: {
      const employees = action.data.employees;

      return { ...state, employees };
    }

    case SET_PROJECTS: {
      const projects = action.data.projects;

      return { ...state, projects };
    }

    case SET_SKILLS: {
      const skills = action.data.skills;

      return { ...state, skills };
    }

    case SET_LEVELS: {
      const levels = action.data.levels;

      return { ...state, levels };
    }  

    case SET_TASKS: {
      const currentTasks = action.data.tasks;

      return { ...state, currentTasks };
    }

    case SET_TASKS_STATUS: {
      const currentTasks = state.currentTasks.slice();
      const putTask = action.data.task;
      let changedTask = getElementById(currentTasks, putTask.id);
      let index = currentTasks.indexOf(changedTask);

      currentTasks.splice(index, 1, putTask);
      return { ...state, currentTasks };
    }

    case SET_NEW_TASK: {
      const currentTasks = state.currentTasks.slice();

      currentTasks.push(action.data.task);
      return { ...state, currentTasks };
    }

    case DELETE_TASK: {
      let currentTasks = state.currentTasks.slice();
      let id = action.data.id;

      const remainingTasks = currentTasks.filter(task => task.id !== id);

      // console.info('currentTasks', currentTasks);
      // console.info('remainingTasks', remainingTasks);
      return { ...state, currentTasks: remainingTasks };
    }

    case ON_CONTACT_DELETE: {
      let employees = action.data.employees;
      
      return { ...state, employees };
    }

    case ADD_EMPLOYEE: {
      let employees = state.employees.slice();

      employees.push(action.data.employee);

      return { ...state, employees };
    }

    case ON_EDIT_EMPL: {
      let employees = action.data.data;

      return { ...state, employees };
    }

    case SET_CURRENTID: {
      const currentEmployeeId = action.data.id;

      return { ...state, currentEmployeeId };
    }

    case SET_POSITIONS: {
      const positions = action.data.positions;

      return { ...state, positions };
    }

    case SET_LOCATIONS: {
      const locations = action.data.locations;

      return { ...state, locations };
    }

    case ADD_PROJECT: {
      let projects = state.projects.slice();

      projects.push(action.data.project);

      return { ...state, projects };
    }

    case ON_PROJECT_DELETE: {
      let projects = action.data.projects;

      return { ...state, projects };
    }

    case ON_EDIT_POJECT: {
      let projects = action.data.data;

      return { ...state, projects };
    }
      
    default:
      return state;
  }
    
};