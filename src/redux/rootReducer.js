
import { 
  SET_EMPLOYEES,
  SET_POSITIONS
} from './actionTypes';

const initialState = {
  employees: [],
  position: [{
    id: 0,
    name: 'PM'
  },{
    id: 1,
    name: 'Developer'
  },{
    id: 2,
    name: 'QA'
  },{
    id: 3,
    name: 'Solution Architect'
  }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES: {
      const employees = action.data.employees;

      return { ...state, employees };
    }

    case SET_POSITIONS: {
      const position = action.data.positions;

      return { ...state, position };
    }
      
    default:
      return state;
  }
    
};