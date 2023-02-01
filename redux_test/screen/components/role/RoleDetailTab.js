import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon, Tab, TabView} from '@rneui/themed';
import RoleDetailPermission from './RoleDetailPermisson';
import {useSelector} from 'react-redux';
import {set} from 'react-native-reanimated';
import RoleDetailForm from './RoleDetailForm';
import {useNavigation} from '@react-navigation/native';

const RoleDetailTab = props => {
  const navigation = useNavigation();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [listData, setListData] = useState();
  const [selectedData, setSelectedData] = useState([]);
  const [selectedId, setSelectedId] = useState([]);

  const [index, setIndex] = useState(0);
  const [responseCode, setResponseCode] = useState();
  const [form, setForm] = useState({
    code: '',
    displayName: '',
    rmks: '',
    status: 'ACTIVE',
  });

  const userToken = useSelector(state => state.login.userToken?.Token);

  useEffect(() => {
    getOneRolePermission(props?.route?.params?.id, userToken); //checked option
    getRoleAsOptions(userToken);

    /**
     * [{"code": "SYSUSR_U", "displayName": "Modify", "icon": "fas fa-edit", "id": 4, "type": "AC"}, {"code": "SYSUSR_C", "displayName": "Create", "icon": "fas fa-plus-square", "id": 2, "type": "AC"}]
     *
     */
  }, []);

  const getOneRolePermission = (id, userToken) => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
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

        selectedData?.map(p => {
          console.log('looping p');
          console.log(p);
          console.log('pid');
          console.log(p.id);
          setSelectedId(old => [...old, p.id]);
        });
        setLoading2(false);
      })
      .catch(error => console.log('error1', error));
  };

  //api/v2/options/rolesAsOptions

  const getRoleAsOptions = userToken => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
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
        setLoading(false);
      })
      .catch(error => console.log('error1', error));
  };
  const deleteConfirm = token => {
    return Alert.alert(
      'Delete',
      'Are you sure you want to remove this record?',
      [
        // The "Yes" button
        {
          text: 'Yes',
          onPress: () => {
            deleteRecord(token);
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: 'No',
        },
      ],
    );
  };
  const deleteRecord = token => {
    var requestOptions = {
      method: 'DELETE',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': token,
      },
    };
    fetch(
      `https://gis2.ectrak.com.hk:8900/api/system/user/rolePermission/${props.route.params.id}`,
      requestOptions,
    )
      .then(response => {
        if (response.status == 200) {
          alert('delete success');
          navigation.navigate('RoleManagement');
        } else {
          alert('delete fail: ' + response.status);
        }

        return response.json();
      })
      .then(result => {
        //  console.log(result);
        // return result;
        console.log('submit result');
        // console.log(result);

        //  if (responseCode == 200) {
        //    alert('delete success' + result?.id);
        //  navigation.navigate('RoleManagement');
        //  } else {
        //   alert('delete fail: ' + responseCode + '\n' + result?.errorMsg);
        //  }
      })
      .catch(error => console.log('error1Z', error));
  };
  return (
    <>
      {loading && loading2 ? (
        <View>
          <Text>Loading</Text>
        </View>
      ) : (
        <>
          <Tab
            style={{backgroundColor: 'white', padding: 10}}
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
              icon={{name: 'shield-check', type: 'material-community'}}
            />
          </Tab>
          <TabView value={index} onChange={setIndex} animationType="spring">
            <TabView.Item style={{backgroundColor: 'white', width: '100%'}}>
              <RoleDetailForm setForm={setForm} form={form} data={props} />
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
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                marginRight: 5,
              }}
              onPress={() => {
                deleteConfirm(userToken);
              }}>
              <Icon
                name="md-save-sharp"
                type="ionicon"
                size={24}
                color="red"
                style={{justifyContent: 'center', paddingRight: 5}}
              />
              <Text style={{color: 'red'}}> Delete</Text>
            </TouchableOpacity>
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
                console.log('request body');
                console.log(JSON.stringify(form));
                console.log(selectedData);
                updateRole(
                  userToken,
                  form,
                  selectedData,
                  navigation,
                  props?.route?.params?.id,
                );
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
      )}
    </>
  );
};

const updateRole = (token, form, selectedData, navigation, id) => {
  var formdata = new FormData();
  formdata.append('teamId', 1);
  //code displayname rmks
  formdata.append('permissionIds', selectedData);
  formdata.append('status', form?.status || 'ACTIVE');
  formdata.append('code', form?.code);
  formdata.append('rmks', form?.rmks);
  formdata.append('displayName', form?.displayName);

  var requestOptions = {
    method: 'PUT',
    headers: {
      // Accept: '*',
      // 'Content-Type': 'application/json',
      'X-Token': token,
    },
    body: formdata,
  };

  fetch(
    'https://gis2.ectrak.com.hk:8900/api/system/user/rolePermission/' + id,
    requestOptions,
  )
    .then(response => {
      if (response.status == 200) {
        alert('update success');
        navigation.navigate('RoleManagement');
      } else {
        alert('update fail');
      }

      return response.json();
    })
    .then(result => {
      console.log(result);
      // return result;
    })
    .catch(error => console.log('error1', error));
};
export default RoleDetailTab;
