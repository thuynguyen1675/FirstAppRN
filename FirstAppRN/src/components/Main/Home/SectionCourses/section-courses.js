import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item';

const SectionCourses = (props) => {
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
      thumnail: require('../../../../../assets/course.jpg'),
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
      thumnail: require('../../../../../assets/course.jpg'),
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
      thumnail: require('../../../../../assets/course.jpg'),
    },
  ];
  const renderListItems = (courses, navigation) => {
    return courses.map((item) => (
      <SectionCoursesItem item={item} navigation={navigation} key={item.id} />
    ));
  };

  return (
    <View style={styles.all}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            props.navigation.navigate('ListCourses');
          }}>
          <Text>See more</Text>
          <Image source={require('../../../../../assets/more-black.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        {renderListItems(courses, props.navigation)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    marginTop: 30,
    marginLeft: 20,
  },
  title: {
    color: '#0080FF',
    fontWeight: 'bold',
  },
});

export default SectionCourses;
