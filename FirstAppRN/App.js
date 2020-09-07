import React from 'react';
// import { StyleSheet} from 'react-native';
// import Home from './src/components/Main/Home/home';
// import Register from './src/components/Authentication/Register/register';
// import ForgetPassword from './src/components/Authentication/ForgetPassword/forgetPassword';
// import ListCourses from "./src/components/Main/ListCourses/list-courses";
// import ListCategories from './src/components/Main/ListCategories/list-categories';
// import Search from './src/components/Main/Search/search';
// import Detail from './src/components/Detail/detail';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/components/Authentication/Login/login';
import Main from './src/components/Main/main';
// import {ThemeContext, themes} from './src/components/theme-context'
// import ModalHeader from './src/components/Main/Home/modal-header'
const Stack = createStackNavigator();

export default function App() {
  //   const [theme, setTheme] = useState(themes.light)

  return (
    // <ThemeContext.Provider value={{theme, setTheme}}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="main"
          component={Main}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Courses" component={ListCourses} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    // </ThemeContext.Provider>
  );
}
