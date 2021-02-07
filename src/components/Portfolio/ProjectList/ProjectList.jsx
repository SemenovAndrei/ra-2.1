import React from "react";
import "./ProjectList.css";
import PropTypes from "prop-types";

function ProjectList(props) {
  const img = props.img;

  const altArray = img.split("/");

  const altName = altArray[altArray.length - 1];

  return <img className="projectList__item" src={img} alt={altName}></img>;
}

ProjectList.propTypes = {
  img: PropTypes.string.isRequired,
};

export default ProjectList;
