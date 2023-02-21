import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
//monitoring
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../../../constants/styles';
import moment from 'moment';
import {useSelector} from 'react-redux';

const OutstandingAlarmCard = props => {
  //green card
  //console.log(props.item);
  const [bodyStyle, setBodyStyle] = useState('green');
  const [buttonColor, setButtonColor] = useState('lightgreen');
  const [titleColor, setTitleColor] = useState('white');
  const [isAck, setIsAck] = useState(false);
  const {userFunc} = useSelector(state => state.roleUserFunc);

  useEffect(() => {
    props.item.status == 'ACTIVE'
      ? (setBodyStyle('red'), setButtonColor('pink'), setTitleColor('white'))
      : props.item.status == 'ACKNOWLEDGED'
      ? (setBodyStyle('white'),
        setButtonColor('lightblue'),
        setTitleColor('black'))
      : '';
  }, []);
  return (
    <View>
      <View
        style={{
          backgroundColor: bodyStyle,
          marginLeft: 5,
          marginRight: 5,
          padding: 10,
        }}>
        <View style={styles.row}>
          <Text style={{color: titleColor, fontWeight: 'bold'}}>Alarm ID:</Text>
          <Text>{props.item.id || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={{color: titleColor, fontWeight: 'bold'}}>Type: </Text>
          <Text>{props.item.alarmType || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={{color: titleColor, fontWeight: 'bold'}}>
            Controller ID:
          </Text>
          <Text>{props.item.controllerCode || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={{color: titleColor, fontWeight: 'bold'}}>RFL: </Text>
          <Text>{props?.item['device.code'] || ''}</Text>
        </View>
        <View style={styles.row}>
          <Text style={{color: titleColor, fontWeight: 'bold'}}>
            Triggered Datetime:
          </Text>
          <Text>
            {props.item.dtCreate
              ? moment(props.item.dtCreate)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm')
              : '--'}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={{color: titleColor, fontWeight: 'bold'}}>Status: </Text>
          <Text>{props.item.status || ''}</Text>
        </View>
      </View>

      <View
        style={{
          flex: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',

          marginLeft: 5,
          marginRight: 5,
          marginBottom: 3,
        }}>
        <View
          style={{
            backgroundColor: buttonColor,
            flex: 1,
            padding: 10,
            marginRight: 1,
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('OutstandingDetailTab', props.item);
            }}>
            <Text style={{textAlign: 'center', color: 'blue'}}>Details</Text>
          </TouchableOpacity>
        </View>
        {props.item.status != 'ACKNOWLEDGED' &&
          userFunc?.find(o => o.code === 'RFL_ALARM_U') != undefined && (
            <View style={{backgroundColor: buttonColor, flex: 1, padding: 10}}>
              <TouchableOpacity
                onPress={() => {
                  alert(props.item.id);
                }}>
                <Text style={{textAlign: 'center', color: 'blue'}}>ACK</Text>
              </TouchableOpacity>
            </View>
          )}
      </View>
    </View>
  );
};

export default OutstandingAlarmCard;
