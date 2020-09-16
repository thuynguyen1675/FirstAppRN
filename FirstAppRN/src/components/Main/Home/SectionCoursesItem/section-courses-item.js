import React, {Component, useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import * as callAPI from '../../../../Core/callAPI';
const SectionCoursesItem = (props) => {
  const token = useSelector((state) => state.user.token);
  const [favor, setFavor] = useState(false);
  const likeCourse = () => {
    let body = {
      courseId: props.item.id,
    };
    callAPI.callApiPostLikeCourse(body, token).then(() => setFavor(!favor));
  };
  useEffect(() => {
    async function getFavor() {
      let dataFavor = [];
      await callAPI.callApiGetFavoriteCourses(token).then((res) => {
        dataFavor = res.data.payload;
      });

      let arrayID = [];
      for (let i = 0; i < dataFavor.length; i++) {
        arrayID.push(dataFavor[i].id);
      }
      if (arrayID.includes(props.item.id)) {
        setFavor(true);
      }
    }
    getFavor();
  }, []);

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => props.navigation.navigate('Detail', {course: props.item})}>
      <Image source={{uri: props.item['imageUrl']}} style={styles.image} />
      <View style={{marginTop: 7, marginLeft: 7}}>
        <Text>{props.item.title}</Text>
        <Text>{props.item['instructor.user.name']}</Text>
        <TouchableOpacity onPress={likeCourse}>
          {favor == true ? (
            <Image
              source={require('../../../../../assets/favorite-icon-red.png')}
              style={{width: 20, height: 20}}
            />
          ) : (
            <Image
              source={require('../../../../../assets/favorite-icon-black.png')}
              style={{width: 20, height: 20}}
            />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 5,
    width: 200,
    height: 200,
    backgroundColor: 'lightgrey',
  },
  image: {
    width: 200,
    height: 100,
  },
});
export default SectionCoursesItem;
