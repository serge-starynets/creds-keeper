import {
  GET_CREDS,
  ADD_CRED,
  DELETE_CRED,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CRED,
  FILTER_CRED,
  CLEAR_CREDS,
  CLEAR_FILTER,
  CRED_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CREDS:
      return {
        ...state,
        creds: action.payload,
        loading: false
      }
    case ADD_CRED:
      return {
        ...state,
        creds: [action.payload, ...state.creds],
        loading: false
      };
    case DELETE_CRED:
      return {
        ...state,
        creds: state.creds.filter(cred => cred._id !== action.payload),
        loading: false
      };
    case CLEAR_CREDS:
      return {
        ...state,
        creds: null,
        filtered: null,
        error: null,
        current: null
      }  
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case UPDATE_CRED:
      return {
        ...state,
        creds: state.creds.map(cred =>
          cred._id === action.payload._id ? action.payload : cred
        )
      };
    case FILTER_CRED:
      return {
        ...state,
        filtered: state.creds.filter(cred => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return cred.title.match(regex) || cred.login.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case CRED_ERROR:
      return {
        ...state,
        error: action.payload
      }  
    default:
      return state;
  }
};
