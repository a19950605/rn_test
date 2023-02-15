import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
} from 'react-native';
import {Icon, LinearProgress} from '@rneui/themed';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import UserAccountCard from './components/UserAccountCard';
import {useDispatch, useSelector} from 'react-redux';
import SortDropDown from '../../utils/sortFilter';
import {sortData} from '../../utils/sortData';
import Modal from 'react-native-modal';
import CreateButton from '../../components/CreateButton';
import {useFetchUsersData} from '../../hooks/ApiHook';
import UserAccountTable from './components/UserAccountTable';
import {styles} from '../../constants/styles';
import {dTst, fetchUsers} from '../../features/user/userSlice';

const UserAccountManagementScreen = () => {
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const userToken = useSelector(state => state.login.userToken?.Token);
  const userList = useSelector(state => state.user);

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
      dispatch(fetchUsers(userToken));
      console.log('dispatch success');
      console.log(userList);

      alert('success');
    } catch (err) {
      alert('dispatch fail');

      console.log(err.message);
      console.log(err.message);
    }
  };

  useEffect(() => {
    console.log('testing dispatch');
    getUsers(userToken);
    dispatch(dTst());
  }, []);
  useEffect(() => {
    alert('stateis updated');
    console.log('state is updated');
    console.log(userList);
  }, [userList]);

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
      <View style={styles.screenInit}>
        <View style={styles.spaceBetween}>
          <CreateButton navigation={navigation} navLoc={'Create user'} />

          <View style={styles.row}>
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
        {loading ? (
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
            data={data}
            renderItem={props => (
              <UserAccountCard {...props} navigation={navigation} />
            )}
            keyExtractor={item => item.id}
          />
        )}
        <Modal isVisible={showModal}>
          <View style={styles.itemCenter}>
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
