import axios from 'axios';
import { 
  SET_EMPLOYEES,
  SET_POSITIONS,
  SET_CARRENTID
} from './actionTypes';
import { employeesListUrl, positionsListUrl } from '../urls';


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

export const changeCarrentId = id => ({
  type: SET_CARRENTID,
  data: { id: id }
});

export const eddEmployee = (name) => dispatch => {
  return axios.post(employeesListUrl(), { data: name })
    .then(({ data }) => {
      return dispatch(setPositions(data));
    });
};



// export const addContact = (
// name = 'Anonimous',
// phone='+380XXXXXXXXX',
// image
// ) => dispatch => {
// const contact = {name, phone, image};

// axios.post(contactsListUrl(), { data: contact })
//     .then(({ data }) => {
//     dispatch({
//         type: ONCONTACTADD,
//         contact: {
//         name, phone, image
//         }
//     });
//     dispatch(setContacts(data))
//     });
// };

// export const onContactDelete = id => dispatch => {
//     axios.delete(contactItemUrl(id))
//     .then(({ data }) => {
//         dispatch({
//             type: ONCONTACTDELETE,
//             data: {
//                 id: id
//             }
//         });
//         dispatch(setContacts(data))
//         });
// }

// export const onEditId =  (id, name, phone) => dispatch => {
//     dispatch({
//         type: ONEDITID,
//         data: {
//             id: id,
//             name: name,
//             phone: phone
//         }
//     });
//   };

//   export const onChangeName = value => dispatch => {
//     dispatch({
//         type: ONCHANGENAME,
//         data: {
//             value: value
//         }
//     });
//   }

//   export const aditContact = (name, phone, id) => dispatch => {
//     const contact = {name, phone};
//     axios.put(contactItemUrl(id), { data: contact })
//     .then(({ data }) => {
//     dispatch({
//         type: ONEDITCONTACT,
//         contact: {
//         name, phone, id
//         }
//     });
//     dispatch(setContacts(data))
//     });
// };
  

// export const searchInputChange = inputValue => dispatch => {
//     axios.get(contactsListUrl())
//     .then(({ data }) => {
//         dispatch(setContacts(data))
//         dispatch({
//             type: ONSEARCHINPUTCHANGE,
//             data: { 
//                 value: inputValue
//                 }
//         })
//     })
    
// }