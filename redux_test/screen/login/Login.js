import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {auth} from '../../apiList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {signin, signout} from '../../features/login/loginSlice';

const Login = props => {
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.login.userToken?.Token);

  const [username, setUsername] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [token1, setToken1] = useState();
  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;
  //check check
  console.log('height' + height);
  console.log('width' + width);
  console.log('islandscapemode' + isLandscapeMode);
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
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 15,
        }}>
        <TextInput
          theme={{colors: {primary: 'darkred'}}}
          style={{width: '85%', backgroundColor: 'transparent'}}
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
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="password/密碼"
          value={pw}
          secureTextEntry={true}
          onChangeText={pw => setPw(pw)}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button
          style={{backgroundColor: 'black'}}
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
          Login 登入
        </Button>
      </View>
    </View>
  );
};

export default Login;
