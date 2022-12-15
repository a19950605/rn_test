import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';

const MonitoringTest = () => {
  useEffect(() => {}, []);

  /**
   *refresh every 30 S OR CLICK
   *RFL ID=>DEVICE ID
   *RFL = CODE
   *EPIC
   *GROUP
    status as of:time
   erfl readliness:  two status
   status (lamp,health, conn, power ,relay)

   click detail
   detail tab 
   (details) controller id, device id(1-4), rfl ,relay channel index(dropdown 0-3)
   status (ACTIVE MAINTENANC ISOLATED)
   
   status tab (show icon status in detail)(health status, controller conn status,
    power status, lamp status,prev lamp statuss, relay channel status)
    
    assignment tab  (GROUP,EPIC,CP,ASSIGNED DATE, ETMS START TIME, ETMS FIN TIME)
    LAST CONTROL TAB (LAST CONTROL BY:sysadmin , LAST CONtRoL ACtiON: Off(Success), Last Control Datetime: 2022-12-06 XXX)
   
    location TAB (image location add pin)
    history TAB(SHOW COMMAND ID,USER,action,datetime)
    ALARM (show outstanding alarm by rfl: same as outstanding alarm)

    ADD BUTTON ->RFL NEW (DETAILS, LOCATION)
    -Controller ID, Device ID, RFL, Relay Channel Index
    
    */

  return (
    <View>
      <Text>Monitoring api call</Text>
    </View>
  );
};

export default MonitoringTest;
