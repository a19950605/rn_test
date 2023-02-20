import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../../constants/constants';
import {requestOptions} from '../../../utils/requestOptions';
import {sortData} from '../../../utils/sortData';
import {sortData2} from '../../../utils/sortData2';

const initialState = {
  devices: [],
  isLoading: false,
  error: '',
  filterField: '',
  filterDesc: '',
};
export const getDevices = createAsyncThunk(
  'getDevices',
  async ({userToken, filterDesc, filterField, formdata}, {rejectWithValue}) => {
    let requestOptionBody = {
      method: 'POST',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
      body: formdata,
    };
    console.log('async thunk get devices');
    console.log('formdata');
    console.log(requestOptionBody);
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.lamps}`,
        requestOptionBody,
      );
      let obj = await response.json();
      return {devices: obj, filterDesc, filterField};
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const lampsSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getDevices.pending, (state, action) => {
        if (state.isLoading == false) {
          state.isLoading = true;
        }
      })
      .addCase(getDevices.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(
          'fulfill fetch devices****************************************',
        );
        console.log(action);
        console.log(action.payload);
        state.isLoading = false;
        state.devices = sortData2(
          action.payload.devices.content,
          action.payload.filterField,
          action.payload.filterDesc,
        );
      })
      .addCase(getDevices.rejected, (state, action) => {
        if (state.isLoading == true) {
          state.isLoading = false;
          state.error = action.error;
        }
      });
  },
});

export default lampsSlice.reducer;
