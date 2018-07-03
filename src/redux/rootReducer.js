
import { 
  SET_EMPLOYEES,
  SET_POSITIONS,
  SET_PROJECTS,
  SET_CARRENTID
} from './actionTypes';

const initialState = {
  employees: [],
  projects: [],
  carrentEmployeeId: 0,
  locations:[
    {
      id: 0,
      name: 'New York'
    },
    {
      id: 1,
      name: 'Kyiv'
    },
    {
      id: 2,
      name: 'Warsaw'
    },
    {
      id: 3,
      name: 'Berlin'
    },
    {
      id: 4,
      name: 'London'
    },
    {
      id: 5,
      name: 'Moscow'
    },
    {
      id: 6,
      name: 'Lviv'
    },
    {
      id: 7,
      name: 'Kherson'
    },
    {
      id: 8,
      name: 'Kharkiv'
    },
    {
      id: 9,
      name: 'Odessa'
    },
    {
      id: 10,
      name: 'Dnipro'
    }
  ],
  positions:[
    {
      id: 0,
      name: 'PM'
    },
    {
      id: 1,
      name: 'Developer'
    },
    {
      id: 2,
      name: 'QA'
    },
    {
      id: 3,
      name: 'Solution Architect'
    }
  ]
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