import PropTypes from "prop-types";
import React from "react";

const Bye = ({ name }) => {
  return <div>안녕히가세요, {name}</div>;
};

Bye.propTypes = {
  name: PropTypes.string
};

export default Bye;
