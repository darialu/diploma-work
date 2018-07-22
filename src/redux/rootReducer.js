
import { 
  SET_TOKEN,
  SET_EMPLOYEES,
  SET_POSITIONS,
  SET_PROJECTS,
  SET_SKILLS,
  SET_CURRENTID,
  ON_CONTACT_DELETE,
  ON_EDIT_EMPL,
  SET_LEVELS,
  SET_LOCATIONS,
  SET_TASKS
} from './actionTypes';

const initialState = {
  token: '',
  employees: [],
  employeesSkills: [],
  projects: [],
  currentTasks: [{
    name: 'no tasks'
  }],
  currentEmployeeId: 0,
  locations:[],
  positions:[],
  skills: [],
  levels: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      const token = action.data.token;

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

    case ON_CONTACT_DELETE: {
      let employees = state.employees.slice();

      employees.splice(action.data.id, 1);

      return { ...state, employees };
    }

    case ON_EDIT_EMPL: {
      let employees = state.employees.slice();
      let index = action.data.index;

      employees.splice(index, 1, action.data.data);

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
      
    default:
      return state;
  }
    
};