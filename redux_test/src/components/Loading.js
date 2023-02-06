import {Overlay} from '@rneui/themed';
import React from 'react';
import {Text, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Overlay
        isVisible={true}
        overlayStyle={{
          backgroundColor: 'black',
          paddingVertical: 30,
          paddingHorizontal: 40,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Loading
        </Text>
        <ActivityIndicator color="#ffffff" />
      </Overlay>
    </View>
  );
};
