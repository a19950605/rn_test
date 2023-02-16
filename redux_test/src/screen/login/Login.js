import React, {useEffect, useState} from 'react';

import {View, Text, Image, useWindowDimensions} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {signin} from '../../features/login/loginSlice';
import {useTranslation} from 'react-i18next';
import {styles} from '../../constants/styles';
import {dTst, fetchUsers} from '../../features/users/usersSlice';

const Login = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.login.userToken?.Token);

  const [username, setUsername] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [token1, setToken1] = useState();
  const {height, width} = useWindowDimensions();
  const {t, i18n} = useTranslation();
  const {language: currentLanguage} = i18n;

  const isLandscapeMode = width > height ? true : false;

  console.log('height' + height);
  console.log('width' + width);
  console.log('islandscapemode' + isLandscapeMode);
  console.log(currentLanguage);
  return (
    <>
      {
        <View style={isLandscapeMode ? styles.loginTablet : styles.loginMobile}>
          <View style={styles.row}>
            <Image
              source={{
                uri: 'https://static.wikia.nocookie.net/logopedia/images/1/16/120724090720-MTR-Corporation-logo.png',
              }}
              style={styles.loginImage}
            />
            <Text style={styles.font50}> eRFL</Text>
          </View>

          <View
            style={
              isLandscapeMode ? styles.loginFormTablet : styles.loginFormMobile
            }>
            <View style={styles.loginInputContainer}>
              <TextInput
                theme={{colors: {primary: 'darkred'}}}
                style={
                  isLandscapeMode ? styles.loginInputT : styles.loginInputM
                }
                label="username/用戶名"
                value={username}
                onChangeText={text => setUsername(text)}
              />
            </View>

            <View style={styles.loginInputContainer}>
              <TextInput
                theme={{colors: {primary: 'darkred'}}}
                style={
                  isLandscapeMode ? styles.loginInputT : styles.loginInputM
                }
                label="password/密碼"
                value={pw}
                secureTextEntry={true}
                onChangeText={pw => setPw(pw)}
              />
            </View>
            <View style={styles.justifyContentCenter}>
              <Button
                style={{
                  backgroundColor:
                    pw != '' && username != '' ? 'black' : 'gray',
                  width: isLandscapeMode ? '85%' : '65%',
                  marginTop: 5,
                }}
                disabled={pw == '' || username == ''}
                mode="contained"
                type="containedd"
                onPress={() => {
                  //login
                  //username missing
                  //password missing
                  //
                  // if (loginValidation()) {
                  // } else {
                  // }

                  auth(username, pw)
                    .then(res => {
                      console.log('json');
                      console.log(res);
                      setToken1(JSON.parse(res));
                      if (!token1) {
                        console.log('hl');
                        //alert('Login failed');
                      }
                      dispatch(signin(JSON.parse(res)));

                      // console.log(token1);
                      // props.tokenRecord(JSON.parse(res));
                    })
                    .catch(e => {
                      alert('login fail: ' + e);
                    });
                }}>
                <Text>Login 登入</Text>
              </Button>
            </View>
          </View>
        </View>
      }
    </>
  );
};
const loginValidation = () => {};
const auth = (username, password) => {
  var formdata = new FormData();
  formdata.append('username', username);
  formdata.append('password', password);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  return fetch('https://gis2.ectrak.com.hk:8900/api/auth', requestOptions)
    .then(response => {
      return response.json();
    })
    .then(result => {
      console.log(result);
      return JSON.stringify(result);
    })
    .catch(error => console.log('error', error));
};

export default Login;
