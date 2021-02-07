import React, { useState } from "react";
import Toolbar from "./Toolbar/Toolbar";
import projects from "./projects";
import ProjectList from "./ProjectList/ProjectList";
import "./Portfolio.css";
// import PropTypes from "prop-types";

function Portfolio() {
  const [selected, setSelected] = useState("All");

  const filters = ["All", "Websites", "Flayers", "Business Cards"];

  const projectsFiltered = projects.filter((e) => {
    if (selected === "All" || e.category === selected) {
      return e;
    }
    return null;
  });

  const projectsToColumns = [];

  const firstColumn = projectsFiltered.length / 3;

  if (projectsFiltered.length % 3 === 0) {
    projectsToColumns.push([projectsFiltered.splice(0, firstColumn), 1]);
  } else {
    projectsToColumns.push([projectsFiltered.splice(0, firstColumn + 1), 1]);
  }

  const secondColumn = projectsFiltered.length / 2;

  if (projectsFiltered.length % 2 === 0) {
    projectsToColumns.push([projectsFiltered.splice(0, secondColumn), 2]);
  } else {
    projectsToColumns.push([projectsFiltered.splice(0, secondColumn + 1), 2]);
  }

  projectsToColumns.push([projectsFiltered, 3]);

  const onSelectFilter = (filter) => {
    setSelected((prevSelected) => (prevSelected = filter));
  };

  return (
    <div className="portfolio__wrapper">
      <div className="portfolio__filters">
        {filters.map((o) => (
          <Toolbar
            key={o}
            filter={o}
            selected={selected}
            onSelect={onSelectFilter}
          />
        ))}
      </div>
      <div className="portfolio__image-container">
        {projectsToColumns.map((column) => (
          <div key={column[1]} className="portfolio__column">
            {column[0].map((o) => (
              <ProjectList key={o.id} img={o.img} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// Portfolio.propTypes = {};

export default Portfolio;
