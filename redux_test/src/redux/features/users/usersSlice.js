import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../../constants/constants';
import {requestOptions} from '../../../utils/requestOptions';
import {sortData} from '../../../utils/sortData';

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  isSucess: false,
  error: '',
  filterField: '',
  filterDesc: '',
};
export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  async ({userToken, filterDesc, filterField}, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.users}`,
        requestOptions({method: 'GET', userToken}),
      );
      let obj = await response.json();
      return {users: obj, filterDesc, filterField};
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const fetchOneUser = createAsyncThunk(
  'fetchOneUser',
  async ({userToken, id}, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.users}/${id}`,
        requestOptions({method: 'GET', userToken}),
      );
      obj = await response.json();
      return obj;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    dTst: (state, action) => {
      state.isLoading = true;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        if (state.isLoading == false) {
          state.isLoading = true;
        }
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        // Add user to the state array
        console.log('fulfill case****************************************');
        console.log(action);
        console.log(action.payload);
        state.isError = false;
        state.isLoading = false;
        state.isSucess = true;
        state.users = sortData(
          action.payload.users.content,
          action.payload.filterField,
          action.payload.filterDesc,
        );
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        if (state.isLoading == true) {
          state.isLoading = false;
          state.error = action.error;
          state.isError = true;
        }
      });
  },
});
export const {dTst} = usersSlice.actions;

export default usersSlice.reducer;
