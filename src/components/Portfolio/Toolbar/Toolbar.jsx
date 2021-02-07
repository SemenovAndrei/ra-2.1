import React from "react";
import "./Toolbar.css";
import PropTypes from "prop-types";

function Toolbar(props) {
  let { filter, selected } = props;

  if (filter === selected) {
    filter = [filter, "toolbar__btn toolbar__btn-active"];
  } else {
    filter = [filter, "toolbar__btn"];
  }

  const onSelect = () => {
    props.onSelect(filter[0]);
  };

  return (
    <button onClick={onSelect} className={filter[1]}>
      {filter[0]}
    </button>
  );
}

Toolbar.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Toolbar;
