import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MonitoringCreate from '../screen/Monitoring/MonitoringCreate';
import MonitoringScreen from '../screen/Monitoring/MonitoringScreen';
import MonitoringDetail from '../screen/Monitoring/MonitoringDetail';

export const MonitoringNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerTitle: 'eRFL Monitoring', headerShown: false}}>
      <Stack.Screen name="MonitoringTestSub" component={MonitoringScreen} />
      <Stack.Screen name="MonitoringDetail" component={MonitoringDetail} />
      <Stack.Screen name="Create Monitoring" component={MonitoringCreate} />
    </Stack.Navigator>
  );
};
