import React, { useState } from 'react';
import AuthContext from './authContext';

export default function AuthState(props) {
  const [web3Provider, setWeb3Provider] = useState(null);

  const hello = 'hello this is from the context';
  const value = {
    hello,
    web3Provider,
    setWeb3Provider,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
