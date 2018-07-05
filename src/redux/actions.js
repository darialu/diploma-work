import axios from 'axios';
import { 
  SET_EMPLOYEES,
  SET_PROJECTS,
  SET_POSITIONS,
  SET_CARRENTID,
  ONCONTACTDELETE
} from './actionTypes';
import { employeesListUrl, positionsListUrl, projectsListUrl, employeesUrl } from '../urls';


export const fetchEmployees = () => dispatch => {
  return axios.get(employeesListUrl())
    .then(({ data }) => {
      return dispatch(setEmployees(data));
    });
};

  
export const setEmployees = employees => ({
  type: SET_EMPLOYEES,
  data: { employees }
});

export const fetchProjects = () => dispatch => {
  return axios.get(projectsListUrl())
    .then(({ data }) => {
      return dispatch(setProjects(data));
    });
};

  
export const setProjects = projects => ({
  type: SET_PROJECTS,
  data: { projects }
});

// export const fetchPositions = () => dispatch => {
//   return axios.get(positionsListUrl())
//     .then(({ data }) => {
//       return dispatch(setPositions(data));
//     });
// };

  
// export const setPositions = positions => ({
//   type: SET_POSITIONS,
//   data: { positions }
// });

// export const eddEmployee = (id, name, avatar, email, birthday, password, surName, positionId, locationId) => dispatch => {
//   const employee = { id, name, avatar, email, birthday, password, surName, positionId, locationId };
  
//   return axios.post(employeesListUrl(), employee ); 
// };

export const addEmployee =  data => {
  return axios.post(employeesListUrl(), data ); 
};

export const editEmployee = (id, data) => {
  return axios.put(employeesUrl(id), data ); 
};

export const deleteEmployee = id => dispatch => {
  return axios.delete(employeesUrl(id));
  // .then(({ data }) => {
  //   dispatch({
  //     type: ONCONTACTDELETE,
  //     data: {
  //       id: id
  //     }
  //   });
  //   dispatch(setEmployees(data));
  // }); 
};

export const changeCarrentId = id => ({
  type: SET_CARRENTID,
  data: { id: id }
});


