import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const CardButton = ({navLoc, navigation, data, text, t, isDetail}) => {
  return (
    <View
      style={{
        backgroundColor: 'lightblue',
        flex: 1,
        padding: 10,
        marginRight: 1,
      }}>
      <TouchableOpacity
        onPress={() => {
          isDetail && navigation.navigate(navLoc, data);
        }}>
        <Text style={{textAlign: 'center', color: 'blue'}}> {t(text)}</Text>
      </TouchableOpacity>
    </View>
  );
};
