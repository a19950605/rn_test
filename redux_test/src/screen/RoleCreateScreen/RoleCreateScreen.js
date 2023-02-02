import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon, Tab, TabView} from '@rneui/themed';
import RoleCreateForm from './components/RoleCreateForm';
import RolePermission from './components/RolePermssion';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const RoleCreateScreen = () => {
  const [index, setIndex] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  const [form, setForm] = useState({
    code: '',
    displayName: '',
    rmks: '',
    status: 'ACTIVE',
  });

  //permission,status,code,rmks,displayName
  const [listData, setListData] = useState([]);
  const [permission, setPermission] = useState([]);

  const userToken = useSelector(state => state.login.userToken?.Token);
  const navigation = useNavigation();

  const getRoleAsOptions = () => {
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
      })
      .catch(error => console.log('error1', error));
  };
  useEffect(() => {
    getRoleAsOptions();
  }, []);

  return (
    <>
      <Tab
        style={{backgroundColor: 'white', padding: 2}}
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
          <RoleCreateForm setForm={setForm} form={form} isSubmit={isSubmit} />
        </TabView.Item>
        <TabView.Item
          style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
          {/* <RoleDetailPermission
       
      /> */}
          <RolePermission listData={listData} setPermission={setPermission} />
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
            // alert('hello' + permission);
            setIsSubmit(true);
            if (!form.status || !form.code || !form.displayName) {
              alert('fill all required field');
            } else {
              createRole(userToken, form, permission, navigation);
            }
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

const createRole = (token, form, permission, navigation) => {
  var formdata = new FormData();
  formdata.append('teamId', 1);
  //code displayname rmks
  formdata.append('permissionIds', permission);
  formdata.append('status', form?.status || 'ACTIVE');
  formdata.append('code', form?.code);
  formdata.append('rmks', form?.rmks);
  formdata.append('displayName', form?.displayName);

  var requestOptions = {
    method: 'POST',
    headers: {
      // Accept: '*',
      // 'Content-Type': 'application/json',
      'X-Token': token,
    },
    body: formdata,
  };

  fetch(
    'https://gis2.ectrak.com.hk:8900/api/system/user/rolePermission',
    requestOptions,
  )
    .then(response => {
      if (response.status == 200) {
        alert('create success');
        navigation.navigate('RoleManagement');
      } else {
        alert('create fail');
      }

      return response.json();
    })
    .then(result => {
      console.log(result);
      // return result;
    })
    .catch(error => console.log('error1', error));
};
export default RoleCreateScreen;
