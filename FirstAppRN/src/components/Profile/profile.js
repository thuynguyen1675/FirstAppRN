import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import ListCategoryItem from '../Main/ListCategories/ListCategoryItem/list-category-item';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = (props) => {
  return <ScrollView style={{marginLeft: 10}}>

      <View style={{flexDirection:'row', alignItems:'center', marginTop: 10}}>
          <Image source={require('../../../assets/mai-phan.jpg')} style={{width:80, height: 80, borderRadius: 40 }}/>
          <Text style={{fontSize: 26, fontWeight: 'bold', marginLeft: 10}}>Mai Phan</Text>
      </View>

      <View >
          <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 10, marginBottom: 7}}>Interests</Text>
          <ScrollView style={{flexDirection:'row'}}>
              <TouchableOpacity style={{flexDirection:'row', alignItems:'center', backgroundColor:'#D8D8D8', borderRadius: 17}}>
                  <Image source={require('../../../assets/checked.png')} style={{width:40, height:40}} />
                  <Text style={{marginLeft: 6,marginRight: 7, fontSize: 16, fontWeight:'bold'}}>Java</Text>
              </TouchableOpacity>              
          </ScrollView>
      </View>

      <View>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 10, marginBottom: 7}}>Activity insights (last 30 days)</Text>
      </View>
      <View style={{marginTop:10}}>
          <Text>TOTAL ACTIVE DAYS</Text>
          <Text style={{fontWeight: 'bold'}}>0 day streak</Text>
      </View>
      <View style={{marginTop:10}}>
          <Text>MOST ACTIVE TIME OF DAY</Text>
          <Text style={{fontWeight: 'bold'}}>7:00 AM</Text>
      </View>
      <View style={{marginTop:10}}>
          <Text>MOST VIEWED SUBJECT</Text>
          <Text style={{fontWeight: 'bold'}}>N/A</Text>
      </View>
  </ScrollView>
}

const styles = StyleSheet.create({
    
});

export default Profile;
