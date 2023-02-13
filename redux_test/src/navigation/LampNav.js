import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LampScreen from '../screen/Lamp/LampScreen';
import LampCreateScreen from '../screen/LampCreateScreen/LampCreateScreen';
import LampDetailScreen from '../screen/LampDetailScreen/LampDetailScreen';

export const LampNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerTitle: 'eRFL Monitoring', headerShown: false}}>
      <Stack.Screen name="MonitoringTestSub" component={LampScreen} />
      <Stack.Screen name="MonitoringDetail" component={LampDetailScreen} />
      <Stack.Screen name="Create Monitoring" component={LampCreateScreen} />
    </Stack.Navigator>
  );
};
