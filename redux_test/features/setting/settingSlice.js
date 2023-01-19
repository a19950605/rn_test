import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  changePassword: {
    isSuccess: null,
    currentPassword: null,
    newPassword: null,
    confirmPassword: null,
  },
  lang: 'en',
};
