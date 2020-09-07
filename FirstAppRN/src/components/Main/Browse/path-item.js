import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const PathItem = (props) => {
  return <TouchableOpacity style={styles.touch}>
      <Image source={props.item.image} style={styles.image} />
      <Text style={styles.name}>{props.item.name}</Text>
      <Text style={styles.num}>{props.item.num} courses</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 150
    },
    touch:{
        margin: 5,
        width:150,
        height: 200,
        color: 'red'
        
    },
    name:{
        margin: 5,
        fontSize: 20,
        
    },
    num:{
        margin: 5,
        fontSize: 12,
       
    }
    
});

export default PathItem
