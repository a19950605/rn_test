import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';
import {Tabs, TabScreen} from 'react-native-paper-tabs';
import {Button, Title, Paragraph} from 'react-native-paper';
import MonitoringCreateTab from './components/MonitoringCreateTab';
import ImageUploadTest from './components/ImageUploadTest';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ModalMessage} from '../../components/ModalMessage';
import {useTranslation} from 'react-i18next';
import {useEffect} from 'react';
import {createNewRecord} from '../../hooks/apiHook';
const MonitoringCreateScreen = props => {
  const [index, setIndex] = useState(0);
  const [imgX, setImgX] = useState(0);
  const [imgY, setImgY] = useState(0);
  const [lampX, setLampX] = useState(0);
  const [lampY, setLampY] = useState(0);
  const [uri, setUri] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState('red');
  const [icon, setIcon] = useState('alert');
  const [isSubmit, setIsSubmit] = useState(false);
  const userToken = useSelector(state => state.login.userToken?.Token);

  const navigation = useNavigation();
  const [responseCode, setResponseCode] = useState();
  const [alertMessage, setAlertMessage] = useState('');
  const [controllerList, setControllerList] = useState('');
  const [form, setForm] = useState({
    controllerId: '',
    deviceId: '',
    rfl: '',
    relayChannelIdx: '',
    status: 'ACTIVE',
  });

  //api/v2/options/rolesAsOptions
  const {t} = useTranslation();

  useEffect(() => {
    setControllerList(props?.route?.params);
  }, []);
  return (
    <>
      <Tabs
        style={{backgroundColor: 'white'}}
        iconPosition="top"
        uppercase={false} // true/false | default=true | labels are uppercase
      >
        <TabScreen label={t('lamp.details')} icon="clipboard-text">
          <MonitoringCreateTab
            setForm={setForm}
            form={form}
            isSubmit={isSubmit}
            t={t}
            controllerList={controllerList}
          />
        </TabScreen>
        <TabScreen label={t('lamp.location')} icon="map">
          <ImageUploadTest
            setImgX={setImgX}
            setImgY={setImgY}
            setLampX={setLampX}
            setLampY={setLampY}
            setUri={setUri}
            uri={uri}
            t={t}
          />
        </TabScreen>
      </Tabs>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: 20,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: 'green',
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
          }}
          onPress={() => {
            console.log('request body');
            console.log(JSON.stringify(form));
            setIsSubmit(true);
            if (
              uri == '' ||
              form.deviceId == '' ||
              form.controllerId == '' ||
              form.rfl == '' ||
              (form.relayChannelIdx == '' && form.relayChannelIdx != 0)
            ) {
              setAlertMessage('Missing required field!');
              setShowModal(true);
            } else {
              createNewRecord({
                token: userToken,
                setAlertMessage,
                setColor,
                setIcon,
                setShowModal,
                navigation,
                form,
                uri,
                lampX,
                lampY,
                imgX,
                imgY,
              });
            }
          }}>
          <Icon
            name="md-save-sharp"
            type="ionicon"
            size={24}
            color="green"
            style={{justifyContent: 'center', paddingRight: 5}}
          />
          <Text style={{color: 'green'}}> {t('lamp.save')}</Text>
        </TouchableOpacity>
      </View>
      <View>
        {showModal && (
          <ModalMessage
            message={alertMessage}
            setShowModal={setShowModal}
            color={color}
            icon={icon}
          />
        )}
      </View>
    </>
  );
};

export default MonitoringCreateScreen;
