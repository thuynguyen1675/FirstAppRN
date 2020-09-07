import React, { Component, useState } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Alert, TouchableWithoutFeedback, Modal, TouchableOpacity, ImageBackground, Button } from 'react-native';
import SectionCourses from './SectionCourses/section-courses';

const Home = (props) => {
    console.log(props.modalVisible)
    const [isShow, setIsShow] = useState(true)
    const showBtn = <ImageBackground source={require('../../../../assets/background.jpg')} style={{ height: 130, justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row' }}>
        <Text style={styles.Welcome}>Welcome to Pluralsight</Text>
        <TouchableWithoutFeedback onPress={() => setIsShow(false)} >
            <Image source={require('../../../../assets/collapse-arrow.png')} style={{ width: 30, height: 30 }} />
        </TouchableWithoutFeedback>
    </ImageBackground>

    const hideBtn = <ImageBackground source={require('../../../../assets/background.jpg')} style={{ height: 130, justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'row' }}>
        <TouchableWithoutFeedback onPress={() => setIsShow(true)} >
            <Image source={require('../../../../assets/expan-arrow.png')} style={{ width: 30, height: 30 }} />
        </TouchableWithoutFeedback>
    </ImageBackground>
    return <ScrollView>
        {isShow ? showBtn : hideBtn}
        {isShow ? <Text style={styles.Intro}>With Pluralsight, you can build and apply skills in top technologies. You have free access to Skill IQ, Role IQ, a limited library of courses and a weekly rotation of new courses.</Text>
            : null}
        <SectionCourses title="Courses learning" navigation={props.navigation} />
        <SectionCourses title="Path" navigation={props.navigation} />
        <SectionCourses title="Channel" navigation={props.navigation} />
        <SectionCourses title="Bookmarks" navigation={props.navigation} />
    </ScrollView>
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
}
});

export default Home;