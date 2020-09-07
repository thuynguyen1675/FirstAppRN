import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

const Skill = (props) => {
  return (
    <TouchableOpacity style={styles.touch}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touch: {
    height: 36,
    borderRadius: 50,
    backgroundColor: 'lightgrey',
    margin: 7,
  },
  text: {
    fontSize: 16,
    padding: 5,
  },
});

export default Skill;
