import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from '../../../constants/styles';

const AssignmentDetail = ({islandscapemode}) => {
  return (
    <View style={{padding: 10, backgroundColor: 'white', flex: 1}}>
      <View style={styles.inputRow}>
        <Icon
          name="md-reader-outline"
          size={24}
          color="black"
          type="ionicon"
          style={styles.rowIcon}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            islandscapemode ? styles.textInputMobile : styles.textInputTablet
          }
          label="Group"
          value=""
          onChangeText={text => setText(text)}
        />
      </View>
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
          label="EPIC"
          value=""
          onChangeText={text => setText(text)}
        />
      </View>
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
          label="CP"
          value=""
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
          label="ASSIGNED DATE"
          value=""
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
          label="ETMS START TIME"
          value=""
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
          label="ETMS FINISH TIME"
          value=""
          onChangeText={text => setText(text)}
        />
      </View>
    </View>
  );
};

export default AssignmentDetail;
