import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ListCourseItem from '../ListCourses/ListCourseItem/list-course-item';
import * as callAPI from '../../../Core/callAPI';
import * as action from '../../../Action/index';
//import {Icon} from 'native-base';
const Search = (props) => {
  const [search, setSearch] = useState('');
  const history = useSelector((state) => state.history.history);
  const dispatch = useDispatch();
  const [listSearch, setListSearch] = useState([]);
  const [count, setCount] = useState(null);
  const [listSearchDetail, setListSearchDetail] = useState([]);
  const renderList = () => {
    let list = [];
    for (let i = 0; i < listSearch.length; i++) {
      list.push(
        <ListCourseItem
          item={listSearch[i]}
          navigation={props.navigation}
          key={listSearch[i].id}
        />,
      );
    }
    return list;
  };
  const updateSearch = () => {
    if (search != '') {
      let data = {
        keyword: search,
        limit: 0,
        offset: 0,
      };
      callAPI
        .callApiSearch(data)
        .then((res) => {
          if (res.data.payload.rows.length > 0)
            callAPI
              .callApiGetCourseInfo(res.data.payload.rows[0].id)
              .then((res1) =>
                setListSearchDetail([...listSearchDetail, res1.data.payload]),
              )
              .catch((err1) => console.log(err1));
          setListSearch(res.data.payload.rows);
          setCount(res.data.payload.count);
          dispatch(action.deleteHistory(search));
          dispatch(action.addHistory(search));
        })
        .catch((err1) => console.log(err1));
    }
  };
  const searchHistory = (item) => {
    setSearch(item);
    updateSearch();
  };
  return (
    <View>
      <View style={styles.SectionStyle}>
        <Image
          source={require('../../../../assets/search.png')}
          style={styles.ImageStyle}
        />
        <TextInput
          style={{flex: 1}}
          placeholder="Search..."
          defaultValue={search}
          onChangeText={(text) => {
            setSearch(text);
            setCount(null);
          }}
          underlineColorAndroid="transparent"
          onSubmitEditing={() => {
            updateSearch();
          }}
        />
      </View>
      {count != null ? (
        <ScrollView>
          <Text>
            <Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>
              "{search}"
            </Text>{' '}
            found {count} result{count > 1 ? 's' : null}
          </Text>
          {renderList()}
        </ScrollView>
      ) : (
        <ScrollView>
          <View style={{width: '100%', borderBottomColor: '#B7B1B1'}}>
            <Text style={{fontSize: 16}}>Recently search</Text>
          </View>
          <FlatList
            data={history}
            style={{marginTop: 15, marginLeft: 18}}
            renderItem={({item}) => (
              <View style={{flexDirection: 'row', marginBottom: 8}}>
                <TouchableOpacity
                  style={{flex: 9}}
                  onPress={() => searchHistory(item)}>
                  <Text style={{fontSize: 16}}>{item}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flex: 1}}
                  onPress={() => dispatch(action.deleteHistory(item))}>
                  {/* <Icon
                    name="times"
                    style={{fontSize: 18, color: '#5F5E5E'}}
                    type="FontAwesome"
                  /> */}
                </TouchableOpacity>
              </View>
            )}
          />
        </ScrollView>
      )}
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
