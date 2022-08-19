import React from "react";
import AuthContext from "./authContext";

export default function AuthState(props) {
  const hello = 'hello this is from the context';
  const value = {
    hello: hello,
  };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}
