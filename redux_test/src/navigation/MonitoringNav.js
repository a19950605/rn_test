import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MonitoringScreen from '../screen/Monitoring/MonitoringScreen';
import MonitoringCreateScreen from '../screen/MonitoringCreateScreen/MonitoringCreateScreen';
import MonitoringDetailScreen from '../screen/MonitoringDetailScreen/MonitoringDetailScreen';

export const MonitoringNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerTitle: 'eRFL Monitoring', headerShown: false}}>
      <Stack.Screen name="MonitoringTestSub" component={MonitoringScreen} />
      <Stack.Screen
        name="MonitoringDetail"
        component={MonitoringDetailScreen}
      />
      <Stack.Screen
        name="Create Monitoring"
        component={MonitoringCreateScreen}
      />
    </Stack.Navigator>
  );
};
