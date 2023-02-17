import {Icon, Overlay} from '@rneui/themed';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../constants/styles';

export const ModalMessage = ({message, setShowModal, icon, color}) => {
  const [visible, setVisible] = useState(true);

  const toggleOverlay = () => {
    setVisible(!visible);
    setShowModal(false);
  };

  return (
    <View style={styles.flex_1}>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.msgOverlay}>
        <Icon
          name={icon || 'alert'}
          size={48}
          color={color || red}
          type="octicon"
        />
        <Text style={styles.loadTxt}>{message || 'no passing message'}</Text>
      </Overlay>
    </View>
  );
};
