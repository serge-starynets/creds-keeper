import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import CredContext from '../../context/cred/credContext';

const Navbar = ({ title, icon1, icon2 }) => {
  const authContext = useContext(AuthContext);
  const credContext = useContext(CredContext);

  const { logout, isAuthenticated, user } = authContext;
  const { clearCreds } = credContext;

  const onLogout = () => {
    logout();
    clearCreds();
  }

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a href="#!" onClick={onLogout}>
          <i className="fas fa-sign-out-alt" />
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon1} /> <i className={icon2} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon1: PropTypes.string,
  icon2: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Credentials keeper',
  icon1: 'fas fa-info-circle',
  icon2: 'fas fa-user-circle'
};

export default Navbar;
