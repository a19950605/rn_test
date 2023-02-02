import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OutstandingAlarmScreen from '../screen/OutstandingAlarm/OutstandingAlarmScreen';
import OutstandingDetailScreen from '../screen/OutstandingAlarmDetailScreen/OutstandingDetailScreen';

const AlarmNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerTitle: 'OutstandingAlarmSub', headerShown: false}}>
      <Stack.Screen
        name="OutstandingAlarmSub"
        component={OutstandingAlarmScreen}
      />
      <Stack.Screen
        name="OutstandingDetailTab"
        component={OutstandingDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default AlarmNav;
