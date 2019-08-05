import {
  ADD_CRED,
  DELETE_CRED,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CRED,
  FILTER_CRED,
  CLEAR_FILTER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_CRED:
      return {
        ...state,
        creds: [...state.creds, action.payload]
      };
    case DELETE_CRED:
      return {
        ...state,
        creds: state.creds.filter(cred => cred.id !== action.payload)
      };
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
          cred.id === action.payload.id ? action.payload : cred
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
    default:
      return state;
  }
};
