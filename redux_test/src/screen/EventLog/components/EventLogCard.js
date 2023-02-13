import React from 'react';
import {Text, View} from 'react-native';
import {color, styles} from '../../../constants/styles';
const EventLogCard = props => {
  return (
    <View style={styles.eventCardBorder}>
      <View style={styles.flexRow}>
        <Text style={styles.cardTitle}>User: </Text>

        <Text style={color.black}> {props?.item?.username}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.cardTitle}>Datetime: </Text>
        <Text style={color.black}>{props?.item?.time?.split('.')[0]}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.cardTitle}>Function: </Text>
        <Text style={color.black}> {props?.item?.func}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.cardTitle}>Type: </Text>
        <View>
          <Text style={color.black}> {props?.item?.type}</Text>

          <Text style={{color: 'black', width: '70%'}}>
            {props?.item?.dest.split(' ')[0] +
              '\n' +
              props?.item?.dest.split(' ')[1] +
              props?.item?.dest.split(' ')[2] +
              props?.item?.dest.split(' ')[3]}
          </Text>
        </View>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.cardTitle}>Data: </Text>
        <View style={styles.width100}>
          <Text style={{color: 'black', width: '75%'}}>
            {props?.item?.dest.split(' ')[4] +
              props?.item?.dest.split(' ')[5] +
              props?.item?.dest.split(' ')[6] +
              props?.item?.dest.split(' ')[7] +
              props?.item?.dest.split(' ')[8] +
              props?.item?.dest.split(' ')[9]}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default EventLogCard;
