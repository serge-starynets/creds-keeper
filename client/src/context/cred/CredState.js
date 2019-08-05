import React, { useReducer } from 'react';
import uuid from 'uuid';
import CredContext from './credContext';
import credReducer from './credReducer';
import {
  ADD_CRED,
  DELETE_CRED,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CRED,
  FILTER_CRED,
  CLEAR_FILTER
} from '../types';

const CredState = props => {
  const initialState = {
    creds: [
      {
        id: 1,
        title: 'Clarify API',
        login: 'svsd@bigmir.net',
        password: 'clarify',
        type: 'professional',
        description: 'Image recognition API'
      },
      {
        id: 2,
        title: 'Font Awesome',
        login: 'starynets.sergey@gmail.com',
        password: 'FontAwesome2#',
        type: 'professional',
        description: 'Frontend icons'
      },
      {
        id: 3,
        title: 'Testing',
        login: 'test@test.net',
        password: 'tteesstt',
        type: 'other',
        description: 'testing creds'
      }
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(credReducer, initialState);

  // Add cred
  const addCred = cred => {
    cred.id = uuid.v4();
    dispatch({ type: ADD_CRED, payload: cred });
  };

  // Delete cred
  const deleteCred = id => {
    dispatch({ type: DELETE_CRED, payload: id });
  };

  // Set current cred
  const setCurrent = cred => {
    dispatch({ type: SET_CURRENT, payload: cred });
  };
  // Clear current cred
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update cred
  const updateCred = cred => {
    dispatch({ type: UPDATE_CRED, payload: cred });
  };

  // Filter creds
  const filterCreds = text => {
    dispatch({ type: FILTER_CRED, payload: text });
  };

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <CredContext.Provider
      value={{
        creds: state.creds,
        current: state.current,
        filtered: state.filtered,
        addCred,
        deleteCred,
        setCurrent,
        clearCurrent,
        updateCred,
        filterCreds,
        clearFilter
      }}
    >
      {props.children}
    </CredContext.Provider>
  );
};

export default CredState;
