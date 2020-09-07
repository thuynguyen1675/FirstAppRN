import React, {useState} from 'react';
import {View} from 'react-native';

const AutheticationContext = React.createContext();

const AuthenticationProvider = (props) => {
  const [authentication, setAuthentication] = useState();

  return (
    <AuthenticationContext.Provider value={{authentication, setAuthentication}}>
      {props.childeren}
    </AuthenticationContext.Provider>
  );
};

export {AuthenticationProvider, AutheticationContext};
