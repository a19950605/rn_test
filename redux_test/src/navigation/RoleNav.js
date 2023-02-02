import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RoleCreateScreen from '../screen/RoleCreateScreen/RoleCreateScreen';
import RoleManagementScreen from '../screen/RoleManagement/RoleManagementScreen';
import RoleDetailScreen from '../screen/RoleDetailScreen/RoleDetailScreen';

const RoleNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerTitle: 'Role Management', headerShown: false}}>
      <Stack.Screen name="RoleManagement" component={RoleManagementScreen} />
      <Stack.Screen name="RoleDetail" component={RoleDetailScreen} />
      <Stack.Screen name="RoleCreate" component={RoleCreateScreen} />

      {/* <Stack.Screen name="Create user" component={UserAccountCreate} /> */}
    </Stack.Navigator>
  );
};

export default RoleNav;
