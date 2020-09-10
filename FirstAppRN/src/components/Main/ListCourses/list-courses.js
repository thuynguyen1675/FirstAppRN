import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ListCourseItem from './ListCourseItem/list-course-item';
import * as callAPI from '../../../Core/callAPI';
const ListCourses = (props) => {
  const {title} = props.route.params;
  const [topNew, setTopNew] = useState([]);
  const [topSell, setTopSell] = useState([]);
  const [topRate, setTopRate] = useState([]);
  let body = {
    limit: 100,
    page: 1,
  };
  useEffect(() => {
    async function topNew() {
      const list = await (await callAPI.callApiGetTopNew(body)).data.payload;
      setTopNew(list);
    }
    async function topSell() {
      const list = await (await callAPI.callApiGetTopSell(body)).data.payload;
      setTopSell(list);
    }
    async function topRate() {
      const list = await (await callAPI.callApiGetTopRate(body)).data.payload;
      setTopRate(list);
    }
    topNew();
    topSell();
    topRate();
  }, []);
  const renderListItems = (courses, navigation) => {
    return courses.map((item) => (
      <ListCourseItem item={item} navigation={navigation} key={item.id} />
    ));
  };
  const renderSeeMore = (title, topNew, topRate, topSell) => {
    if (title == 'Top New')
      return (
        <ScrollView>{renderListItems(topNew, props.navigation)}</ScrollView>
      );
    if (title == 'Top Rate')
      return (
        <ScrollView>{renderListItems(topRate, props.navigation)}</ScrollView>
      );
    if (title == 'Top Sell')
      return (
        <ScrollView>{renderListItems(topSell, props.navigation)}</ScrollView>
      );
  };
  return (
    <View>
      <Text>{title}</Text>
      {renderSeeMore(title, topNew, topRate, topSell)}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListCourses;
