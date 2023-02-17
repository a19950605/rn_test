import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './features/login/loginSlice';
import usersReducer from './features/users/usersSlice';
import userReducer from './features/user/userSlice';
import activeLampReducer from './features/lamp/activeLampSlice';
import controllersReducer from './features/controller/controllerSlice';
import lampsReducer from './features/lamp/lampsSlice';
import lampReducer from './features/lamp/lampSlice';
// import {alarmApiSlice} from './features/api/alarmApiSlice';
// import {userApiSlice} from './features/api/userApiSlice';
export const store = configureStore({
  reducer: {
    login: loginReducer,
    users: usersReducer,
    user: userReducer,
    activeLamps: activeLampReducer,
    controllers: controllersReducer,
    lamps: lampsReducer,
    lamp: lampReducer,

    //
    //lamps:
    // // [apiSlice.reducerPath]: apiSlice.reducer,
    // [alarmApiSlice.reducerPath]: alarmApiSlice.reducer,
    // [userApiSlice.reducerPath]: userApiSlice.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat
      // // apiSlice.middleware,
      // alarmApiSlice.middleware,
      // userApiSlice.middleware,
      (),
});
