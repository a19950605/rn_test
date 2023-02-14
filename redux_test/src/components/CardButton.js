import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../constants/styles';

export const CardButton = ({navLoc, navigation, data, text, t, isDetail}) => {
  return (
    <View style={styles.cardBtnContainer}>
      <TouchableOpacity
        onPress={() => {
          isDetail && navigation.navigate(navLoc, data);
        }}>
        <Text style={styles.cardBtnTxt}> {t(text)}</Text>
      </TouchableOpacity>
    </View>
  );
};
