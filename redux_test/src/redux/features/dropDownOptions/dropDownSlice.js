import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../../constants/constants';
import {requestOptions} from '../../../utils/requestOptions';

const initialState = {
  controllerList: [],
  rolesAsOpt: [],
  isLoading: false,
  error: '',
};
export const getControllers = createAsyncThunk(
  'getControllers',
  async (userToken, {rejectWithValue}) => {
    let obj;
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.opCntlrcodes}`,
        requestOptions({method: 'GET', userToken}),
      );
      obj = await response.json();
      return obj;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getRoleAsOptions = createAsyncThunk(
  'getRoleAsOptions',
  async (userToken, {rejectWithValue}) => {
    let obj;
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.myfuncs}`,
        requestOptions({method: 'GET', userToken}),
      );
      obj = await response.json();
      return obj;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
/**
 * 
 *   let temp_arr = [];
        result?.func?.map(per => {
          temp_arr = temp_arr.concat(per.permissions);
 */
//`https://gis2.ectrak.com.hk:8900/api/userFuncPermissions`
export const dropdownSlice = createSlice({
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
        state.controllerList = action.payload;
      })
      .addCase(getControllers.rejected, (state, action) => {
        if (state.isLoading == true) {
          state.isLoading = false;
          state.controllerList = [];
          state.error = action.error;
        }
      })
      .addCase(getRoleAsOptions.pending, (state, action) => {
        if (state.isLoading == false) {
          state.isLoading = true;
        }
      })
      .addCase(getRoleAsOptions.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(
          'fulfill controllers****************************************',
        );
        // console.log(action);
        // console.log(action.payload);
        state.isLoading = false;
        let temp_arr = [];
        action.payload?.func?.map(per => {
          temp_arr = temp_arr.concat(per.permissions);
        });
      })
      .addCase(getRoleAsOptions.rejected, (state, action) => {
        if (state.isLoading == true) {
          state.isLoading = false;
          state.rolesAsOpt = [];
          state.error = action.error;
        }
      });
  },
});

export default dropdownSlice.reducer;
