import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Skill from '../Browse/skill';

const ListSkill = (props) => {
  return (
    <View>
      <View>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 5,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {props.title}
        </Text>
      </View>
      <ScrollView horizontal={true}>
        <Skill title="Java" />
        <Skill title="Javascript" />
        <Skill title="C++" />
        <Skill title="Angular" />
        <Skill title="ReactJS" />
        <Skill title="Python" />
        <Skill title="IOS" />
        <Skill title="DevOps" />
      </ScrollView>
    </View>
  );
};

export default ListSkill;
