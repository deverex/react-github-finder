import React, { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertRedcer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertRedcer, initialState);

  //Set Alert
  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg, type } });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 4000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
