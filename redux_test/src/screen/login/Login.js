import React, {useEffect, useState} from 'react';

import {View, Text, Image, useWindowDimensions} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {signin} from '../../features/login/loginSlice';
import {auth} from '../../apiFunc';
import {useTranslation} from 'react-i18next';

const Login = props => {
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.login.userToken?.Token);

  const [username, setUsername] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [token1, setToken1] = useState();
  const {height, width} = useWindowDimensions();
  const {t, i18n} = useTranslation();
  const {language: currentLanguage} = i18n;

  const isLandscapeMode = width > height ? true : false;
  //check check
  console.log('height' + height);
  console.log('width' + width);
  console.log('islandscapemode' + isLandscapeMode);
  console.log(currentLanguage);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingTop: isLandscapeMode ? '20%' : '50%',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://static.wikia.nocookie.net/logopedia/images/1/16/120724090720-MTR-Corporation-logo.png',
          }}
          style={{width: 100, height: 80}}
        />
        <Text style={{fontSize: 50}}> eRFL</Text>
      </View>

      <View
        style={{
          width: isLandscapeMode ? '30%' : '75%',
          marginTop: isLandscapeMode ? 30 : 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,

          elevation: 5,
          paddingBottom: 30,
          paddingTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15,
          }}>
          <TextInput
            theme={{colors: {primary: 'darkred'}}}
            style={{
              width: isLandscapeMode ? '65%' : '85%',
              backgroundColor: '#f5f6f7',
            }}
            label="username/用戶名"
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',

            marginBottom: 15,
          }}>
          <TextInput
            theme={{colors: {primary: 'darkred'}}}
            style={{
              width: isLandscapeMode ? '65%' : '85%',
              backgroundColor: '#f5f6f7',
            }}
            label="password/密碼"
            value={pw}
            secureTextEntry={true}
            onChangeText={pw => setPw(pw)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
          }}>
          <Button
            style={{
              backgroundColor: 'black',
              width: isLandscapeMode ? '65%' : '85%',
              marginTop: 5,
            }}
            mode="contained"
            type="containedd"
            onPress={() =>
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
                })
            }>
            <Text>Login 登入</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Login;
