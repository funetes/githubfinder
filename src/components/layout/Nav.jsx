import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Nav = ({ icon, title }) => (
  <nav className='navbar bg-primary'>
    <h1>
      <i className={icon} /> {title}
    </h1>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  </nav>
);

Nav.defaultProps = {
  icon: "fab fa-github",
  title: "Github Finder"
};

Nav.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Nav;
