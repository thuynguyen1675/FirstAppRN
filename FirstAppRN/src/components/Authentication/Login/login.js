import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import {isUser} from '../../../Core/login';
import {ThemeContext, themes} from '../../../components/theme-context';
import {allCategory, coursesNew} from '../../../Core/category';
import {callApiLogin} from '../../../Core/callAPI';
const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null);

  const login = async () => {
    await callApiLogin(username, password);
  };

  const renderLoginStatus = (status) => {
    if (!status) {
      return <View />;
    } else if (status === 200) {
      props.navigation.navigate('main');
    } else {
      return <Text>{status.errorString}</Text>;
    }
  };

  return (
    <View style={styles.general}>
      <View style={styles.input}>
        <View style={styles.sectionLogo}>
          <Image
            source={require('../../../../assets/logo2.png')}
            style={styles.Logo}
          />
          <Text style={styles.Name}>ITEDU</Text>
        </View>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../../../../assets/ic_person.png')}
            style={styles.ImageStyle}
          />
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Your Email"
            defaultValue={username}
            onChangeText={(text) => setUsername(text)}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.SectionStyle}>
          <Image
            source={require('../../../../assets/password-icon.png')}
            style={styles.ImageStyle}
          />
          <TextInput
            style={{flex: 1}}
            defaultValue={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter Your Password"
            underlineColorAndroid="transparent"
            secureTextEntry
          />
        </View>
      </View>
      <View style={styles.touchGroup}>
        <TouchableHighlight
          style={[styles.TouchableHighlight, styles.signIn]}
          onPress={async () => {
            const user = await callApiLogin(username, password);
            renderLoginStatus(user.status);

            //const i = await coursesNew();
            //console.log(i[0].title);
            //console.log(await isUser(username, password))
          }}>
          <Text>Sign in</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.TouchableHighlight}>
          <Text style={styles.needHelp}>Need help?</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.TouchableHighlight, styles.otherBtn]}>
          <Text>Use Single Sign-On (SSO)</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.TouchableHighlight, styles.otherBtn]}>
          <Text>Subscribe to Itedu</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  general: {
    marginTop: 40,
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginBottom: 3,
  },
  Name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'lightblue',
    marginBottom: 20,
    marginTop: 10,
  },
  Logo: {
    width: '60%',
    height: '60%',
  },
  input: {
    flex: 1,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    // height: 50,
    width: '90%',
    borderRadius: 5,
    margin: 10,
  },

  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  TouchableHighlight: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '70%',
    marginTop: 20,
    borderRadius: 6,
  },
  needHelp: {
    color: '#00CCFF',
  },
  signIn: {
    backgroundColor: '#00CCFF',
  },
  otherBtn: {
    borderColor: '#00CCFF',
    borderWidth: 1,
  },
  touchGroup: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
});
export default Login;
