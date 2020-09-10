import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import ImageButtonType from '../Browse/image-button-type';
import * as callAPI from '../../../Core/callAPI';
const Type = (props) => {
  const [allCat, setAllCat] = useState([]);
  useEffect(() => {
    async function allCategory() {
      const allCat = await (await callAPI.callApiGetAllCategories()).data
        .payload;
      setAllCat(allCat);
    }
    allCategory();
  }, []);
  const renderListType = (listType, navigation) => {
    return listType.map((item) => (
      <ImageButtonType item={item} navigation={navigation} key={item.id} />
    ));
  };
  return (
    <ScrollView horizontal={true}>
      {renderListType(allCat, props.navigation)}
    </ScrollView>
  );
};

export default Type;
