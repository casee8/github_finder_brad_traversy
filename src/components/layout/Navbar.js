import React from "react";
import PropTypes from "prop-types"; //impt <= shortcut
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}></i> {title}
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
