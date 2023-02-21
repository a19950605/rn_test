import {Icon} from '@rneui/themed';
import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {styles} from '../../../constants/styles';
import {AckRow} from './AckRow';
export const AcknowledgementTab = ({alarmDetail, isLandscapeMode}) => {
  const {height, width} = useWindowDimensions();
  return (
    <View style={styles.lampCreateContainer}>
      <AckRow
        isLandscapeMode={isLandscapeMode}
        alarmDetail={alarmDetail}
        content={'alarm'}
      />
      {alarmDetail.status != 'ACTIVE' && (
        <AckRow
          isLandscapeMode={isLandscapeMode}
          alarmDetail={alarmDetail}
          content={'ack'}
        />
      )}
      {alarmDetail.status == 'RESUMED' && (
        <AckRow
          isLandscapeMode={isLandscapeMode}
          alarmDetail={alarmDetail}
          content={'resumed'}
        />
      )}
    </View>
  );
};
