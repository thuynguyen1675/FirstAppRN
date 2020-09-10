import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ImageButton from './image-button';
import Type from './type';
import ListSkill from './list-skill';
import Paths from './paths';
import ListAuthors from './list-authors';

const Browse = (props) => {
  const new_release = 'New\n Release';
  return (
    <ScrollView style={styles.all}>
      <ImageButton
        title={new_release}
        image={require('../../../../assets/img1.jpg')}
      />
      <ImageButton
        title="Recommended for you"
        image={require('../../../../assets/img2.jpg')}
      />
      <Type />
      <ListSkill title="Popular Skills" />
      <Paths navigation={props.navigation} title="Paths" />
      <ListAuthors />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  all: {
    marginTop: 35,
  },
});

export default Browse;
