import React, {useState} from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';
import MarkerImage from 'react-native-marker-image';

const ImageUploadTest = () => {
  const [filePath, setFilePath] = useState({});

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response.assets);
      console.log(response.assets);
      console.log('testing response upload');
      console.log(filePath);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{borderWidth: 5, flexShrink: 1, height: 600, width: '100%'}}>
        <ReactNativeZoomableView
          maxZoom={2}
          minZoom={0.5}
          zoomStep={0.5}
          contentWidth={300}
          contentHeight={150}
          initialZoom={1}
          panBoundaryPadding={50}
          bindToBorders={true}
          style={{
            padding: 10,
          }}>
          <MarkerImage
            image={require('../assets/test.jpg')}
            markerImage={require('../assets/test.jpg')}
            markerSize={50}
            onChange={data => console.log(data)}
          />
        </ReactNativeZoomableView>
      </View>
      <View style={styles.container}>
        {/* <Image
            source={{
              uri: 'data:image/jpeg;base64,' + filePath.data,
            }}
            style={styles.imageStyle}
                <Text>{JSON.stringify(filePath)}</Text>
        <Text>{filePath?.uri}</Text>
        <Text style={styles.textStyle}>{filePath[0]?.uri}</Text>

          /> */}

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>
        <Image source={{uri: filePath[0]?.uri}} style={styles.imageStyle} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});

export default ImageUploadTest;
