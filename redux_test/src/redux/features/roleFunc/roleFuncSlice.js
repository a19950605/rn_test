//  myfuncs: '/api/userFuncPermissions',
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../../constants/constants';
import {requestOptions} from '../../../utils/requestOptions';

const initialState = {
  roleFunc: [],
  isLoading: false,
  error: '',
};
export const getRoleFunc = createAsyncThunk(
  'getRoleFunc',
  async (userToken, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.funcs}`,
        requestOptions({method: 'GET', userToken}),
      );
      let obj = await response.json();
      return obj;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const roleFuncSlice = createSlice({
  name: 'roleFunc',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getRoleFunc.pending, (state, action) => {
        if (state.isLoading == false) {
          state.isLoading = true;
        }
      })
      .addCase(getRoleFunc.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(
          'fulfill role permission****************************************',
        );
        // console.log(action.payload);
        let temp_arr = [];

        action.payload?.func?.map(per => {
          let temp_inner = per.permissions;
          // temp_inner.map(temp_m => ({
          //   ...temp_m,
          //   shortDisplayName: 'per.shortDisplayName',
          // }));
          for (const element of temp_inner) {
            element.shortDisplayName = per.shortDisplayName;
          }
          temp_arr = temp_arr.concat(temp_inner);
        });
        state.roleFunc = temp_arr;
        state.isLoading = false;
        console.log(temp_arr);
      })
      .addCase(getRoleFunc.rejected, (state, action) => {
        console.log('failed role func****************************************');
        state.isLoading = false;
        state.roleFunc = [];
        state.error = action.error;
      });
  },
});

export default roleFuncSlice.reducer;
