import axios from 'axios';
import { 
  SET_TOKEN,
  SET_EMPLOYEES,
  SET_PROJECTS,
  SET_POSITIONS,
  SET_SKILLS,
  SET_TASKS,
  SET_CURRENTID,
  ON_CONTACT_DELETE,
  ADD_EMPLOYEE,
  ON_EDIT_EMPL,
  SET_LOCATIONS,
  SET_LEVELS
} from './actionTypes';
import { 
  authUrl,
  employeesListUrl, 
  positionsListUrl, 
  projectsListUrl,
  tasksUrl,
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

export const authUser = data => dispatch => {
  return axios.post(authUrl(), data)
    .then(({ data }) => {
      return dispatch(setToken(data));
    });
};

export const setToken = token => ({
  type: SET_TOKEN,
  data: { token }
});

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

export const fetchTasks = (id) => dispatch => {
  return axios.get(tasksUrl(id))
    .then(({ data }) => {
      return dispatch(setTasks(data));
    });
};

export const setTasks = tasks => ({
  type: SET_TASKS,
  data: { tasks }
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
  if (data.avatar.length != 0 ){
    getBase64(data.avatar[0], function (dataUrl) {
      data.avatar = dataUrl;
      axios.post(employeesListUrl(), data)
        .then(({ data }) => {
          return dispatch(addEmpl(data));
        });
    });
  } else {
    axios.post(employeesListUrl(), data)
      .then(({ data }) => {
        return dispatch(addEmpl(data));
      });
  }
};

export const addEmpl = employee => ({
  type: ADD_EMPLOYEE,
  data: { employee }
});

export const editEmployee = (id, data) => dispatch => {
  return axios.put(employeesUrl(id), data )
    .then(({ data }) => {
      return dispatch({
        type: ON_EDIT_EMPL,
        data: {
          data: data
        }
      });
    }); 
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

export const currentId = id =>({
  type: SET_CURRENTID,
  data: { id }
});


