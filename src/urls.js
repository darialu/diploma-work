const apiUrl = process.env.REACT_APP_API_HOST + ':8000';

// const apiUrl = 'http://nodejs-app.cloudapp.net:8000';

export const authUrl = () => `${apiUrl}/auth`;
export const employeesListUrl = () => `${apiUrl}/employees`;
// export const employeesListUrl = (employeesId) => `${apiUrl}/employees/${employeesId}`;
export const positionsListUrl = () => `${apiUrl}/positions`;
export const projectsListUrl = () => `${apiUrl}/projects`;
export const locationsListUrl = () => `${apiUrl}/locations`;
export const skillsListUrl = () => `${apiUrl}/skills`;
export const levelsListUrl = () => `${apiUrl}/skillLevels`;
export const employeesUrl = index => `${employeesListUrl()}/${index}`;
export const projectsUrl = index => `${projectsListUrl()}/${index}`;
export const employeestasksUrl = index => `${employeesListUrl()}/${index}/tasks`;
export const projectsTasksUrl = index => `${projectsListUrl()}/${index}/tasks`;



