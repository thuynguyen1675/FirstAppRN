import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as callAPI from '../../Core/callAPI';
const Detail = (props) => {
  const {course} = props.route.params; //{} vi lay nguyen tu do qua
  const [viewLess, setViewLess] = useState(false);
  const [instructor, setInstructor] = useState({});
  useEffect(() => {
    async function fetData() {
      if (course.instructorId) {
        let instructorRes = await callAPI.callApiGetInstructorDetail(
          course.instructorId,
        );
        setInstructor(instructorRes.data.payload);
      } else {
        let infoRes = await callApi.callApiGetCourseInfo(course.id);
        let instructorRes = await callApi.callApiGetInstructorDetail(
          infoRes.data.payload.instructorId,
        );
        setInstructor(instructorRes.data.payload);
      }
    }
    fetData();
  }, []);
  return (
    <View style={{flex: 1}}>
      {/* <Video source={{uri: "../../../assets/videoplayback.mp4"}}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo} /> */}
      <View
        style={{height: 270, backgroundColor: 'lightblue', marginTop: 35}}
      />

      <ScrollView style={{flex: 1}}>
        <Text
          style={{
            fontSize: 27,
            fontWeight: 'bold',
            marginTop: 5,
            marginLeft: 17,
          }}>
          Rect Foundation
        </Text>
        <View style={{marginTop: 5, marginLeft: 17}}>
          <TouchableOpacity
            style={{
              borderRadius: 17,
              width: 130,
              backgroundColor: '#D8D8D8',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: instructor.avatar}}
              style={{width: 34, height: 34, borderRadius: 20}}
            />
            <Text>{instructor.name}</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 5, marginLeft: 17}}>
          <Text>Internadiate . May 16 2018 . 3.6h</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 5,
            marginLeft: 17,
          }}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#D8D8D8',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/bookmark.png')}
                style={{width: 40, height: 40}}
              />
            </View>
            <Text>Bookmark</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center'}}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#D8D8D8',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/add-to-channel.png')}
                style={{width: 40, height: 40}}
              />
            </View>
            <Text>Add to Channel</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20, flexDirection: 'row', marginLeft: 17}}>
          <Text
            numberOfLines={viewLess ? 3 : 10}
            ellipsizeMode="clip"
            style={{flex: 16}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.
          </Text>
          {viewLess ? (
            <TouchableOpacity
              style={{
                backgroundColor: '#D8D8D8',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => setViewLess(false)}>
              <Image
                source={require('../../../assets/expan-arrow.png')}
                style={{width: 15, height: 15}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: '#D8D8D8',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => setViewLess(true)}>
              <Image
                source={require('../../../assets/collapse-arrow.png')}
                style={{width: 15, height: 15}}
              />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={require('../../../assets/check.png')}
            style={{width: 25, height: 25}}
          />
          <Text>Take a learning check</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            source={require('../../../assets/path.png')}
            style={{width: 25, height: 25}}
          />
          <Text>View related paths, courses</Text>
        </TouchableOpacity>

        {/* <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default Detail;
