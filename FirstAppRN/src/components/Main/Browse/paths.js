import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import PathItem from '../Browse/path-item';

const Paths = (props) => {
    const listPath = [
        {
            id: 1,
            name: 'Infomation technology',
            num: 14,
            image: require('../../../../assets/img2.jpg')
        },
        {
            id: 2,
            name: 'Web security',
            num: 10,
            image: require('../../../../assets/img2.jpg')
        },
        {
            id: 3,
            name: 'G Suite Adminitration',
            num: 6,
            image: require('../../../../assets/img2.jpg')
        },
        {
            id: 4,
            name: 'UI Testing',
            num: 2,
            image: require('../../../../assets/img2.jpg')
        },
    ]
    const renderListItems = (listPath, navigation) => {
        return listPath.map(item => <PathItem item={item} navigation={navigation} />)
    };
    return <View>
        <View>
            <Text style={{marginTop: 10, marginLeft: 5, fontSize: 16, fontWeight:'bold'}}>{props.title}</Text>
        </View>
        <ScrollView horizontal={true}>
            {renderListItems(listPath, props.navigation)}
        </ScrollView>
    </View>
}

export default Paths