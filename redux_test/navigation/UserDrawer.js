import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import UserAccountCreate from '../screen/UserAccount/UserAccountCreate';
import UserAccountManagement from '../screen/UserAccount/UserAccountManagement';
import UserAccountDetail from '../screen/UserAccount/UserAccountDetail';

const Stack = createStackNavigator();

export const UserDrawer = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerTitle: 'eRFL Monitoring', headerShown: false}}>
      <Stack.Screen name="UserAccount" component={UserAccountManagement} />
      <Stack.Screen name="UserAccountDetail" component={UserAccountDetail} />
      <Stack.Screen name="Create user" component={UserAccountCreate} />
    </Stack.Navigator>
  );
};
