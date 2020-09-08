import React, {Component, useEffect, useState} from 'react';
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
import {coursesNew} from '../../../../Core/category';
//import {useState} from 'react';

const SectionCourses = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function ptct() {
      const item = await coursesNew();
      setData(item);
    }
    ptct();
  }, []);

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
        {renderListItems(data, props.navigation)}
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
