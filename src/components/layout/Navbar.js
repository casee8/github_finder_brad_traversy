import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; //impt

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <Link to='/'>
        <h1>
          <i className={icon}></i> {title}
        </h1>
      </Link>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

// static defaultProps = {
//   title: "Github Finder",
//   icon: "fab fa-github",
// };

// static propTypes = {
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
// }

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
