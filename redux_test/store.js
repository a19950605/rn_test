import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './features/login/loginSlice';
import {apiSlice} from './features/api/apiSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
