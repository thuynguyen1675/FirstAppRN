import React, {Component, useState} from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <View style={styles.SectionStyle}>
      <Image
        source={require('../../../../assets/search.png')}
        style={styles.ImageStyle}
      />
      <TextInput
        style={{flex: 1}}
        placeholder="Search..."
        defaultValue={searchValue}
        onChangeText={(text) => setSearchValue(text)}
        underlineColorAndroid="transparent"
        onSubmitEditing={() => console.log({searchValue})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',

    width: '100%',
    marginTop: 40,
  },
  ImageStyle: {
    width: 44,
    height: 44,
  },
});

export default Search;
