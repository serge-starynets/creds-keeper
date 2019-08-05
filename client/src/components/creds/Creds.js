import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CredContext from '../../context/cred/credContext';
import CredItem from './CredItem';

const Creds = () => {
  const credContext = useContext(CredContext);

  const { creds, filtered } = credContext;

  if (creds.length === 0) {
    return <h4>Please add a cred</h4>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map(cred => (
              <CSSTransition key={cred.id} timeout={500} classNames="item">
                <CredItem cred={cred} />
              </CSSTransition>
            ))
          : creds.map(cred => (
              <CSSTransition key={cred.id} timeout={500} classNames="item">
                <CredItem cred={cred} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Creds;
