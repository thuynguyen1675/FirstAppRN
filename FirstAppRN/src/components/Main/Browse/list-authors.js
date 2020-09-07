import React, {Component} from 'react';
import {StyleSheet, ScrollView, Image, Text, View} from 'react-native';

const ListAuthors = () => {
  const authors = [
    {
      id: 1,
      name: 'Huy Nguyen',
      ava: require('../../../../assets/huy-nguyen.jpg'),
    },
    {
      id: 2,
      name: 'Phan Linh',
      ava: require('../../../../assets/phan-linh.jpeg'),
    },
    {
      id: 3,
      name: 'Mai Phan',
      ava: require('../../../../assets/mai-phan.jpg'), //phai de require o day neu de o duoi se ko chay dc
    },
  ];
  const renderAuthor = (authors) => {
    return authors.map((item) => {
      return (
        <View style={styles.item}>
          <Image source={item.ava} style={styles.image} key={item.id} />
          <Text>{item.name}</Text>
        </View>
      );
    });
  };
  return (
    <View>
      <View>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 5,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Top authors
        </Text>
      </View>
      <ScrollView horizontal={true}>{renderAuthor(authors)}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  item: {
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
});

export default ListAuthors;
