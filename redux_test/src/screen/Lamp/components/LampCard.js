import {Icon} from '@rneui/themed';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {CardButton} from '../../../components/CardButton';
import {styles} from '../../../constants/styles';
import {StatusBubble} from './StatusBubble';
//monitoring

const LampCard = props => {
  // console.log('component load');
  // console.log(props.item);
  const {t} = useTranslation();

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
        setReadinessColor(styles.delBtnTitle);
        setReadinessStr(t('lamp.maintenance'));
        break;
      default:
        break;
    }
  }, [readinessStatus]);
  return (
    <View style={styles.card}>
      <View style={styles.p20}>
        <View style={styles.flexRow}>
          <Text style={styles.cardTitle}>RFL ID: </Text>
          <Text> {JSON.stringify(props.item.id)}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.cardTitle}>{t('lamp.rfl')} </Text>
          <Text>{props.item.code}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.cardTitle}>EPIC : </Text>
          <Text>{props.item.activeAssignment?.epicName || '--'}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.cardTitle}>{t('lamp.group')}: </Text>
          <Text>{props.item.activeAssignment?.groupName || '--'}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.cardTitle}>{t('lamp.statusasof')}: </Text>
          <Text>
            {props.item.dtKeepalive
              ? moment(props.item.dtKeepalive)
                  .utcOffset(8)
                  .format('YYYY-MM-DD HH:mm')
              : '--'}
          </Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.cardTitle}>{t('lamp.erflreadiness')}: </Text>
          <Text style={readinessColor}>{readinessStr}</Text>
        </View>
        <View style={styles.rowCenter}>
          <Text style={styles.cardTitle}>{t('lamp.status')}: </Text>
          <View style={styles.flexRow}>
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
            <StatusBubble
              mode={'relay'}
              t={t}
              title={'lamp.relay'}
              status={props?.item?.relayChannelStatus}
            />
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

export default LampCard;
