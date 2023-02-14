import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import RoleListItem from './components/RoleListItem';
import {useNavigation} from '@react-navigation/native';
import {Icon, LinearProgress} from '@rneui/themed';
import {useSelector} from 'react-redux';
import SortDropDown from '../../utils/sortFilter';
import {sortData} from '../../utils/sortData';
import {useIsFocused} from '@react-navigation/native';
import CreateButton from '../../components/CreateButton';
import {useFetchRoleData} from '../../hooks/ApiHook';
import RoleManagementTable from './components/RoleManagementTable';
import {styles} from '../../constants/styles';

function RoleManagementScreen() {
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [filterDesc, setFilterDesc] = useState(false);
  const [filterField, setFilterField] = useState('id');
  // const [data, setData] = useState();
  const userToken = useSelector(state => state.login.userToken?.Token);

  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;

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
      <View style={styles.container}>
        <View style={styles.spaceBetweenP10}>
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
        ) : isLandscapeMode ? (
          <RoleManagementTable
            data={data}
            navigation={navigation}
            filterDesc={filterDesc}
            filterField={filterField}
            setFilterDesc={setFilterDesc}
            setFilterField={setFilterField}
            setLoading={setLoading}
          />
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
