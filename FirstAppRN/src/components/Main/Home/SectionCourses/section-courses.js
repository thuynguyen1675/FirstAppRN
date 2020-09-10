import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item';

const SectionCourses = (props) => {
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
            props.navigation.navigate('ListCourses', {title: props.title});
          }}>
          <Text>See more</Text>
          <Image source={require('../../../../../assets/more-black.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        {renderListItems(props.data, props.navigation)}
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
