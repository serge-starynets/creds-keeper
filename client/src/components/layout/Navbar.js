import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon1, icon2 }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon1} /><i className={icon2} />{title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link> 
        </li>
      </ul>
      
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon1: PropTypes.string,
  icon2: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Credentials keeper',
  icon1: 'fas fa-info-circle',
  icon2: 'fas fa-user-circle'
}

export default Navbar
