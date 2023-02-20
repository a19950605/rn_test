import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../../constants/constants';
import {requestOptions} from '../../../utils/requestOptions';

const initialState = {
  controllerList: [],
  isLoading: false,
  error: '',
};
export const getControllers = createAsyncThunk(
  'getControllers',
  async (userToken, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.opCntlrcodes}`,
        requestOptions({method: 'GET', userToken}),
      );
      let obj = await response.json();
      return obj;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const controllersSlice = createSlice({
  name: 'controllers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getControllers.pending, (state, action) => {
        if (state.isLoading == false) {
          state.isLoading = true;
        }
      })
      .addCase(getControllers.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(
          'fulfill controllers****************************************',
        );
        // console.log(action);
        // console.log(action.payload);
        state.isLoading = false;
        state.isSucess = true;
        state.controllerList = action.payload;
      })
      .addCase(getControllers.rejected, (state, action) => {
        if (state.isLoading == true) {
          state.isLoading = false;
          state.controllerList = [];
          state.error = action.error;
        }
      });
  },
});

export default controllersSlice.reducer;
