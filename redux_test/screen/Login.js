import React, {useEffect, useState} from 'react';

import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {auth} from '../apiList';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [token1, setToken1] = useState();

  const saveToken = (username, pw) => {
    auth(username, pw).then(res => {
      console.log('json');
      console.log(res);
    });
  };
  return (
    <View style={{flex: 1, alignItems: 'center', paddingTop: '50%'}}>
      <Text style={{fontSize: 50}}>eRFL{token1?.Token}</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 15,
        }}>
        <TextInput
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
            auth(username, pw).then(res => {
              console.log('json');
              console.log(res);
              setToken1(JSON.parse(res));
            })
          }>
          Login / 登入
        </Button>
      </View>
    </View>
  );
};

export default Login;
