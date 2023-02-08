import {Icon} from '@rneui/themed';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {CardButton} from '../../../components/CardButton';
import {convertDate} from '../../../utils/getDate';
import {StatusBubble} from './StatusBubble';
//monitoring

const MonitoringCard = props => {
  // console.log('component load');
  // console.log(props.item);
  const {t} = useTranslation();

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
          <Text
            style={
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
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {t('lamp.status')}:{' '}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: 100,
                marginLeft: 5,
                paddingTop: 10,
                paddingBottom: 0,
                paddingLeft: 13,
                paddingRight: 13,
              }}>
              <Icon name="question" size={24} color="black" type="octicon" />
              <Text style={{fontSize: 11, textAlign: 'center'}}>
                {t('lamp.lamp')}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: 100,
                marginLeft: 5,
                paddingTop: 10,
                paddingBottom: 0,
                paddingLeft: 13,
                paddingRight: 13,
              }}>
              <Icon name="alert" size={24} color="red" type="octicon" />
              <Text style={{fontSize: 11, textAlign: 'center'}}>
                {t('lamp.health')}
              </Text>
            </View>

            <StatusBubble
              t={t}
              title={'lamp.conn'}
              status={props?.item?.connectionStatus}
            />
            <View
              style={{
                backgroundColor: '#f7f7f7',
                borderRadius: 100,
                marginLeft: 5,
                paddingTop: 10,
                paddingBottom: 0,
                paddingLeft: 13,
                paddingRight: 13,
              }}>
              <Icon
                name={
                  props?.item?.batteryStatus == 'NORMAL' ? 'plug' : 'question'
                }
                size={24}
                color={
                  props?.item?.batteryStatus == 'NORMAL' ? 'green' : 'black'
                }
                type="octicon"
              />
              <Text style={{fontSize: 11, textAlign: 'center'}}>
                {t('lamp.power')}
              </Text>
            </View>
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
export default MonitoringCard;
