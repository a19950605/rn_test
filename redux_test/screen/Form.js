import React from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';

const Form = () => {
  const [text, setText] = React.useState('');

  // return(
  //     <View style={{}}>

  //     <View style={{flexDirection:'row',padding:10,width:'100%'}}>
  //          <Icon
  //     name='heartbeat'
  //     size={24}
  //     color='black'
  //     type='font-awesome'
  //     style={{padding:10}}
  //   />
  //      <Input placeholder='Basic input' style={{maxWidth:'50%',paddingRight:10}}/>
  //      </View>

  //     <View style={{flexDirection:'row',padding:10}}>
  //          <Icon
  //     name='sc-telegram'
  //     size={24}
  //     color='black'
  //     type='evilicon'
  //     style={{padding:10}}
  //   />
  //      <Input placeholder='Basic input' style={{maxWidth:'50%'}}/>
  //      </View>

  //     <View style={{flexDirection:'row',padding:10}}>
  //          <Icon
  //     name='heartbeat'
  //     size={24}
  //     color='black'
  //     type='font-awesome'
  //     style={{padding:10}}
  //   />
  //      <Input placeholder='Basic input' style={{maxWidth:'50%'}}/>
  //      </View>

  //     <View style={{flexDirection:'row',padding:10}}>
  //          <Icon
  //     name='heartbeat'
  //     size={24}
  //     color='black'
  //     type='font-awesome'
  //     style={{padding:10}}
  //   />
  //      <Input placeholder='Basic input' style={{maxWidth:'50%'}}/>
  //      </View>

  //     <View style={{flexDirection:'row',padding:10}}>
  //          <Icon
  //     name='heartbeat'
  //     size={24}
  //     color='black'
  //     type='font-awesome'
  //     style={{padding:10}}
  //   />
  //      <Input placeholder='Basic input' style={{maxWidth:'50%'}}/>
  //      </View>
  // <View style={{flexDirection:'row',justifyContent:'center'}}>
  // <Button
  //           title="Outline Button"
  //           buttonStyle={{
  //             borderColor: 'rgba(78, 116, 289, 1)',
  //           }}
  //           type="outline"
  //           titleStyle={{ color: 'rgba(78, 116, 289, 1)' }}
  //           containerStyle={{
  //             width: 200,
  //             marginHorizontal: 50,
  //             marginVertical: 10,
  //           }}
  //         />

  // </View>
  //    </View>
  // )
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
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
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
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
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
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
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
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
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
          label="Email"
          value={text}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button
          icon="camera"
          mode="contained"
          type="containedd"
          onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
    </View>
  );
};

export default Form;
