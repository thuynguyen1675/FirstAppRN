import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ListCategoryItem = (props) => {
  return <View style={styles.item}>
      <Text>{props.item.name}</Text>
  </View>

}

const styles = StyleSheet.create({
    item: {
        width: 200,
        height: 100,
        borderWidth: 1,
        margin: 5
    },
    all: {
        height: 240,
        borderWidth: 1,
        
    }
});

export default ListCategoryItem;
