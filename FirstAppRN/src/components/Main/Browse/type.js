import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ImageButtonType from '../Browse/image-button-type';

const Type = (props) => {
  const listType = [
    {
      id: 1,
      title1: 'IT',
      image1: require('../../../../assets/img1.jpg'),
      title2: 'Economy',
      image2: require('../../../../assets/img1.jpg'),
    },
    {
      id: 2,
      title1: 'Literature',
      image1: require('../../../../assets/img1.jpg'),
      title2: 'Science',
      image2: require('../../../../assets/img1.jpg'),
    },
    {
      id: 3,
      title1: 'Geography',
      image1: require('../../../../assets/img1.jpg'),
      title2: 'Skill',
      image2: require('../../../../assets/img1.jpg'),
    },
    {
      id: 4,
      title1: 'Math',
      image1: require('../../../../assets/img1.jpg'),
      title2: 'Languege',
      image2: require('../../../../assets/img1.jpg'),
    },
    {
      id: 5,
      title1: 'Physics',
      image1: require('../../../../assets/img1.jpg'),
      title2: 'Art',
      image2: require('../../../../assets/img1.jpg'),
    },
  ];
  const renderListType = (listType, navigation) => {
    return listType.map((item) => (
      <ImageButtonType item={item} navigation={navigation} key={item.id} />
    ));
  };
  return (
    <ScrollView horizontal={true}>
      {renderListType(listType, props.navigation)}
    </ScrollView>
  );
};

export default Type;
