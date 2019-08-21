import React, { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../type";

export default ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setSearchAlert = (mag, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { mag, type }
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
        payload: null
      });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setSearchAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
