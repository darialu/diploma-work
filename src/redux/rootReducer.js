
import { 
  SET_EMPLOYEES,
  SET_POSITIONS,
  SET_CARRENTID
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
  carrentEmployeeId: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES: {
      const employees = action.data.employees;

      return { ...state, employees };
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