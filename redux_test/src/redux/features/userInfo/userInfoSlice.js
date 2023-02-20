import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../../constants/constants';
import {requestOptions} from '../../../utils/requestOptions';

const initialState = {
  userInfo: {},
  isLoading: false,
  error: '',
};
export const getUserInfo = createAsyncThunk(
  'getUserInfo',
  async (userToken, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.profile}`,
        requestOptions({method: 'GET', userToken}),
      );
      let obj = await response.json();
      return obj;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getUserInfo.pending, (state, action) => {
        if (state.isLoading == false) {
          state.isLoading = true;
        }
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        // Add user to the state array
        console.log('fulfill userinfo****************************************');
        // console.log(action);
        console.log(action.payload);
        state.isLoading = false;
        state.isSucess = true;
        state.userInfo = action.payload;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        console.log('failed userinfo****************************************');
        if (state.isLoading == true) {
          state.isLoading = false;
          state.userInfo = {};
          state.error = action.error;
        }
      });
  },
});

export default userInfoSlice.reducer;
