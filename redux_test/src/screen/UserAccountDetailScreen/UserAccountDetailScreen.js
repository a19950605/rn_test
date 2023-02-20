import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import {Tab, TabView} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import UserAccountDetailTab from './components/UserAccountDetailTab';
import {styles} from '../../constants/styles';
import {fetchOneUser} from '../../redux/features/user/userSlice';
import {Tabs, TabScreen} from 'react-native-paper-tabs';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../constants/constants';

const UserAccountDetailScreen = props => {
  const [index, setIndex] = React.useState(0);
  const [data1, setData1] = useState();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  const userToken = useSelector(state => state.login.userToken?.Token);

  const dispatch = useDispatch();
  const {user, isLoading, isError, isSuccess, errorr} = useSelector(
    state => state.user,
  );
  const getOneUser = (userToken, id) => {
    try {
      //  const users = await dispatch(fetchUsers(userToken));
      dispatch(fetchOneUser({userToken, id}));
    } catch (err) {
      alert('dispatch error');
    }
  };

  useEffect(() => {
    getOneUser(userToken, props?.route?.params?.id);
  }, [props?.route?.params?.id]);
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
      `${appContextPaths[appDefDomain]}${EndPoint.userFuncPermissions}`,

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
      `${appContextPaths[appDefDomain]}${EndPoint.user}/${id}`,
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
          <Tabs
            style={styles.whiteBackground}
            iconPosition="top"
            uppercase={false} // true/false | default=true | labels are uppercase
          >
            <TabScreen label="Details" icon="clipboard-text">
              <UserAccountDetailTab userData={user} />
            </TabScreen>
            <TabScreen label="Permission" icon="map">
              <View style={styles.lampCreateContainer}>
                <Text>permission</Text>
                <View style={styles.flexGrow1}>
                  <FlatList
                    data={data1}
                    renderItem={props => <PermissionDetail {...props} />}
                  />
                </View>
                <View>
                  <Text>1</Text>
                </View>
              </View>
            </TabScreen>
          </Tabs>
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
        borderWidth: 0.2,
        borderRadius: 2,
        padding: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Function ID: </Text>
        <Text style={{color: 'black'}}>{props?.item?.id}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Function </Text>
        <Text style={{color: 'black'}}>{props?.item?.longDisplayName}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>Permission </Text>
        <Text style={{color: 'black'}}>
          {props?.item?.permissions?.displayName}
        </Text>
      </View>
    </View>
  );
};

export default UserAccountDetailScreen;
