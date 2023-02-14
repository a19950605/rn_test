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
const UserAccountCard = props => {
  //   console.log('roles');
  //   console.log(props.item.roles);
  //   console.log(props?.item?.roles[0]?.code);

  return (
    <View style={styles.rowListBorder}>
      <View style={styles.p10}>
        <View style={styles.row}>
          <Text style={styles.cardTitle}>Account ID: </Text>
          <Text style={color.black}>{props?.item?.id}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cardTitle}>Display Name:</Text>
          <Text style={color.black}>{props?.item?.displayName}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.cardTitle}>Username:</Text>
          <Text style={color.black}>{props?.item?.username}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.cardTitle}>Role: </Text>
          <Text style={color.black}>{props?.item?.roles[0]?.code || '--'}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.cardTitle}>Status:</Text>
          <Text style={color.black}>{props?.item?.status}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.detailBtn}
        onPress={() => {
          props.navigation.navigate('UserAccountDetail', props?.item);
        }}>
        <Text style={color.blue}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserAccountCard;
