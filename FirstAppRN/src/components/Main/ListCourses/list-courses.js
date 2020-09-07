import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ListCourseItem from './ListCourseItem/list-course-item';

const ListCourses = (props) => {
    const courses = [
        {
            id: 1,
            title: 'React native',
            author: 'Mai Phan',
            release: 'May 6, 2020',
            level: 'Intermediate',
            duration: '32 hours',
            evaluation: 653,
            stars: 3.5,
            thumnail: require('../../../../assets/course.jpg')
        },
        {
            id: 2,
            title: 'IOS',
            author: 'Huy Nguyen',
            release: 'April 6, 2020',
            level: 'Intermediate',
            duration: '25 hours',
            evaluation: 653,
            stars: 4,
            thumnail: require('../../../../assets/course.jpg')
        },
        {
            id: 3,
            title: 'Android',
            author: 'Le Huy Hoang',
            release: 'November 17, 2019',
            level: 'Intermediate',
            duration: '40 hours',
            evaluation: 653,
            stars: 4,
            thumnail: require('../../../../assets/course.jpg')
        },

    ];
    const renderListItems = (courses, navigation) => {
        return courses.map(item => <ListCourseItem item={item} navigation={navigation} />)
    };
  return <View>
      <Text>List xdsd</Text>
   <ScrollView>
      {renderListItems(courses, props.navigation)}
  </ScrollView>
  </View>
}

const styles = StyleSheet.create({
    
});

export default ListCourses;