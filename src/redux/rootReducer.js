
import { 
  SET_EMPLOYEES,
  SET_POSITIONS,
  SET_PROJECTS,
  SET_SKILLS,
  SET_CARRENTID,
  ON_CONTACT_DELETE,
  SET_LEVELS,
  SET_LOCATIONS
} from './actionTypes';

const initialState = {
  employees: [],
  employeesSkills: [],
  projects: [],
  carrentEmployeeId: 0,
  locations:[],
  positions:[],
  skills: [],
  levels: []
};

export default (state = initialState, action) => {
  switch (action.type) {
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

    case ON_CONTACT_DELETE: {
      let employees = state.employees.slice();

      employees.splice(action.data.id, 1);

      return { ...state, employees };
    }

    case SET_CARRENTID: {
      const carrentEmployeeId = action.data.id;

      return { ...state, carrentEmployeeId };
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