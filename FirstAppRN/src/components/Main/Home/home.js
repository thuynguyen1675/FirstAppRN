import React, {Component, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import SectionCourses from './SectionCourses/section-courses';
import * as callAPI from '../../../Core/callAPI';
const Home = (props) => {
  const [topNew, setTopNew] = useState([]);
  const [topSell, setTopSell] = useState([]);
  const [topRate, setTopRate] = useState([]);
  let body = {
    limit: 5,
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
  const [isShow, setIsShow] = useState(true);
  const showBtn = (
    <ImageBackground
      source={require('../../../../assets/background.jpg')}
      style={{
        height: 130,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
      }}>
      <Text style={styles.Welcome}>Welcome to Pluralsight</Text>
      <TouchableWithoutFeedback onPress={() => setIsShow(false)}>
        <Image
          source={require('../../../../assets/collapse-arrow.png')}
          style={{width: 30, height: 30}}
        />
      </TouchableWithoutFeedback>
    </ImageBackground>
  );

  const hideBtn = (
    <ImageBackground
      source={require('../../../../assets/background.jpg')}
      style={{
        height: 130,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'row',
      }}>
      <TouchableWithoutFeedback onPress={() => setIsShow(true)}>
        <Image
          source={require('../../../../assets/expan-arrow.png')}
          style={{width: 30, height: 30}}
        />
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
  return (
    <ScrollView>
      {isShow ? showBtn : hideBtn}
      {isShow ? (
        <Text style={styles.Intro}>
          With Pluralsight, you can build and apply skills in top technologies.
          You have free access to Skill IQ, Role IQ, a limited library of
          courses and a weekly rotation of new courses.
        </Text>
      ) : null}
      <SectionCourses
        title="Top New"
        navigation={props.navigation}
        data={topNew}
      />
      <SectionCourses
        title="Top Sell"
        navigation={props.navigation}
        data={topSell}
      />
      <SectionCourses
        title="Top Rate"
        navigation={props.navigation}
        data={topRate}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Welcome: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  Intro: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    fontSize: 14,
  },
});

export default Home;
