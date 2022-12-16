import React from 'react';
import {Tab, Text, TabView} from '@rneui/themed';
import {Input, Icon} from '@rneui/themed';

import {View, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';

const ImageUploadTest = () => {
  const [test, setText] = usseState();

  /**
   * image upload
   * preview in a container
   * zoom the image
   * click on the image and show the position
   * add the pin on image
   */
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>image select test</Text>
    </View>
  );
};

export default ImageUploadTest;
