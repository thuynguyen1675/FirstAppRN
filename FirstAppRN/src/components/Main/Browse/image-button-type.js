import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const ImageButtonType = (props) => {
  return (
    <View>
      <ImageBackground style={styles.all} source={props.item.image1}>
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.text}>{props.item.name}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    margin: 5,
    height: 70,
    width: 120,
  },
  text: {
    fontSize: 20,
    //color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageButtonType;
