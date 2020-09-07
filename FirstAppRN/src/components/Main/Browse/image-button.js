import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const ImageButton = (props) => {
  return (
    <ImageBackground style={styles.all} source={props.image}>
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  all: {
    margin: 10,
    height: 120,
  },
  text: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageButton;
