import axios from 'axios';
import { 
  SET_EMPLOYEES,
  SET_PROJECTS,
  SET_POSITIONS,
  SET_SKILLS,
  SET_CARRENTID,
  ON_CONTACT_DELETE,
  SET_LOCATIONS,
  SET_LEVELS
} from './actionTypes';
import { 
  employeesListUrl, 
  positionsListUrl, 
  projectsListUrl,
  locationsListUrl,
  skillsListUrl, 
  levelsListUrl,
  employeesUrl 
} from '../urls';

let getBase64 = (file, callback) => {
  let reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = function () {
    // console.log(reader.result);
    callback(reader.result);
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
};

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

export const fetchSkills = () => dispatch => {
  return axios.get(skillsListUrl())
    .then(({ data }) => {
      return dispatch(setSkills(data));
    });
};

export const setSkills = skills => ({
  type: SET_SKILLS,
  data: { skills }
});

export const fetchLevels = () => dispatch => {
  return axios.get(levelsListUrl())
    .then(({ data }) => {
      return dispatch(setLevels(data));
    });
};

export const setLevels = levels => ({
  type: SET_LEVELS,
  data: { levels }
});

export const fetchPositions = () => dispatch => {
  return axios.get(positionsListUrl())
    .then(({ data }) => {
      return dispatch(setPositions(data));
    });
};

  
export const setPositions = positions => ({
  type: SET_POSITIONS,
  data: { positions }
});

export const fetchLocations = () => dispatch => {
  return axios.get(locationsListUrl())
    .then(({ data }) => {
      return dispatch(setLocations(data));
    });
};

  
export const setLocations = locations => ({
  type: SET_LOCATIONS,
  data: { locations }
});

export const addEmployee =  data => dispatch => {
  getBase64(data.avatar[0], function (dataUrl) {
    data.avatar = dataUrl;
    axios.post(employeesListUrl(), data)
      .then(({ data }) => {
        return dispatch(setEmployees(data));
      });
  });
};

export const editEmployee = (id, data) => {
  return axios.put(employeesUrl(id), data ); 
};

export const deleteEmployee = id => dispatch => {
  return axios.delete(employeesUrl(id))
    .then(({ data }) => {
      dispatch({
        type: ON_CONTACT_DELETE,
        data: {
          id: id
        }
      });
      dispatch(setEmployees(data));
    }); 
};

export const currentId = id => dispatch => {
  return axios.get(employeesUrl(id))
    .then(({ data }) => {
      return dispatch(setEmployees(data));
    });
};


