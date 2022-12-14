import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet, Alert} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';

const PasswordSetting = () => {
  const [text, setText] = React.useState('');
  const [cPw, setCpw] = useState('');
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const submitTest = () => {
    Alert.alert('hello' + cPw + pw1 + pw2);
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
          style={{width: '85%'}}
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
          style={{width: '85%'}}
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
          style={{width: '85%'}}
          label="password2"
          value={pw2}
          onChangeText={pw2 => setPw2(pw2)}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button
          icon="camera"
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
