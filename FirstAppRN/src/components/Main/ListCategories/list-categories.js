import React, { Component } from 'react';
import { ScrollView, StyleSheet, FlatList, View } from 'react-native';
import ListCategoryItem from './ListCategoryItem/list-category-item';

const ListCategories = (props) => {
  const listCat = [
      {
          id:1,
          name: 'Economy'
      },
      {
        id:2,
        name: 'Music'
    },
    {
        id: 3,
        name: 'Science'
    },
    {
        id: 4,
        name: 'IT'
    },
    {
        id: 5,
        name: 'Solf skill'
    },
    {
        id: 6,
        name: 'Language'
    },
  ];

//   const renderCatItem = (listCat) =>{
//       return listCat.map(item => <ListCategoryItem item={item} />)
//   }
  return <ScrollView>
  <FlatList style={styles.all} data={listCat} renderItem = {({item}) => <ListCategoryItem item={item} />} numColumns={2} >
    
  </FlatList>
  </ScrollView>
}

const styles = StyleSheet.create({
    all: {
        marginTop: 100,
        flexWrap:'wrap',
        height: 250
    }
});

export default ListCategories;
