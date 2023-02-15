import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {useFetchUsersDataTest} from '../../hooks/ApiHook';

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
  isSucess: false,
  error: '',
};
export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  async (userToken, {rejectWithValue}) => {
    try {
      const data = await useFetchUsersDataTest(userToken);
      console.log('fetching');
      console.log(data);
      return data.json();
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
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
        status.isSucess = true;
        state.users = action.payload;
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
export const {dTst} = userSlice.actions;

export default userSlice.reducer;
//typescript
//datetime picker on filter (library issues) get back later
//change all state to redux
