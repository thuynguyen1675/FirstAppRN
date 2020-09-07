import {StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Main/Home/home';
import Search from '../Main/Search/search';
import Browse from '../Main/Browse/browse';
import StackHome from './stack-home';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Main = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'md-home' : 'md-home';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'Browse') {
            iconName = 'browsers';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={StackHome}
        options={{tabBarBadge: 3}}
      />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Browse" component={Browse} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Main;
