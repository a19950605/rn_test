import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@token');
    console.log('gettoken');
    console.log(value);
    return value;
  } catch (e) {
    console.log(e);
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('@token');
  } catch (e) {
    console.log(e);
  }
};

const setTokenHelper = async token => {
  try {
    await AsyncStorage.setItem('@token', token);
  } catch (e) {
    console.log(e);
  }
};

export {getToken, removeToken, setTokenHelper};
