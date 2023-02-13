import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {CardButton} from '../../../components/CardButton';
import {convertDate} from '../../../utils/getDate';
import {StatusBubble} from './StatusBubble';
//monitoring

const LampCard = props => {
  // console.log('component load');
  // console.log(props.item);
  const {t} = useTranslation();

  /*
              props.item.status == 'ACTIVE'
                ? {color: 'green'}
                : props.item.status == 'SPECIAL'
                ? {color: 'purple'}
                : props.item.status == 'DISABLED'
                ? {color: 'red'}
                : {color: 'black'}
            }>
            {props.item.status == 'ACTIVE'
              ? t('lamp.active')
              : props.item.status == 'SPECIAL'
              ? t('lamp.isolated')
              : props.item.status == 'DISABLED'
              ? t('lamp.maintenance')
              : ''}

  */
  const [readinessStatus, setReadinessStatus] = useState('');
  const [readinessStr, setReadinessStr] = useState(t('lamp.active'));
  const [readinessColor, setReadinessColor] = useState({color: 'green'});

  useEffect(() => {
    setReadinessStatus(props?.item?.status);
  }, []);

  useEffect(() => {
    switch (readinessStatus) {
      case 'ACTIVE':
        setReadinessColor({color: 'green'});
        setReadinessStr(t('lamp.active'));
        break;
      case 'SPECIAL':
        setReadinessColor({color: 'purple'});
        setReadinessStr(t('lamp.isolated'));
        break;
      case 'DISABLED':
        setReadinessColor({color: 'red'});
        setReadinessStr(t('lamp.maintenance'));
        break;
      default:
        break;
    }
  }, [readinessStatus]);
  return (
    <View style={styles.card}>
      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>RFL ID: </Text>
          <Text> {JSON.stringify(props.item.id)}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {t('lamp.rfl')}{' '}
          </Text>
          <Text>{props.item.code}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>EPIC : </Text>
          <Text>{props.item.activeAssignment?.epicName || '--'}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {t('lamp.group')}:{' '}
          </Text>
          <Text>{props.item.activeAssignment?.groupName || '--'}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {t('lamp.statusasof')}:{' '}
          </Text>
          <Text>{convertDate(props.item.dtKeepalive) || '-'}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {t('lamp.erflreadiness')}:{' '}
          </Text>
          <Text style={readinessColor}>{readinessStr}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {t('lamp.status')}:{' '}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <StatusBubble
              mode={'lamp'}
              t={t}
              title={'lamp.lamp'}
              status={props?.item?.lampStatus}
            />
            <StatusBubble
              mode={'health'}
              t={t}
              title={'lamp.health'}
              status={props?.item?.connectionStatus}
            />
            <StatusBubble
              mode={'conn'}
              t={t}
              title={'lamp.conn'}
              status={props?.item?.connectionStatus}
            />
            <StatusBubble
              mode={'power'}
              t={t}
              title={'lamp.power'}
              status={props?.item?.batteryStatus}
            />

            <View
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: 100,
                marginLeft: 5,
                paddingTop: 10,
                paddingBottom: 5,
                paddingLeft: 13,
                paddingRight: 13,
              }}>
              <Icon
                name={
                  props?.item?.relayChannelStatus == 'ERROR'
                    ? 'alert'
                    : 'question'
                }
                size={24}
                color={
                  props?.item?.relayChannelStatus == 'ERROR' ? 'red' : 'black'
                }
                type="octicon"
              />
              <Text style={{fontSize: 11, textAlign: 'center'}}>
                {t('lamp.relay')}
              </Text>
            </View>
          </View>
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
        <CardButton
          navLoc={'MonitoringDetail'}
          navigation={props.navigation}
          data={props.item || {}}
          text={'lamp.details'}
          t={t}
          isDetail={true}
        />
        {props.item.status == 'ACTIVE' && (
          <CardButton
            navLoc={''}
            navigation={props.navigation}
            data={props.item || {}}
            text={'lamp.control'}
            t={t}
            isDetail={false}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {},
  btn: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btns: {
    alignItems: 'center',
    padding: '20',
    color: 'blue',
  },
});
export default LampCard;
