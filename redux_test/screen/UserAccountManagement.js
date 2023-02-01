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
import {Icon} from '@rneui/themed';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import UserAccountCard from './components/UserAccountCard';
import {createStackNavigator} from '@react-navigation/stack';
import UserAccountDetailTab from './components/UserAccountDetailTab';
import UserAccountCreate from './components/UserAccountCreate';
import {useSelector} from 'react-redux';
import {useGetUsersQuery} from '../features/api/userApiSlice';
import SortDropDown from '../utils/sortFilter';
import {sortData} from '../utils/sortData';
import Modal from 'react-native-modal';
// const UserAccountManagement = () => {
//   const Stack = createStackNavigator();
//   return (
//     <Stack.Navigator
//       screenOptions={{headerTitle: 'eRFL Monitoring', headerShown: false}}>
//       <Stack.Screen name="UserAccount" component={UserAccountManagementTest} />
//       <Stack.Screen name="UserAccountDetail" component={UserAccountDetailTab} />
//       <Stack.Screen name="Create user" component={UserAccountCreate} />
//     </Stack.Navigator>
//   );
// };

const UserAccountManagement = () => {
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const userToken = useSelector(state => state.login.userToken?.Token);
  const [data, setData] = useState();
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
      `https://gis2.ectrak.com.hk:8900/api/v2/options/rolesAsOptions`,
      requestOptions,
    )
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
      `https://gis2.ectrak.com.hk:8900/api/v2/options/usernameAsOptions`,
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
  // const {
  //   data: users,
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error,
  // } = useGetUsersQuery(userToken);

  // if (isLoading) {
  //   console.log('redux event log loading');
  // } else if (isSuccess) {
  //   // setData(eventLogs);
  //   console.log('loading success123');
  //   console.log(users);
  // } else if (isError) {
  //   console.log('get event log error');
  //   console.log(error);
  // }

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
    };
    let appendStr = '';
    // if (selectedUserName != null && selectedRole != null) appendStr += '?';
    // // if (selectedUserName != null) {
    // //   appendStr += `keyword=${selectedUserName}`;
    // // }
    if (selectedRole != null) {
      appendStr += `?roleIds=${selectedRole}`;
    }
    fetch(
      `https://gis2.ectrak.com.hk:8900/api/system/user${appendStr}`,
      requestOptions,
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        //   console.log(result);
        // return result;
        setData(sortData(result?.content, filterField, filterDesc));
        setLoading(false);
      })
      .catch(error => console.log('error1', error));
  }, [loading, isFocused]);

  const sortOption = [
    {displayValue: 'Account ID', apiValue: 'id'},
    {displayValue: 'Display Name', apiValue: 'displayName'},
    {displayValue: 'Username', apiValue: 'username'},

    {displayValue: 'Status', apiValue: 'status'},
  ];
  //props?.item?.id, props?.item?.displayName,props?.item?.username,props?.item?.status

  return (
    <>
      {loading ? (
        <View>
          <Text>loading</Text>
        </View>
      ) : (
        <View style={{flex: 1, padding: 5, backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Create user');
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
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{display: 'none'}}
                onPress={() => {
                  setShowModal(true);
                }}>
                <Icon name="search" size={24} color="black" type="ionicon" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setShowFilter(!showFilter);
                }}>
                <Icon name="filter" size={24} color="black" type="ionicon" />
              </TouchableOpacity>
            </View>
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
              <UserAccountCard {...props} navigation={navigation} />
            )}
            keyExtractor={item => item.id}
          />
          <Modal isVisible={showModal}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'column',
                  width: '90%',
                  marginTop: 20,
                  padding: 20,
                  backgroundColor: 'white',
                }}>
                <View style={{alignItems: 'flex-end'}}>
                  <TouchableOpacity
                    onPress={() => {
                      setShowModal(false);
                    }}>
                    <Text>close</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text>username</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setShowUserModal(true);
                    }}>
                    <Text>{selectedUserName || 'ALL'}</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text>Role</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setShowRoleModal(true);
                    }}>
                    <Text>{selectedRoleName}</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text>Status</Text>
                  <Text>All</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                  }}>
                  <TouchableOpacity style={{marginRight: 5}}>
                    <Text style={{color: 'blue'}}>Reset</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setLoading(true);
                      setShowModal(false);
                    }}>
                    <Text style={{color: 'green'}}>Filter</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <UserModal
            users={userOption}
            isOpen={showUserModal}
            setOpen={setShowUserModal}
            setSelctedUserName={setSelctedUserName}
          />
          <RoleModal
            roles={roleOption}
            isOpen={showRoleModal}
            setOpen={setShowRoleModal}
            setSelectedRole={setSelectedRole}
            setSelectedRoleName={setSelectedRoleName}
          />
        </View>
      )}
    </>
  );
};
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
export default UserAccountManagement;
