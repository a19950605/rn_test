import React, {useState} from 'react';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';
import MarkerImage from 'react-native-marker-image';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ImageDetailMon = ({
  setImgX,
  setImgY,
  setLampX,
  setLampY,
  setUri,
  uri,
}) => {
  const [filePath, setFilePath] = useState({});

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
      console.log(response.assets[0].uri);
      console.log('testing response upload');
      console.log(filePath);
      // console.log(filePath[0]);
      // console.log(filePath[0].uri);
      console.log(setUri);
      setUri(response.assets[0].uri);
      console.log('setted uri');
      console.log(uri);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{borderWidth: 5, flexShrink: 1, height: 500, width: '100%'}}>
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
            image={!uri ? '' : {uri: uri}}
            markerImage={require('../../../assets/location-pin-icon-on-transparent-pin-vector-20942049.jpg')}
            markerSize={50}
            markerPosition={{x: 250, y: 200}}
            onChange={data => {
              console.log(data);
              setImgX(parseInt(data.originImage.width));
              setImgY(parseInt(data.originImage.height));
              setLampX(parseInt(data.originImage.marker.x));
              setLampY(parseInt(data.originImage.marker.y));
            }}
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
        {/* <Image source={{uri: filePath[0]?.uri}} style={styles.imageStyle} /> */}
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

export default ImageDetailMon;
