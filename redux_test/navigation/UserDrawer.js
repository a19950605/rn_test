import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import UserAccountCreate from '../screen/components/UserAccountCreate';
import UserAccountDetailTab from '../screen/components/UserAccountDetailTab';
import UserAccountManagement from '../screen/UserAccountManagement';

const Stack = createStackNavigator();

export const UserDrawer = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerTitle: 'eRFL Monitoring', headerShown: false}}>
      <Stack.Screen name="UserAccount" component={UserAccountManagement} />
      <Stack.Screen name="UserAccountDetail" component={UserAccountDetailTab} />
      <Stack.Screen name="Create user" component={UserAccountCreate} />
    </Stack.Navigator>
  );
};
