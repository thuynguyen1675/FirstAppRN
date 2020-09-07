import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import StarRating from 'react-native-star-rating';

const ListCourseItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => props.navigation.navigate('Detail')}>
      <Image source={props.item.thumnail} style={styles.image} />
      <View style={{marginTop: 7}}>
        <Text>{props.item.title}</Text>
        <Text>{props.item.author}</Text>
        <Text>{`${props.item.release} - ${props.item.duration}`}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: 100}}>
            {/* <StarRating
      disabled={false}
      maxStars={5}
      starSize={20}
      fullStarColor='yellow'
      rating={props.item.stars}        
      selectedStar={(rating) => this.onStarRatingPress(rating)}
    /> */}
          </View>
          <Text>{`  (${props.item.evaluation})`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 5,
    //width: 100,
    height: 100,
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ListCourseItem;
