import React, { useReducer } from 'react';
import axios from 'axios';
import CredContext from './credContext';
import credReducer from './credReducer';
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

const CredState = props => {
  const initialState = {
    creds: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(credReducer, initialState);

  // Get Creds
  const getCreds = async () => {
    try {
      const res = await axios.get('/api/creds');

      dispatch({
        type: GET_CREDS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CRED_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add cred
  const addCred = async cred => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/creds', cred, config);

      dispatch({ type: ADD_CRED, payload: res.data });
    } catch (err) {
      dispatch({ type: CRED_ERROR, payload: err.response.msg });
    }
  };

  // Delete cred
  const deleteCred = async id => {
    try {
      await axios.delete(`/api/creds/${id}`);

      dispatch({ type: DELETE_CRED, payload: id });
    } catch (err) {
      dispatch({ type: CRED_ERROR, payload: err.response.msg });
    }
  };

  // Update cred
  const updateCred = async cred => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.put(`/api/creds/${cred._id}`, cred, config);

      dispatch({ type: UPDATE_CRED, payload: res.data });
    } catch (err) {
      dispatch({ type: CRED_ERROR, payload: err.response.msg });
    }
  };

  // Clear Creds
  const clearCreds = () => {
    dispatch({ type: CLEAR_CREDS });
  };

  // Set current cred
  const setCurrent = cred => {
    dispatch({ type: SET_CURRENT, payload: cred });
  };
  // Clear current cred
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
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
        error: state.error,
        getCreds,
        addCred,
        deleteCred,
        setCurrent,
        clearCurrent,
        updateCred,
        filterCreds,
        clearFilter,
        clearCreds
      }}
    >
      {props.children}
    </CredContext.Provider>
  );
};

export default CredState;
