import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/components/Authentication/Login/login';
import Main from './src/components/Main/main';

import {Provider} from 'react-redux';
import rootReducer from './reducer/index';
import {createStore} from 'redux';
const Stack = createStackNavigator();

export default function App() {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="main"
            component={Main}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
