import React, { Component } from 'react';
import { StyleSheet, View,Image, Text, TouchableOpacity } from 'react-native';
//import StarRating from 'react-native-star-rating';

// require('../../../../../assets/money.png')

const SectionCoursesItem = (props) => {
  return <TouchableOpacity style = {styles.item} onPress={()=>props.navigation.navigate('Detail')}>
      <Image source={props.item.thumnail} style={styles.image} />
     <View style = {{marginTop: 7, marginLeft: 7}}>
        <Text>{props.item.title}</Text>
        <Text>{props.item.author}</Text>
        <Text>{`${props.item.release} - ${props.item.duration}`}</Text>
        {/* <View style={{flexDirection: 'row'}}>
        <View style={{width: 100}}>
      <StarRating
        disabled={false}
        maxStars={5}
        starSize={20}
        fullStarColor='yellow'
        rating={props.item.stars}        
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
      </View>
      <Text>{`  (${props.item.evaluation})`}</Text>
      </View> */}
     </View>
  </TouchableOpacity>
};

const styles = StyleSheet.create({
    item:{
        margin: 5,
        width: 200,
        height: 200,
        backgroundColor: 'lightgrey'
    },
    image: {
        width:200,
        height: 100
    }
});
export default SectionCoursesItem;
