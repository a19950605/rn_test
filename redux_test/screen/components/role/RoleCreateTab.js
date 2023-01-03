import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon, Tab, TabView} from '@rneui/themed';
import RoleDetailPermission from './RoleDetailPermisson';
import RoleCreateForm from './RoleCreateForm';
import RolePermission from './RolePermssion';
const RoleCreateTab = () => {
  const [index, setIndex] = useState(0);
  const [listData, setListData] = useState([]);
  async function getData() {
    return await AsyncStorage.getItem('@token').then(res => {
      console.log('tokentest');
      console.log(res);
      return res;
    });
  }
  const getRoleAsOptions = () => {
    getData().then(res => {
      var requestOptions = {
        method: 'GET',
        headers: {
          // Accept: '*',
          // 'Content-Type': 'application/json',
          'X-Token': res,
        },
      };
      fetch(
        `https://gis2.ectrak.com.hk:8900/api/userFuncPermissions`,
        requestOptions,
      )
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log('get role as option');
          //console.log(result.func[0].permissions); //5,4,2,3
          //console.log(result.func[1].permissions); //9,7,8,6
          //  console.log(result.func[2].permissions);
          console.log(result.func[8].permissions);
          let temp_arr = [];
          result?.func?.map(per => {
            temp_arr = temp_arr.concat(per.permissions);
          });
          // console.log('temp_arr');
          // console.log(temp_arr);
          // console.log(temp_arr.length);
          // return result;
          setListData(temp_arr);
        })
        .catch(error => console.log('error1', error));
    });
  };
  useEffect(() => {
    getRoleAsOptions();
  }, []);

  return (
    <>
      <Tab
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
          <RoleCreateForm />
        </TabView.Item>
        <TabView.Item
          style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
          {/* <RoleDetailPermission
       
      /> */}
          <RolePermission listData={listData} />
        </TabView.Item>
      </TabView>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: 20,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: 'green',
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => {
            alert('hello');
          }}>
          <Icon
            name="md-save-sharp"
            type="ionicon"
            size={24}
            color="green"
            style={{justifyContent: 'center', paddingRight: 5}}
          />
          <Text style={{color: 'green'}}> Save</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RoleCreateTab;
