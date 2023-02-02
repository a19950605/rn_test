import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet, Alert} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PasswordSetting = () => {
  const [text, setText] = React.useState('');
  const [cPw, setCpw] = useState('');
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const [token, setToken] = useState('');
  const submitTest = () => {
    var formdata = new FormData();
    formdata.append('cPassword', cPw);
    formdata.append('nPassword', pw1);
    formdata.append('nPassword2', pw2);

    async function getData() {
      return await AsyncStorage.getItem('@token').then(res => {
        console.log('tokentest');
        console.log(res);
        setToken(res);
        return res;
      });
    }
    getData().then(token => {
      var requestOptions = {
        method: 'PUT',
        headers: {
          // Accept: '*',
          // 'Content-Type': 'application/json',
          'X-Token': token,
        },
        body: formdata,
      };
      // Alert.alert('hello' + cPw + pw1 + pw2);
      fetch(
        'https://gis2.ectrak.com.hk:8900/api/changePassword',
        requestOptions,
      )
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log(result);
          console.log(result?.errorMsg);
          console.log(result?.dtModifiy);
          if (result?.errorMsg) {
            Alert.alert('password error');
          }
          if (result?.dtModify) {
            Alert.alert('Success');
          }

          // return result;
          // setData(result);
        })
        .catch(error => console.log('pw err', error));
    });
  };
  return (
    <View style={{padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <Icon
          name="heartbeat"
          size={24}
          color="black"
          type="font-awesome"
          style={{padding: 10}}
        />
        <TextInput
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="current password"
          value={cPw}
          onChangeText={cPw => setCpw(cPw)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <Icon
          name="heartbeat"
          size={24}
          color="black"
          type="font-awesome"
          style={{padding: 10}}
        />
        <TextInput
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="new password"
          value={pw1}
          onChangeText={pw1 => setPw1(pw1)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          marginBottom: 15,
        }}>
        <Icon
          name="heartbeat"
          size={24}
          color="black"
          type="font-awesome"
          style={{padding: 10}}
        />
        <TextInput
          style={{width: '85%', backgroundColor: 'transparent'}}
          label="password2"
          value={pw2}
          onChangeText={pw2 => setPw2(pw2)}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button
          style={{backgroundColor: 'black'}}
          mode="contained"
          type="contained"
          onPress={submitTest}>
          Button
        </Button>
      </View>
    </View>
  );
};

export default PasswordSetting;
