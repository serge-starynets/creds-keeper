import React, { useReducer } from 'react';
import uuid from 'uuid';
import CredContext from './credContext';
import credReducer from './credReducer';
import {
  ADD_CRED,
  DELETE_CRED,
  SET_CURRENT,
  CELAR_CURRENT,
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
    ]
  };

  const [state, dispatch] = useReducer(credReducer, initialState);

  // Add cred

  // Delete cred

  // Set current cred

  // Clear current cred

  // Update cred

  // Filter creds

  // Clear filter

  return (
    <CredContext.Provider
      value={{
        creds: state.creds
      }}
    >
      {props.children}
    </CredContext.Provider>
  );
};

export default CredState;
