import React, { useContext, useRef, useEffect } from 'react';
import CredContext from '../../context/cred/credContext';

const CredFilter = () => {
  const credContext = useContext(CredContext);
  const text = useRef('');

  const { filterCreds, clearFilter, filtered } = credContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterCreds(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Creds..."
        onChange={onChange}
      />
    </form>
  );
};

export default CredFilter;
