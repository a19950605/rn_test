import React, {useEffect, useState} from 'react';

import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {auth} from '../apiList';

const Login = props => {
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
            auth(username, pw).then(res => {
              console.log('json');
              console.log(res);
              setToken1(JSON.parse(res));
              if (!token1) {
                alert('Login failed');
              }
              console.log(token1);
              props.tokenRecord(JSON.parse(res));
            })
          }>
          Login 登入
        </Button>
      </View>

      {/* <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button
          style={{backgroundColor: 'black'}}
          mode="contained"
          type="containedd"
          onPress={() => {
            console.log('token1');
            console.log(token1);
            console.log('token1.token');
            console.log(token1.Token);
            console.log('token1.errorMsg');
            console.log(token1.errorMsg);
          }}>
          token print
        </Button>
      </View> */}
    </View>
  );
};

export default Login;
