import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../constants/constants';
import {requestOptions} from '../../utils/requestOptions';

const initialState = {
  activeDeviceList: [],
  isLoading: false,
  isError: false,
  isSucess: false,
  error: '',
};

//handling sortig
//fetch users
export const fetchActiveDevices = createAsyncThunk(
  'fetchDevices',
  async (userToken, {rejectWithValue}) => {
    try {
      let showActive = '?showOnlyActive=0';
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.opLamps}${showActive}`,
        requestOptions({method: 'GET', userToken}),
      );
      obj = await response.json();
      return obj;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const activeLampSlice = createSlice({
  name: 'lamp',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchActiveDevices.pending, (state, action) => {
        if (state.isLoading == false) {
          state.isLoading = true;
        }
      })
      .addCase(fetchActiveDevices.fulfilled, (state, action) => {
        // Add user to the state array
        console.log('fulfill lamplist****************************************');
        console.log(action);
        console.log(action.payload);
        state.isError = false;
        state.isLoading = false;
        state.isSucess = true;
        state.activeDeviceList = action.payload;
      })
      .addCase(fetchActiveDevices.rejected, (state, action) => {
        if (state.isLoading == true) {
          state.isLoading = false;
          state.error = action.error;
          state.isError = true;
        }
      });
  },
});

export default activeLampSlice.reducer;
//typescript
//datetime picker on filter (library issues) get back later
//change all state to redux
