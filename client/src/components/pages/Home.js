import React from 'react';
import Creds from '../creds/Creds';
import CredForm from '../creds/CredForm';
import CredFilter from '../creds/CredFilter';

const Home = () => {
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
