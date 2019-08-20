import React from "react";
import PropTypes from "prop-types";

const Alert = ({ alert }) => (
  <>
    {alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.mag}
      </div>
    )}
  </>
);

Alert.propTypes = {
  mag: PropTypes.string,
  type: PropTypes.string
};

export default Alert;
