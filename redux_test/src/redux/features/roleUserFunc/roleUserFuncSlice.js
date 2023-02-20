//  myfuncs: '/api/userFuncPermissions',
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../../constants/constants';
import {requestOptions} from '../../../utils/requestOptions';

const initialState = {
  userFunc: [],
  isLoading: false,
  error: '',
};
export const getUserFunc = createAsyncThunk(
  'getUserFunc',
  async (userToken, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.myfuncs}`,
        requestOptions({method: 'GET', userToken}),
      );
      let obj = await response.json();
      return obj;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const roleUserFuncSlice = createSlice({
  name: 'roleUserFunc',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getUserFunc.pending, (state, action) => {
        if (state.isLoading == false) {
          state.isLoading = true;
        }
      })
      .addCase(getUserFunc.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(
          'fulfill user permission****************************************',
        );
        console.log(action.payload);
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
        action.payload = temp_arr;
        state.isLoading = false;
      })
      .addCase(getUserFunc.rejected, (state, action) => {
        console.log('failed userinfo****************************************');
        state.isLoading = false;
        state.userFunc = [];
        state.error = action.error;
      });
  },
});

export default roleUserFuncSlice.reducer;
