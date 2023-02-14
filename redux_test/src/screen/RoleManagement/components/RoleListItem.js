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

const RoleListItem = props => {
  console.log('rolel');
  console.log(props);
  return (
    <View style={styles.rowListBorder}>
      <View style={{padding: 10}}>
        <View style={styles.row}>
          <Text style={styles.cardTitle}>ID: </Text>
          <Text style={color.black}>{props?.item?.id}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cardTitle}>Code: </Text>
          <Text style={color.black}>{props?.item?.code}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.cardTitle}>Display Name:</Text>
          <Text style={color.black}>{props?.item?.displayName}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.cardTitle}>Status:</Text>
          <Text style={color.black}>{props?.item?.status}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.detailBtn}
        onPress={() => {
          props.navigation.navigate('RoleDetail', props.item);
        }}>
        <Text style={color.blue}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoleListItem;
