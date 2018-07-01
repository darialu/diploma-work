
import { 
  SET_EMPLOYEES,
  SET_POSITIONS,
  SET_PROJECTS,
  SET_CARRENTID
} from './actionTypes';

const initialState = {
  employees: [],
  projects: [],
  carrentEmployeeId: 0
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

    case SET_CARRENTID: {
      const carrentEmployeeId = action.data.id;

      return { ...state, carrentEmployeeId };
    }

    case SET_POSITIONS: {
      const position = action.data.positions;

      return { ...state, position };
    }
      
    default:
      return state;
  }
    
};