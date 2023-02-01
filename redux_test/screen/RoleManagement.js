import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoleListItem from './components/role/RoleListItem';
import {createStackNavigator} from '@react-navigation/stack';
import RoleDetailTab from './components/role/RoleDetailTab';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import RoleCreateTab from './components/role/RoleCreateTab';
import {useSelector} from 'react-redux';
import {Menu} from 'react-native-paper';
import SortDropDown from '../utils/sortFilter';
import {sortData} from '../utils/sortData';
import {useIsFocused} from '@react-navigation/native';

const RoleManagement = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerTitle: 'Role Management', headerShown: false}}>
      <Stack.Screen name="RoleManagement" component={RoleManagementTest} />
      <Stack.Screen name="RoleDetail" component={RoleDetailTab} />
      <Stack.Screen name="RoleCreate" component={RoleCreateTab} />

      {/* <Stack.Screen name="Create user" component={UserAccountCreate} /> */}
    </Stack.Navigator>
  );
};
function RoleManagementTest() {
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [filterDesc, setFilterDesc] = useState(false);
  const [filterField, setFilterField] = useState('id');
  const [data, setData] = useState();
  const userToken = useSelector(state => state.login.userToken?.Token);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    fetch(
      'https://gis2.ectrak.com.hk:8900/api/system/user/rolePermission',
      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        // return result;
        // setData(result);
        console.log('role management');
        // console.log(result);
        setData(sortData(result?.content, filterField, filterDesc));
        setLoading(false);
      })
      .catch(error => console.log('error1', error));
  }, [loading, isFocused]);
  const sortOption = [
    {displayValue: 'Role ID', apiValue: 'id'},
    {displayValue: 'Code', apiValue: 'code'},
    {displayValue: 'Display Name', apiValue: 'displayName'},
    {displayValue: 'Status', apiValue: 'status'},
  ];

  return (
    <>
      {loading ? (
        <View>
          <Text>loading</Text>
        </View>
      ) : (
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RoleCreate');
              }}>
              <View
                style={{
                  borderColor: 'blue',
                  borderWidth: 1,
                  borderRadius: 5,
                  padding: 10,
                  flexDirection: 'row',
                  marginRight: 5,
                  alignItems: 'center',
                }}>
                <Icon
                  name="add-box"
                  size={24}
                  color="blue"
                  type="material"
                  style={{paddingRight: 5}}
                />
                <Text style={{color: 'blue'}}>Add</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowFilter(!showFilter);
              }}>
              <Icon name="filter" size={24} color="black" type="ionicon" />
            </TouchableOpacity>

            {showFilter && (
              <SortDropDown
                close={setShowFilter}
                setFilterDesc={setFilterDesc}
                setFilterField={setFilterField}
                setLoading={setLoading}
                sortOption={sortOption}
                filterDesc={filterDesc}
                filterField={filterField}
              />
            )}
          </View>
          <FlatList
            data={data}
            renderItem={props => (
              <RoleListItem {...props} navigation={navigation} />
            )}
          />
        </View>
      )}
    </>
  );
}

export default RoleManagement;
