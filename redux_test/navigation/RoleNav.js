import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RoleManagement from '../screen/RoleManagement/RoleManagement';
import RoleDetail from '../screen/RoleManagement/RoleDetail';
import RoleCreate from '../screen/RoleManagement/RoleCreate';

const RoleNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerTitle: 'Role Management', headerShown: false}}>
      <Stack.Screen name="RoleManagement" component={RoleManagement} />
      <Stack.Screen name="RoleDetail" component={RoleDetail} />
      <Stack.Screen name="RoleCreate" component={RoleCreate} />

      {/* <Stack.Screen name="Create user" component={UserAccountCreate} /> */}
    </Stack.Navigator>
  );
};

export default RoleNav;
