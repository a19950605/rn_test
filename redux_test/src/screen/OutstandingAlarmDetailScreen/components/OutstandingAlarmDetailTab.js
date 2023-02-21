import {Icon} from '@rneui/themed';
import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {styles} from '../../../constants/styles';
import moment from 'moment';
import {capitalizeWords} from '../../../utils/capitalizeWords';
export const OutstandingAlarmDetailTab = ({alarmDetail, isLandscapeMode}) => {
  const [text, setText] = React.useState('');
  console.log('outstanding alarm detail tab');
  console.log(alarmDetail);
  return (
    <View style={styles.p10}>
      <View style={styles.inputRow}>
        <Icon
          name="hash"
          size={24}
          color="gray"
          type="feather"
          style={styles.p10}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            isLandscapeMode ? styles.textInputTablet : styles.textInputMobile
          }
          label="Alarm ID"
          value={JSON.stringify(alarmDetail?.id)}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.inputRow}>
        <Icon
          name="alarm"
          size={24}
          color="gray"
          type="material-community"
          style={styles.p10}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            isLandscapeMode ? styles.textInputTablet : styles.textInputMobile
          }
          label="Types"
          value={capitalizeWords(alarmDetail?.alarmType?.replace('_', ' '))}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.inputRow}>
        <Icon name="monitor" size={24} color="gray" style={styles.p10} />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            isLandscapeMode ? styles.textInputTablet : styles.textInputMobile
          }
          label="Controller ID"
          value={alarmDetail?.controllerCode}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.inputRow}>
        <Icon
          name="location-pin"
          size={24}
          color="gray"
          type="material"
          style={styles.p10}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            isLandscapeMode ? styles.textInputTablet : styles.textInputMobile
          }
          label="RFL"
          value={alarmDetail.deviceCode}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.inputRow}>
        <Icon
          name="stats-chart"
          size={24}
          color="gray"
          type="ionicon"
          style={styles.p10}
        />
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            isLandscapeMode ? styles.textInputTablet : styles.textInputMobile
          }
          label="Status"
          value={capitalizeWords(alarmDetail?.status)}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.inputRow}>
        <Icon
          name="date-range"
          size={24}
          color="gray"
          type="material"
          style={styles.p10}
        />

        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={
            isLandscapeMode ? styles.textInputTablet : styles.textInputMobile
          }
          label="Triggered Time"
          value={moment(alarmDetail?.dtCreate)
            .utcOffset(8)
            .format('YYYY-MM-DD HH:mm:ss')}
          onChangeText={text => setText(text)}
        />
      </View>
    </View>
  );
};
