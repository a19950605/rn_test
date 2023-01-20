import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MonitoringTab from '../screen/MonitoringTab';
import MonitoringCreate from '../screen/MonitoringCreate';
import MonitoringTest from '../screen/MonitoringTest';

export const MonitoringNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerTitle: 'eRFL Monitoring', headerShown: false}}>
      <Stack.Screen name="MonitoringTestSub" component={MonitoringTest} />
      <Stack.Screen name="MonitoringDetail" component={MonitoringTab} />
      <Stack.Screen name="Create Monitoring" component={MonitoringCreate} />
    </Stack.Navigator>
  );
};
