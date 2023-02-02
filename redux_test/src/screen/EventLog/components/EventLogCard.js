import React from 'react';
import {Text, View} from 'react-native';
const EventLogCard = props => {
  return (
    <View style={{borderColor: 'gray', borderWidth: 0.2, padding: 10}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>User: </Text>

        <Text style={{color: 'black'}}> {props?.item?.username}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Datetime: </Text>
        <Text style={{color: 'black'}}>
          {' '}
          {props?.item?.time?.split('.')[0]}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Function: </Text>
        <Text style={{color: 'black'}}> {props?.item?.func}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Type: </Text>
        <View>
          <Text style={{color: 'black'}}> {props?.item?.type}</Text>

          <Text style={{color: 'black', width: '70%'}}>
            {props?.item?.dest.split(' ')[0] +
              '\n' +
              props?.item?.dest.split(' ')[1] +
              props?.item?.dest.split(' ')[2] +
              props?.item?.dest.split(' ')[3]}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Data: </Text>
        <View style={{width: '100%'}}>
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
