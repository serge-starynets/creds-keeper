import React, { useContext, useEffect } from 'react';
import Creds from '../creds/Creds';
import CredForm from '../creds/CredForm';
import CredFilter from '../creds/CredFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {

  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div>
        <CredForm />
      </div>
      <div>     
        <CredFilter />
        <Creds />
      </div>
    </div>
  );
};

export default Home;
