import React from "react";
import PropTypes from "prop-types";

const Message = ({ text }) => <span>{text}</span>;

Message.propTypes = {
  text: PropTypes.string
};
export default Message;
