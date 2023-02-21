import React, {useEffect, useState} from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {useWindowDimensions, View} from 'react-native';
import {styles} from '../../constants/styles';
import {AcknowledgementTab} from './components/AcknowledgementTab';
import {OutstandingAlarmDetailTab} from './components/OutstandingAlarmDetailTab';
import {requestOptions} from '../../utils/requestOptions';
import {useSelector} from 'react-redux';

const OutstandingDetailScreen = props => {
  const [index, setIndex] = React.useState(0);

  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;
  const userToken = useSelector(state => state.login.userToken?.Token);

  console.log('inside tab');
  console.log(props.route.params);
  const [data, setData] = useState('');
  ///api/v2/alarm/{alarmId}
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    var reqOpt = requestOptions({method: 'GET', userToken});
    fetch(
      `https://gis2.ectrak.com.hk:8900/api/v2/alarm/${props?.route?.params?.id}`,
      reqOpt,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log('alarm details');
        console.log(result);
        setData(result);
        // return result;
        setLoading(false);
      })
      .catch(error => console.log('error155', error));
  }, []);
  return (
    <>
      {loading ? (
        <View>
          <Text>Loading</Text>
        </View>
      ) : (
        <>
          <Tab
            value={index}
            onChange={e => setIndex(e)}
            containerStyle={{
              backgroundColor: 'white',
              color: 'black',
            }}
            indicatorStyle={{
              backgroundColor: 'red',
              height: 3,
            }}
            variant="default">
            <Tab.Item
              title="Details"
              titleStyle={active => ({
                color: active ? '#7a2210' : 'black',
                fontSize: 12,
              })}
              icon={active => ({
                name: 'clipboard-text',
                color: 'black',
                type: 'material-community',
                color: active ? '#7a2210' : 'black',
              })}
            />
            <Tab.Item
              title="Acknowledgement"
              titleStyle={active => ({
                color: active ? '#7a2210' : 'black',
                fontSize: 12,
              })}
              icon={active => ({
                name: 'pencil',
                color: 'black',
                type: 'material-community',
                color: active ? '#7a2210' : 'black',
              })}
            />
          </Tab>

          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={styles.width100w}>
              <OutstandingAlarmDetailTab
                alarmDetail={data}
                isLandscapeMode={isLandscapeMode}
              />
            </TabView.Item>
            <TabView.Item style={styles.width100w}>
              <AcknowledgementTab
                alarmDetail={data}
                isLandscapeMode={isLandscapeMode}
              />
            </TabView.Item>
          </TabView>
        </>
      )}
    </>
  );
};

export default OutstandingDetailScreen;
