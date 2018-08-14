import axios from 'axios';
import { 
  SET_TOKEN,
  SET_AUTH_DATA,
  SET_EMPLOYEES,
  SET_PROJECTS,
  SET_POSITIONS,
  SET_SKILLS,
  SET_TASKS,
  // SET_CURRENTID,
  ON_CONTACT_DELETE,
  ADD_EMPLOYEE,
  ON_EDIT_EMPL,
  SET_LOCATIONS,
  SET_LEVELS,
  ADD_PROJECT,
  ON_PROJECT_DELETE,
  ON_EDIT_POJECT,
  SET_TASKS_STATUS,
  SET_NEW_TASK,
  DELETE_TASK
} from './actionTypes';
import { 
  authUrl,
  employeesListUrl, 
  positionsListUrl, 
  projectsListUrl,
  employeestasksUrl,
  projectsTasksUrl,
  locationsListUrl,
  skillsListUrl, 
  levelsListUrl,
  employeesUrl ,
  projectsUrl,
  putTaskUrl,
  tasksUrl,
  deleteTasksUrl
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
      return dispatch(setAuthData(data));
    });
};

export const setAuthData = data => ({
  type: SET_AUTH_DATA,
  data: { 
    token: data.token,
    // id: data.user.id
    user: data.user
  }
});

export const setToken = token => ({
  type: SET_TOKEN,
  data: { 
    token: token
  }
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

export const fetchServerData = () => dispatch => {
  dispatch(fetchEmployees());
  dispatch(fetchProjects());
  dispatch(fetchSkills());
  dispatch(fetchLevels());
  dispatch(fetchPositions());
  dispatch(fetchLocations());
};

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
          employees: data
        }
      });
      dispatch(setEmployees(data));
    }); 
};

// export const currentId = id =>({
//   type: SET_CURRENTID,
//   data: { id }
// });

//projects actions:

export const addProject = data => dispatch => {
  return axios.post(projectsListUrl(), data)
    .then(({ data }) => {
      return dispatch(addProj(data));
    });
};

export const addProj = project => ({
  type: ADD_PROJECT,
  data: { project }
});

export const deleteProject = id => dispatch => {
  return axios.delete(projectsUrl(id))
    .then(({ data }) => {
      dispatch({
        type: ON_PROJECT_DELETE,
        data: {
          projects: data
        }
      });
      dispatch(setProjects(data));
    });
};

export const editProject = (id, data) => dispatch => {
  return axios.put(projectsUrl(id), data )
    .then(({ data }) => {
      return dispatch({
        type: ON_EDIT_POJECT,
        data: {
          data: data
        }
      });
    }); 
};

export const fetchTasks = (id) => dispatch => {
  return axios.get(employeestasksUrl(id))
    .then(({ data }) => {
      return dispatch(setTasks(data));
    });
};

export const fetchProjectsTasks = (id) => dispatch => {
  return axios.get(projectsTasksUrl(id));
};

export const setTasks = tasks => ({
  type: SET_TASKS,
  data: { tasks }
});

export const addStatusToTask = (id, data) => dispatch => {
  return axios.put(putTaskUrl(id), data)
    .then (({ data }) => {
      return dispatch(setTaskStatus(data));
    });
};

export const setTaskStatus = task => ({
  type: SET_TASKS_STATUS,
  data: { task }
});

export const addTask = data => dispatch => {
  return axios.post(tasksUrl(), data)
    .then (({ data }) => {
      return dispatch(setNewTask(data));
    });
};

export const setNewTask = task => ({
  type: SET_NEW_TASK,
  data: { task }
});

export const deleteTask = id => {
  return axios.delete(deleteTasksUrl(id));
};

// export const delTask = id => ({
//   type: DELETE_TASK,
//   data: { id }
// });
