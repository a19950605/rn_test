import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserAccountManagementScreen from '../screen/UserAccount/UserAccountManagementScreen';
import UserAccountDetailScreen from '../screen/UserAccountDetailScreen/UserAccountDetailScreen';
import UserAccountCreateScreen from '../screen/UserCreateScreen/UserAccountCreateScreen';

const Stack = createStackNavigator();

export const UserNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerTitle: 'eRFL Monitoring', headerShown: false}}>
      <Stack.Screen
        name="UserAccount"
        component={UserAccountManagementScreen}
      />
      <Stack.Screen
        name="UserAccountDetail"
        component={UserAccountDetailScreen}
      />
      <Stack.Screen name="Create user" component={UserAccountCreateScreen} />
    </Stack.Navigator>
  );
};
