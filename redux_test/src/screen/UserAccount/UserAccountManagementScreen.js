import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon, LinearProgress} from '@rneui/themed';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import UserAccountCard from './components/UserAccountCard';
import {useDispatch, useSelector} from 'react-redux';
import SortDropDown from '../../components/sortFilter';
import {sortData} from '../../utils/sortData';
import Modal from 'react-native-modal';
import CreateButton from '../../components/CreateButton';
import {useFetchUsersData} from '../../hooks/ApiHook';
import UserAccountTable from './components/UserAccountTable';
import {styles} from '../../constants/styles';
import {fetchUsers} from '../../redux/features/users/usersSlice';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../constants/constants';

const UserAccountManagementScreen = () => {
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const userToken = useSelector(state => state.login.userToken?.Token);
  const {users, isLoading, isError, isSuccess, errorr} = useSelector(
    state => state.users,
  );
  const {userFunc} = useSelector(state => state.roleUserFunc);

  // const [data, setData] = useState();
  const [selectedUserName, setSelctedUserName] = useState('All');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedRoleName, setSelectedRoleName] = useState('All');
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [filterDesc, setFilterDesc] = useState(false);
  const [filterField, setFilterField] = useState('id');
  const [showModal, setShowModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);

  const [roleOption, setRoleOption] = useState([]);
  const [userOption, setUserOption] = useState([]);
  const {height, width} = useWindowDimensions();
  const isLandscapeMode = width > height ? true : false;
  const dispatch = useDispatch();

  const getUsers = userToken => {
    try {
      //  const users = await dispatch(fetchUsers(userToken));
      dispatch(fetchUsers({userToken, filterDesc, filterField}));
    } catch (err) {}
  };
  useEffect(() => {
    getUsers(userToken);
  }, [isFocused, filterDesc, filterField]);

  useEffect(() => {
    if (!isFocused) {
      setShowFilter(false);
    }
  }, [isFocused]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    fetch(`${appContextPaths[appDefDomain]}${EndPoint.opRoles}`, requestOptions)
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log('get role as option');
        console.log(result);
        setRoleOption(result);
      })
      .catch(error => console.log('error1', error));

    fetch(
      `${appContextPaths[appDefDomain]}${EndPoint.opUsernames}`,
      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log('get username as option');
        console.log(result);
        setUserOption(result);
      })
      .catch(error => console.log('error1', error));
  }, []);

  const [data, error] = useFetchUsersData({
    userToken,
    loading,
    isFocused,
    setLoading,
    filterField,
    filterDesc,
  });
  const sortOption = [
    {displayValue: 'Account ID', apiValue: 'id'},
    {displayValue: 'Display Name', apiValue: 'displayName'},
    {displayValue: 'Username', apiValue: 'username'},

    {displayValue: 'Status', apiValue: 'status'},
  ];

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setShowFilter(false);
        }}>
        <View style={styles.screenInit}>
          <View style={styles.spaceBetween}>
            {userFunc?.find(o => o.code === 'SYSUSR_C') != undefined && (
              <CreateButton navigation={navigation} navLoc={'Create user'} />
            )}
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                  setShowFilter(!showFilter);
                }}>
                <Icon name="filter" size={24} color="black" type="ionicon" />
              </TouchableOpacity>
            </View>
            {showFilter && (
              <SortDropDown
                closeFilter={setShowFilter}
                setFilterDesc={setFilterDesc}
                setFilterField={setFilterField}
                setLoading={setLoading}
                sortOption={sortOption}
                filterDesc={filterDesc}
                filterField={filterField}
              />
            )}
          </View>
          {isLoading ? (
            <View>
              <LinearProgress color="red" />
            </View>
          ) : isLandscapeMode ? (
            <UserAccountTable
              data={data}
              setFilterDesc={setFilterDesc}
              setFilterField={setFilterField}
              filterDesc={filterDesc}
              filterField={filterField}
              setLoading={setLoading}
              navigation={navigation}
            />
          ) : (
            <FlatList
              data={users}
              renderItem={props => (
                <UserAccountCard {...props} navigation={navigation} />
              )}
              keyExtractor={item => item.id}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

//should be replaced by new component
const UserModal = ({users, isOpen, setOpen, setSelctedUserName}) => {
  return (
    <Modal isVisible={isOpen}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'column',
            width: '90%',
            marginTop: 20,
            padding: 20,
            backgroundColor: 'white',
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{alignItems: 'flex-end'}}
              onPress={() => {
                setOpen(false);
              }}>
              <Text>close</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'column'}}>
              <TouchableOpacity
                onPress={() => {
                  setSelctedUserName('');
                }}>
                <Text>All</Text>
              </TouchableOpacity>
              {users.map(user => {
                return (
                  <TouchableOpacity
                    key={user.username}
                    onPress={() => {
                      setSelctedUserName(user.username);
                    }}>
                    <Text>{user.username}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const RoleModal = ({
  roles,
  isOpen,
  setOpen,
  setSelectedRole,
  setSelectedRoleName,
}) => {
  return (
    <Modal isVisible={isOpen}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'column',
            width: '90%',
            marginTop: 20,
            padding: 20,
            backgroundColor: 'white',
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{alignItems: 'flex-end'}}
              onPress={() => {
                setOpen(false);
              }}>
              <Text>close</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'column'}}>
              {roles.map(role => {
                return (
                  <TouchableOpacity
                    key={role.id}
                    onPress={() => {
                      setSelectedRole(role.id);
                      setSelectedRoleName(
                        role.displayName + '(' + role.code + ')',
                      );
                    }}>
                    <Text>{role.displayName + '(' + role.code + ')'}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default UserAccountManagementScreen;
