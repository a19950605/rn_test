import {Icon} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, TouchableOpacity} from 'react-native';
import {color, styles} from '../constants/styles';

const CreateButton = ({navLoc, navigation, dropDown1}) => {
  const {t} = useTranslation();

  return (
    <TouchableOpacity
      style={styles.createBtnContainer}
      onPress={() => {
        navigation.navigate(navLoc, dropDown1);
      }}>
      <Icon
        name="add-box"
        size={24}
        color="blue"
        type="material"
        style={styles.pr5}
      />
      <Text style={color.blue}>{t('general.add')}</Text>
    </TouchableOpacity>
  );
};

export default CreateButton;
