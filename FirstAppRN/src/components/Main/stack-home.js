import React, {Component, useState} from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  FlatList,
  Alert,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home/home';
import Detail from '../Detail/detail';
import Profile from '../Profile/profile';
import ListCourses from './ListCourses/list-courses';
import {useDispatch, useSelector} from 'react-redux';
const Stack = createStackNavigator();

const StackHome = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const name = useSelector((state) => state.user.name);
  console.log(name);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => {
            return (
              <View style={styles.all}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => props.navigation.navigate('Profile')}>
                  <Image
                    source={require('../../../assets/mai-phan.jpg')}
                    style={styles.btn}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Image
                    source={require('../../../assets/more.png')}
                    style={styles.btn}
                  />
                </TouchableOpacity>
                <View>
                  <Modal
                    animationType=""
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(false);
                    }}>
                    <TouchableOpacity
                      style={{
                        alignItems: 'flex-end',
                        width: '100%',
                        height: '100%',
                      }}
                      onPress={() => {
                        setModalVisible(false);
                      }}>
                      <View
                        style={{
                          width: 170,
                          height: 100,
                          backgroundColor: '#F2F2F2',
                          marginRight: 20,
                          marginTop: 40,
                          justifyContent: 'space-around',
                        }}>
                        <TouchableOpacity
                          onPress={() => setModalVisible(false)}>
                          <Text
                            style={{
                              marginLeft: 10,
                              fontSize: 20,
                              borderColor: 'black',
                            }}>
                            Setting
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => setModalVisible(false)}>
                          <Text
                            style={{
                              marginLeft: 10,
                              fontSize: 20,
                              borderColor: 'black',
                            }}>
                            Contact with us
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => setModalVisible(false)}>
                          <Text
                            style={{
                              marginLeft: 10,
                              fontSize: 20,
                              borderColor: 'black',
                            }}>
                            Send feedback
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  </Modal>
                </View>
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ListCourses" component={ListCourses} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 5,
  },
  all: {
    flexDirection: 'row',
  },
  modal: {
    backgroundColor: 'white',
    marginRight: 20,
    marginLeft: 250,
    borderWidth: 1,
    width: 150,
    height: 70,
    zIndex: 1,
  },
});

export default StackHome;
