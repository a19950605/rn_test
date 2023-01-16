import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userToken: null,
  isLoading: false,
  isSignout: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    signin: (state, action) => {
      console.log(state);
      console.log('logging redux state');
      console.log(action.payload);
      state.userToken = action.payload;
    },
    signout: state => {
      state.userToken = null;
      state.isLoading = false;
      state.isSignout = true;
    },
  },
});
export const loginToken = state => {
  state.counter.userToken;
};

export const {signin, signout} = loginSlice.actions;

export default loginSlice.reducer;
