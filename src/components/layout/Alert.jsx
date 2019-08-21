import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

export default () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    <>
      {alert !== null && (
        <div className={`alert alert-${alert.type}`}>
          <i className='fas fa-info-circle' /> {alert.mag}
        </div>
      )}
    </>
  );
};