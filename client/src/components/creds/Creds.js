import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CredContext from '../../context/cred/credContext';
import CredItem from './CredItem';
import Spinner from '../layout/Spinner';

const Creds = () => {
  const credContext = useContext(CredContext);

  const { creds, filtered, getCreds, loading } = credContext;

  useEffect(() => {
    getCreds();
    // eslint-disable-next-line
  }, []);

  if (creds !== null && creds.length === 0 && !loading) {
    return <h4>There are no creds, please add one</h4>;
  }

  return (
    <Fragment>
      {creds !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(cred => (
                <CSSTransition key={cred._id} timeout={500} classNames="item">
                  <CredItem cred={cred} />
                </CSSTransition>
              ))
            : creds.map(cred => (
                <CSSTransition key={cred._id} timeout={500} classNames="item">
                  <CredItem cred={cred} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Creds;
