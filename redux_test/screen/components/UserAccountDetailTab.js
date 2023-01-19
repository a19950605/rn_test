import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Tab, TabView} from '@rneui/themed';
import Uabak from '../../Uabak';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

const UserAccountDetailTab = props => {
  const [index, setIndex] = React.useState(0);
  const [data1, setData1] = useState();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  const userToken = useSelector(state => state.login.userToken?.Token);
  // console.log('user account detail tabs');
  // console.log(props?.route?.params?.id);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    //api/userFuncPermissions
    fetch(
      'https://gis2.ectrak.com.hk:8900/api/userFuncPermissions',
      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log('permission');
        setData1(result?.func);
      })
      .catch(error => console.log('error1', error));

    userDetail(props?.route?.params?.id, userToken);
  }, []);
  console.log('permission result');
  console.log(data1);
  //   console.log(data1[7]?.permissions);
  const userDetail = (id, token) => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': token,
      },
    };
    fetch(
      `https://gis2.ectrak.com.hk:8900/api/system/user/${id}`,
      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log('user test');
        console.log(result);
        setUserData(result);
        // return result;
        //setData(result);
        setLoading(false);
      })
      .catch(error => console.log('error1', error));
  };

  return (
    <>
      {loading ? (
        <View>
          <Text>loading</Text>
        </View>
      ) : (
        <>
          <Tab
            style={{backgroundColor: 'white'}}
            value={index}
            scrollable={true}
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
              titleStyle={{fontSize: 12}}
              icon={{name: 'clipboard-text', type: 'material-community'}}
            />
            <Tab.Item
              title="Permission"
              titleStyle={{fontSize: 12}}
              icon={{name: 'rowing'}}
            />
          </Tab>
          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
              <Uabak userData={userData} />
            </TabView.Item>
            <TabView.Item
              style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
              <View style={{backgroundColor: 'white', flex: 1, padding: 10}}>
                <Text>permission</Text>
                <View style={{flex: 1, flexGrow: 1}}>
                  <FlatList
                    data={data1}
                    renderItem={props => <PermissionDetail {...props} />}
                  />
                </View>
                <View>
                  <Text>helo</Text>
                </View>
              </View>
            </TabView.Item>
          </TabView>
        </>
      )}
    </>
  );
};
///api/userFuncPermissions
const PermissionDetail = props => {
  console.log('inside per detail');
  // console.log(props?.item);
  // console.log(props?.item?.permissions);
  //   console.log(props.permission);
  return (
    <View
      style={{
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 2,
        padding: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text>Function ID </Text>
        <Text>{props?.item?.id}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Function </Text>
        <Text>{props?.item?.longDisplayName}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text>Permission </Text>
        <Text>{props?.item?.permissions?.displayName}</Text>
      </View>
    </View>
  );
};

export default UserAccountDetailTab;
