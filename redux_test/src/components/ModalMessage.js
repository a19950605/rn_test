import {Icon, Overlay} from '@rneui/themed';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

export const ModalMessage = ({message, setShowModal, icon, color}) => {
  const [visible, setVisible] = useState(true);

  const toggleOverlay = () => {
    setVisible(!visible);
    setShowModal(false);
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={{
          backgroundColor: 'black',
          paddingVertical: 30,
          paddingHorizontal: 50,
        }}>
        <Icon
          name={icon || 'alert'}
          size={48}
          color={color || red}
          type="octicon"
        />
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          {message || 'no passing message'}
        </Text>
      </Overlay>
    </View>
  );
};
