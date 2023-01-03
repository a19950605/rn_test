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
import {Tab, TabView} from '@rneui/themed';
import RoleDetailPermission from './RoleDetailPermisson';

const RoleDetailTab = props => {
  const [data, setData] = useState();
  const [listData, setListData] = useState();
  const [selectedData, setSelectedData] = useState();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    getOneRolePermission(props?.route?.params?.id); //checked option
    getRoleAsOptions();

    /**
     * [{"code": "SYSUSR_U", "displayName": "Modify", "icon": "fas fa-edit", "id": 4, "type": "AC"}, {"code": "SYSUSR_C", "displayName": "Create", "icon": "fas fa-plus-square", "id": 2, "type": "AC"}]
     *
     */
  }, []);

  async function getData() {
    return await AsyncStorage.getItem('@token').then(res => {
      console.log('tokentest');
      console.log(res);
      return res;
    });
  }
  const getOneRolePermission = id => {
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
        `https://gis2.ectrak.com.hk:8900/api/system/user/rolePermission/${id}`,
        requestOptions,
      )
        .then(response => {
          return response.json();
        })
        .then(result => {
          //these are checked optionsa
          console.log('getOneRolePermission');
          console.log(result?.detail?.permissions);
          // return result;
          // setData(result);
          setSelectedData(result?.detail?.permissions);
        })
        .catch(error => console.log('error1', error));
    });
  };

  //api/v2/options/rolesAsOptions

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
          <Text>Detail</Text>
        </TabView.Item>
        <TabView.Item
          style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
          <RoleDetailPermission
            setSelectedData={setSelectedData}
            selectedData={selectedData}
            listData={listData}
          />
        </TabView.Item>
      </TabView>
    </>
  );
};
export default RoleDetailTab;
