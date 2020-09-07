import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';


const Register = () => {
  return <View style={styles.general}>
      <Image source={require('../../../../assets/money.png')} />
      <Text style={styles.name}>ITEDU</Text>
      <TouchableHighlight style={[styles.TouchableHighlight, styles.signIn]}>
          <Text>Sign in</Text>
      </TouchableHighlight>
      
      <TouchableHighlight style={[styles.TouchableHighlight, styles.otherBtn]}>
          <Text>Subscribe to Itedu</Text>
      </TouchableHighlight>
      <TouchableHighlight style={[styles.TouchableHighlight, styles.otherBtn]}>
          <Text>Explore without a Subscribe</Text>
      </TouchableHighlight>
  </View>
}

const styles = StyleSheet.create({
    general: {
        marginTop: 140,  
        margin: 10  ,
        alignItems: 'center'  
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red'
    },
    label: {
        marginBottom: 3,
    },
    
    TouchableHighlight: {      
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 340,
        marginTop: 10,
        borderRadius: 6,
        
    },
   
    signIn:{
        backgroundColor: '#00CCFF'
    },
    otherBtn: {
        borderColor: '#00CCFF',
        borderWidth: 1,
    },
    
});

export default Register;
