import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// import {Tab, Text, TabView} from '@rneui/themed';
import {Icon} from '@rneui/themed';
import {Tabs, TabScreen} from 'react-native-paper-tabs';
import LampCreateTab from './components/LampCreateTab';
import ImageUploadTest from './components/ImageUploadTest';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ModalMessage} from '../../components/ModalMessage';
import {useTranslation} from 'react-i18next';
import {useEffect} from 'react';
import {createNewRecord} from '../../hooks/ApiHook';
import {styles} from '../../constants/styles';
import {formBuilder} from '../../utils/formBuilder';
import {createLampDevice} from '../../redux/features/lamp/lampSlice';
import {resetErrorMsg} from '../../utils/resetErrorMsg';
import {FormValidator} from '../../utils/formValidator';
const MonitoringCreateScreen = props => {
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
  const {successId, error} = useSelector(state => state.lamp);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [alertMessage, setAlertMessage] = useState('');
  const [controllerList, setControllerList] = useState('');
  const [form, setForm] = useState({
    controllerId: '',
    deviceId: '',
    rfl: '',
    relayChannelIdx: '',
    status: 'ACTIVE',
  });
  const [controllerIdError, setControllerIdError] = useState('');
  const [deviceIdError, setDeviceIdError] = useState('');
  const [rflError, setRflError] = useState('');
  const [relayChannelIdxError, setRelayChannelIdxError] = useState('');
  const [isError, setIsError] = useState(false);

  //api/v2/options/rolesAsOptions

  //controllerIdError,deviceIdError,rflError,relayChannelIdxError
  const {t} = useTranslation();

  useEffect(() => {
    setControllerList(props?.route?.params);
  }, []);
  return (
    <>
      <Tabs
        style={styles.whiteBackground}
        iconPosition="top"
        uppercase={false} // true/false | default=true | labels are uppercase
      >
        <TabScreen label={t('lamp.details')} icon="clipboard-text">
          <LampCreateTab
            setForm={setForm}
            form={form}
            isSubmit={isSubmit}
            t={t}
            controllerList={controllerList}
            controllerIdError={controllerIdError}
            deviceIdError={deviceIdError}
            rflError={rflError}
            relayChannelIdxError={relayChannelIdxError}
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
      <View style={styles.saveDeleteButtonGroup}>
        <TouchableOpacity
          style={styles.saveBtnContainer}
          onPress={() => {
            console.log('request body');
            console.log(JSON.stringify(form));
            setIsSubmit(true);
            setIsError(false);
            resetErrorMsg({
              errorSetter: [
                setDeviceIdError,
                setControllerIdError,
                setRflError,
                setRelayChannelIdxError,
              ],
            });
            setIsSubmit(true);
            FormValidator({
              input: form.controllerId,
              setValue: setControllerIdError,
              setIsError,
            });
            FormValidator({
              input: form.deviceId,
              setValue: setDeviceIdError,
              setIsError,
            });
            FormValidator({
              input: form.rfl,
              setValue: setRflError,
              setIsError,
            });
            FormValidator({
              input: form.relayChannelIdx,
              setValue: setRelayChannelIdxError,
              setIsError,
            });
            if (isError) {
              setAlertMessage('Missing required field!');
              setShowModal(true);
            } else if (uri == '') {
              setAlertMessage('Missing image');
              setShowModal(true);
            } else {
              /**
               * if (response.status == 200) {
        setAlertMessage('Create success' + `(id:${data?.id})`);
        setIcon('check-circle');
        setColor('green');
        setShowModal(true);

        navigation.navigate('MonitoringTestSub');
      } else {
        setIcon('alert');
        setColor('red');
        setAlertMessage(
          'create fail: ' + response.status + '\n' + data?.errorMsg,
        );
               */

              // dispatch(
              //   createLampDevice({
              //     userToken: userToken,
              //     data: formBuilder(
              //       {key: 'controllerCode', value: form.controllerId},
              //       {key: 'code', value: form.rfl},
              //       {key: 'controllerDeviceId', value: parseInt(form.deviceId)},
              //       {key: 'lampPositionY', value: lampX},
              //       {key: 'lampPositionX', value: lampY},
              //       {key: 'imageW', value: imgX},
              //       {key: 'imageH', value: imgY},
              //       {
              //         key: 'relayChannelIdx',
              //         value: parseInt(form.relayChannelIdx),
              //       },
              //       {
              //         key: 'xxoo',
              //         value: {
              //           uri: uri,
              //           type: 'image/jpeg',
              //           name: 'xxoo',
              //         },
              //       },
              //       {key: 'status', value: 'ACTIVE'},
              //     ),
              //   }),
              // )
              //   .unwrap()
              //   .then(originalPromiseResult => {
              //     // handle result here

              //     console.log(originalPromiseResult);
              //     setAlertMessage('Create success' + `(id:${successId})`);
              //     setIcon('check-circle');
              //     setColor('green');
              //     setShowModal(true);

              //     navigation.navigate('MonitoringTestSub');
              //   })
              //   .catch(rejectedValueOrSerializedError => {
              //     // handle error here
              //     setIcon('alert');
              //     setColor('red');
              //     setAlertMessage('create fail:');
              //     setShowModal(true);
              //     //   alert('create fail');
              //   });

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
            style={styles.btnIconPadding}
          />
          <Text style={styles.saveBtnTitle}> {t('lamp.save')}</Text>
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
