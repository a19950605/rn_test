import {AsyncStorageStatic} from 'react-native';

const getToken = () => {
  AsyncStorageStatic.getToken('token');
};

const removeToken = () => {
  AsyncStorageStatic.removeItem('token');
};

const setToken = token => {
  AsyncStorageStatic.setItem('token', token);
};

export {getToken, removeToken, setToken};
