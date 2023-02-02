import {Icon} from '@rneui/themed';
import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
//monitoring

const MonitoringCard = props => {
  console.log('component load');
  console.log(props.item);

  return (
    <View style={styles.card}>
      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>RFL ID: </Text>
          <Text> {JSON.stringify(props.item.id)}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>RFL : </Text>
          <Text>{props.item.code}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>EPIC : </Text>
          <Text>{props.item.activeAssignment?.epicName || '--'}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>GROUP : </Text>
          <Text>{props.item.activeAssignment?.groupName || '--'}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Status As Of:
          </Text>
          <Text>{props.item.activeAssignment?.dtCreate || '-'}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            eRFL Readlines:
          </Text>
          <Text
            style={
              props.item.status == 'ACTIVE'
                ? {color: 'green'}
                : {color: 'black'}
            }>
            {props.item.status}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Status:</Text>
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
              <Text style={{fontSize: 11}}>Lamp</Text>
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
              <Text style={{fontSize: 11}}>Health</Text>
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
              <Icon
                name={
                  props?.item?.connectionStatus == 'CONNLOST'
                    ? 'alert'
                    : props?.item?.connectionStatus == 'NORMAL'
                    ? 'device-desktop'
                    : 'question'
                }
                size={24}
                color={
                  props?.item?.connectionStatus == 'CONNLOST'
                    ? 'red'
                    : props?.item?.connectionStatus == 'NORMAL'
                    ? 'green'
                    : 'black'
                }
                type="octicon"
              />
              <Text style={{fontSize: 11}}>CONN</Text>
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
              <Text style={{fontSize: 11}}>Power</Text>
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
              <Text style={{fontSize: 11}}>Relay</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 5,
          marginRight: 5,
          justifyContent: 'space-around',
          backgroundColor: '#fafcff',
          marginBottom: 2,
        }}>
        <View>
          <Text
            style={{padding: 10, color: 'blue'}}
            onPress={() => {
              props.navigation.navigate('MonitoringDetail', props.item);
            }}>
            Details
          </Text>
        </View>
        <View>
          <Text style={{padding: 10, color: 'blue'}}>Control</Text>
        </View>
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
