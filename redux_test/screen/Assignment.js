import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AssignmentCard from './MonitoringCard'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>detail</Text>
    </View> 
  );
}

function Group() {
  return (
    <View style={{ flex: 1 }}>
      <AssignmentCard/>
      <AssignmentCard/>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Assignment() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator      screenOptions={{
           tabBarStyle: { color: 'orange' }, 
    indicatorStyle :{
          backgroundColor:'red',
          color:'red'
    }

  }}>
        <Tab.Screen name="Details" component={HomeScreen} />
        <Tab.Screen name="Group" component={Group} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
