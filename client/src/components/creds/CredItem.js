import React, { useContext} from 'react';
import PropTypes from 'prop-types';
import CredContext from '../../context/cred/credContext';

const CredItem = ({ cred }) => {
  const credContext = useContext(CredContext)
  const { id, title, login, password, type, description } = cred;
  const { deleteCred, setCurrent, clearCurrent } = credContext;

  const onDelete = () => {
    deleteCred(id);
    clearCurrent();
  }

  const badgeType = type => {
    switch (type) {
      case 'social':
        return 'badge-social';
      case 'entertainment':
        return 'badge-entertainment';
      case 'educational':
        return 'badge-educational';
      case 'professional':
        return 'badge-professional';
      default:
        return 'badge-other';
    }
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {title}{' '}
        <span style={{ float: 'right' }} className={'badge ' + badgeType(type)}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {login && (
          <li>
            <i className="fas fa-user-circle" /> {login}
          </li>
        )}
        {password && (
          <li>
            <i className="fas fa-key" /> {password}
          </li>
        )}
        {description && (
          <li style={{ fontStyle: 'italic', color: '#777' }}>
            <i className="fas fa-book" /> {description}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={() => setCurrent(cred)}>Edit</button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
      </p>
    </div>
  );
};

CredItem.propTypes = {
  cred: PropTypes.object.isRequired
};

export default CredItem;
