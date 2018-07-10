const apiUrl = 'http://localhost:8000';

export const employeesListUrl = () => `${apiUrl}/employees`;
// export const employeesListUrl = (employeesId) => `${apiUrl}/employees/${employeesId}`;
export const positionsListUrl = () => `${apiUrl}/positions`;
export const projectsListUrl = () => `${apiUrl}/projects`;
export const locationsListUrl = () => `${apiUrl}/locations`;
export const skillsListUrl = () => `${apiUrl}/skills`;
export const levelsListUrl = () => `${apiUrl}/skillLevels`;
export const employeesUrl = index => `${employeesListUrl()}/${index}`;



