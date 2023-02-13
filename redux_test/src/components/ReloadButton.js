import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {color, styles} from '../constants/styles';

export const ReloadButton = ({setLoading, loading, currentDate}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setLoading(true);
      }}
      style={loading ? styles.reloadButtonGray : styles.reloadButtonBlue}>
      <Text style={{color: loading ? 'gray' : 'blue'}}>
        {loading ? 'loading' : currentDate}
      </Text>
    </TouchableOpacity>
  );
};
