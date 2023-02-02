import React, {useState, useEffect} from 'react';

import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import RoleListItem from './components/RoleListItem';
import {useNavigation} from '@react-navigation/native';
import {Icon, LinearProgress} from '@rneui/themed';
import {useSelector} from 'react-redux';
import SortDropDown from '../../utils/sortFilter';
import {sortData} from '../../utils/sortData';
import {useIsFocused} from '@react-navigation/native';
import CreateButton from '../../components/CreateButton';
import {useFetchRoleData} from '../../hooks/apiHook';

function RoleManagementScreen() {
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [filterDesc, setFilterDesc] = useState(false);
  const [filterField, setFilterField] = useState('id');
  // const [data, setData] = useState();
  const userToken = useSelector(state => state.login.userToken?.Token);

  // useEffect(()   => {
  //   var requestOptions = {
  //     method: 'GET',
  //     headers: {
  //       // Accept: '*',
  //       // 'Content-Type': 'application/json',
  //       'X-Token': userToken,
  //     },
  //   };

  //   fetch(
  //     'https://gis2.ectrak.com.hk:8900/api/system/user/rolePermission',
  //     requestOptions,
  //   )
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(result => {
  //       // return result;
  //       // setData(result);
  //       console.log('role management');
  //       // console.log(result);
  //       setData(sortData(result?.content, filterField, filterDesc));
  //       setLoading(false);
  //     })
  //     .catch(error => console.log('error1', error));
  // }, [loading, isFocused]);
  const [data, error] = useFetchRoleData({
    userToken,
    loading,
    isFocused,
    setLoading,
    filterField,
    filterDesc,
  });

  const sortOption = [
    {displayValue: 'Role ID', apiValue: 'id'},
    {displayValue: 'Code', apiValue: 'code'},
    {displayValue: 'Display Name', apiValue: 'displayName'},
    {displayValue: 'Status', apiValue: 'status'},
  ];

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 5,
          }}>
          <CreateButton navigation={navigation} navLoc={'RoleCreate'} />
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
        {loading ? (
          <View>
            <LinearProgress color="red" />
          </View>
        ) : (
          <FlatList
            data={data}
            renderItem={props => (
              <RoleListItem {...props} navigation={navigation} />
            )}
          />
        )}
      </View>
    </>
  );
}

export default RoleManagementScreen;
