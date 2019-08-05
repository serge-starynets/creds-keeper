import {
  ADD_CRED,
  DELETE_CRED,
  SET_CURRENT,
  CELAR_CURRENT,
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
    default:
      return state;
  }
};
