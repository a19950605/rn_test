import React from 'react';
import {Text, View} from 'react-native';
import {color, styles} from '../../../constants/styles';
export const SyscheckCard = props => {
  return (
    <View style={styles.eventCardBorder}>
      <View style={styles.flexRow}>
        <Text style={styles.cardTitle}>Name: </Text>

        <Text style={color.black}> {props?.item?.name}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.cardTitle}>Type: </Text>
        <Text style={color.black}>Task Status</Text>
      </View>

      <View style={styles.flexRow}>
        <Text style={styles.cardTitle}>Value: </Text>
        <Text style={color.black}>{props?.item?.value}</Text>
      </View>
    </View>
  );
};
