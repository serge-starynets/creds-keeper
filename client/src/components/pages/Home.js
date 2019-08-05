import React from 'react';
import Creds from '../creds/Creds';
import CredForm from '../creds/CredForm';

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <CredForm />
      </div>
      <div>     
        <Creds />
      </div>
    </div>
  );
};

export default Home;
