import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, Image, Text, View} from 'react-native';
import * as callAPI from '../../../Core/callAPI';
const ListAuthors = () => {
  const [listAuthors, setListAuthors] = useState([]);
  useEffect(() => {
    async function listAuthors() {
      let list = await (await callAPI.callApiGetAllAuthors()).data.payload;
      setListAuthors(list);
    }
    listAuthors();
  }, []);

  const renderAuthor = (authors) => {
    return authors.map((item) => {
      return (
        <View style={styles.item}>
          <Image
            source={{uri: item['user.avatar']}}
            style={styles.image}
            key={item.id}
          />
          <Text>{item['user.name']}</Text>
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
      <ScrollView horizontal={true}>{renderAuthor(listAuthors)}</ScrollView>
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
