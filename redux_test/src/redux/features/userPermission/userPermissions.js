//get list only

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {requestOptions} from '../../../utils/requestOptions';
import {sortData} from '../../../utils/sortData';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../../constants/constants';

const initialState = {
  userPermissions: [],
  isLoading: false,
  error: '',
};
export const getPermissions = createAsyncThunk(
  'getPermissions',
  async (userToken, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.users}`,
        requestOptions({method: 'GET', userToken}),
      );
      let obj = await response.json();
      return obj;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const userPermissionSlice = createSlice({
  name: 'userPermission',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getPermissions.pending, (state, action) => {
        if (state.isLoading == false) {
          state.isLoading = true;
        }
      })
      .addCase(getPermissions.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(
          'fulfill get permission****************************************',
        );
        console.log(action);
        console.log(action.payload);
        state.isLoading = false;
        state.reducers = action.payload;
      })
      .addCase(getPermissions.rejected, (state, action) => {
        if (state.isLoading == true) {
          state.isLoading = false;
          state.error = action.error;
          state.isError = true;
        }
      });
  },
});

export default userPermissionSlice.reducer;
