import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from '../../../constants/styles';

const LastControlDetail = ({data, islandscapemode}) => {
  console.log(data?.lastCmd);
  return (
    <View style={styles.lampCreateContainer}>
      <View style={styles.inputRow}>
        <Icon
          name="person"
          size={24}
          color="black"
          type="material"
          style={styles.p10}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            islandscapemode ? styles.textInputMobile : styles.textInputTablet
          }
          label="Last Control By"
          value={''}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.inputRow}>
        <Icon
          name="power"
          size={24}
          color="black"
          type="material-community"
          style={styles.p10}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            islandscapemode ? styles.textInputMobile : styles.textInputTablet
          }
          label="Last Control Action"
          value={''}
          onChangeText={text => setText(text)}
        />
      </View>

      <View style={styles.inputRow}>
        <Icon
          name="calendar-range"
          size={24}
          color="black"
          type="material-community"
          style={styles.p10}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            islandscapemode ? styles.textInputMobile : styles.textInputTablet
          }
          label="Last Control Datetime"
          value={''}
          onChangeText={text => setText(text)}
        />
      </View>
    </View>
  );
};

export default LastControlDetail;
