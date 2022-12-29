import React, {useState, useEffect} from 'react';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';

import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MarkerImage from 'react-native-marker-image';

function RoleManagement() {
  async function getData() {
    return await AsyncStorage.getItem('@token').then(res => {
      console.log('tokentest');
      console.log(res);
      return res;
    });
  }

  useEffect(() => {
    // getData().then(res => {
    //   var requestOptions = {
    //     method: 'GET',
    //     headers: {
    //       // Accept: '*',
    //       // 'Content-Type': 'application/json',
    //       'X-Token': res,
    //     },
    //   };
    //   fetch(
    //     'https://gis2.ectrak.com.hk:8900/api/system/user/rolePermission',
    //     requestOptions,
    //   )
    //     .then(response => {
    //       return response.json();
    //     })
    //     .then(result => {
    //       console.log(result);
    //       // return result;
    //       // setData(result);
    //     })
    //     .catch(error => console.log('error1', error));
    // });
  }, []);

  const getOneRolePermission = id => {
    getData().then(res => {
      var requestOptions = {
        method: 'GET',
        headers: {
          // Accept: '*',
          // 'Content-Type': 'application/json',
          'X-Token': res,
        },
      };
      fetch(
        `https://gis2.ectrak.com.hk:8900/api/system/user/rolePermission/${id}`,
        requestOptions,
      )
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log(result);
          // return result;
          // setData(result);
        })
        .catch(error => console.log('error1', error));
    });
  };
  //list row

  //create display name,code remarks status permission
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          getOneRolePermission(1);
        }}>
        <Text>1112</Text>
      </TouchableOpacity>
      <ReactNativeZoomableView
        maxZoom={1.5}
        minZoom={0.5}
        zoomStep={0.5}
        initialZoom={1}
        bindToBorders={true}
        onZoomAfter={this.logOutZoomState}
        style={{
          padding: 10,
          backgroundColor: 'red',
        }}>
        <ImageMarker
          image={require('../assets/test.jpg')}
          markerImage={require('../assets/location-pin-icon-on-transparent-pin-vector-20942049.jpg')}
          markerSize={50}
          onChange={data => console.log(data)}
        />
      </ReactNativeZoomableView>
    </View>
  );
}

export default RoleManagement;
