import React from "react";
// stateless functional component

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#hh">
        React Crash Course
        <span className="badge badge-secondary badge-pill">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
