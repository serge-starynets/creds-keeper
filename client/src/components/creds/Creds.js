import React, { Fragment, useContext } from 'react';
import CredContext from '../../context/cred/credContext'
import CredItem from './CredItem';

const Creds = () => {
  const credContext = useContext(CredContext);

  const { creds } = credContext;

  return (
    <Fragment>
      {creds.map(cred => (
        <CredItem key={cred.id} cred={cred}/>
      ))}
    </Fragment>
  )
}

export default Creds
