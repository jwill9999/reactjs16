import React from "react";
import PropTypes from "prop-types";
import "./InLineError.css";

const InlineError = ({ text }) => (
  <span className="errorWarning"> {text} </span>
);

InlineError.propTypes = {
  text: PropTypes.string.isRequired
};
export default InlineError;
