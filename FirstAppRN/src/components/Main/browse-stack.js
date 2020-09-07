import React, { Component } from 'react';
import {  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Browse from './Browse/browse';
import Detail from '../Detail/detail';
import Profile from '../Profile/profile';
import ListCourses from './ListCourses/list-courses';

const Stack = createStackNavigator();

const BrowseStack = (props) => {
    return <Stack.Navigator>
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ListCourses" component={ListCourses} options={{ headerShown: false }} />
    </Stack.Navigator>
}
