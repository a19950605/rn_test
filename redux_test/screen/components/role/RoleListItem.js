import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const RoleListItem = props => {
  console.log(props);
  return (
    <View
      style={{
        borderColor: 'gray',
        borderWidth: 0.2,
      }}>
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>ID: </Text>
          <Text style={{color: 'black'}}>{props?.item?.id}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Code: </Text>
          <Text style={{color: 'black'}}>{props?.item?.code}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Display Name:
          </Text>
          <Text style={{color: 'black'}}>{props?.item?.displayName}</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Status:</Text>
          <Text style={{color: 'black'}}>{props?.item?.status}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#f0fbff',
          padding: 15,
          justifyContent: 'center',
          flexDirection: 'row',
        }}
        onPress={() => {
          props.navigation.navigate('RoleDetail', props.item);
        }}>
        <Text style={{color: 'blue'}}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoleListItem;
