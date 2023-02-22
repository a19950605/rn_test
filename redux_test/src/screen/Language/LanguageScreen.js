import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';
import {styles} from '../../constants/styles';
import {useNavigation} from '@react-navigation/native';

const LanguageScreen = () => {
  const {t, i18n} = useTranslation();
  const {language: currentLanguage} = i18n;
  const [lang, setLang] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    setLang(currentLanguage);
  }, []);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => {}} style={styles.radioTouch}>
        <RadioButton
          value="first"
          color={'red'}
          status={lang == 'en' ? 'checked' : 'unchecked'}
          onPress={() => {
            setLang('en');
          }}
        />
        <Text style={styles.optionsText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.radioTouch}>
        <RadioButton
          value="first"
          color={'red'}
          status={lang == 'tc' ? 'checked' : 'unchecked'}
          onPress={() => {
            setLang('tc');
          }}
        />
        <Text style={styles.optionsText}>中文</Text>
      </TouchableOpacity>

      <View style={{}}>
        <TouchableOpacity
          onPress={() => {
            currentLanguage != lang &&
              (i18n.changeLanguage(lang),
              navigation.navigate('MonitoringTestSub'));
          }}>
          <Text
            style={{
              color: currentLanguage == lang ? 'gray' : 'blue',
              fontSize: 15,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LanguageScreen;
