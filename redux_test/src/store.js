import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './features/login/loginSlice';
import {apiSlice} from './features/api/apiSlice';
import {alarmApiSlice} from './features/api/alarmApiSlice';
import {userApiSlice} from './features/api/userApiSlice';
export const store = configureStore({
  reducer: {
    login: loginReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [alarmApiSlice.reducerPath]: alarmApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      alarmApiSlice.middleware,
      userApiSlice.middleware,
    ),
});
