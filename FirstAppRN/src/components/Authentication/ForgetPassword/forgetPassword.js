import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements'




const ForgetPassword = () => { 
    const list = [
        {
          title: 'Forgot your password',
          icon: 'av-timer'
        },
        {
          title: 'Subscribe to ITEDU',
          icon: 'flight-takeoff'
        },       
        {
            title: 'Contact ITEDU support',
            icon: 'flight-takeoff'
        },
     
      ];  
  return   <View style={styles.list}>
  {
    list.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        // leftIcon={{ name: item.icon }}
        bottomDivider
        chevron
      />
    ))
  }
</View>
}

const styles = StyleSheet.create({
    list:{
        marginTop: 100,
    },
   
});

export default ForgetPassword;
