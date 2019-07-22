import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = props => {
  const { title, icon } = props;
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

NavBar.defaultProps = {
  title: "GitHub Finder",
  icon: "fas fa-bacon"
};

NavBar.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
};
