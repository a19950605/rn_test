import {Overlay} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {styles} from '../constants/styles';

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Overlay isVisible={true} overlayStyle={styles.loadBtnOverlay}>
        <Text style={styles.loadTxt}>Loading</Text>
        <ActivityIndicator color="#ffffff" />
      </Overlay>
    </View>
  );
};
