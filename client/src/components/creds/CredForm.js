import React, { useState, useContext } from 'react';
import CredContext from '../../context/cred/credContext';

const CredForm = () => {
  const credContext = useContext(CredContext);

  const [cred, setCred] = useState({
    title: '',
    login: '',
    password: '',
    type: 'other',
    description: ''
  });

  const { title, login, password, type, description } = cred;

  const onChange = e => setCred({ ...cred, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    credContext.addCred(cred);
    setCred({
      title: '',
      login: '',
      password: '',
      type: 'other',
      description: ''
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">Add Cred</h2>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Login"
        name="login"
        value={login}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <h5>Cred Type</h5>
      <ul>
        <li>
          <input
            type="radio"
            name="type"
            value="social"
            checked={type === 'social'}
            onChange={onChange}
          />{' '}
          Social
        </li>
        <li>
          <input
            type="radio"
            name="type"
            value="educational"
            checked={type === 'educational'}
            onChange={onChange}
          />{' '}
          Educational
        </li>
        <li>
          <input
            type="radio"
            name="type"
            value="professional"
            checked={type === 'professional'}
            onChange={onChange}
          />{' '}
          Professional
        </li>

        <li>
          <input
            type="radio"
            name="type"
            value="entertainment"
            checked={type === 'entertainment'}
            onChange={onChange}
          />{' '}
          Entertainment
        </li>
        <li>
          <input
            type="radio"
            name="type"
            value="other"
            checked={type === 'other'}
            onChange={onChange}
          />{' '}
          Other
        </li>
        <li>
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={description}
            onChange={onChange}
          />
        </li>
      </ul>
      <div>
        <input
          type="submit"
          value="Add Cred"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default CredForm;
