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
  isLastPage: false,
  isFirstPage: true,
  totalPages: 0,
};
export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  async ({userToken, filterDesc, filterField, page}, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${
          EndPoint.users
        }?page=${page}&sort=${filterField},${
          filterDesc == true ? 'desc' : 'asc'
        }`,
        requestOptions({method: 'GET', userToken}),
      );
      let obj = await response.json();
      return obj;
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
  reducers: {},
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
        console.log(
          'fulfill fetch users****************************************',
        );
        console.log(action);
        console.log(action.payload);
        state.isError = false;
        state.isLoading = false;
        state.isSucess = true;
        state.totalPages = action.payload.totalPages;
        //  // state.isLastPage = state.payload.last;
        state.isLastPage = action.payload.last;

        console.log('before fetch user array**************************');
        console.log(state.users);
        if (action.payload.first == true) {
          state.users = action.payload.content;
        } else if (action.payload.first != true) {
          state.users = [...state.users, ...action.payload.content];
        }

        console.log('updated fetch user array**************************');
        console.log(state.users);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log(
          'failed fetch users****************************************',
        );
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
