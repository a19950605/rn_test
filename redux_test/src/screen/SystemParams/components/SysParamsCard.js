import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {color, styles} from '../../../constants/styles';

export const SysParamsCard = props => {
  console.log('rolel');
  console.log(props);
  return (
    <View style={styles.rowListBorder}>
      <View style={{padding: 10}}>
        <View style={styles.row}>
          <Text style={styles.cardTitle}>Name: </Text>
          <Text style={color.black}>{props?.item?.name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cardTitle}>Value: </Text>
          <Text style={color.black}>{props?.item?.value}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.detailBtn}
        onPress={() => {
          //       props.navigation.navigate('RoleDetail', props.item);
        }}>
        <Text style={color.blue}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};
