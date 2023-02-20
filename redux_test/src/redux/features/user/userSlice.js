import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../../constants/constants';
import {requestOptions} from '../../../utils/requestOptions';

const initialState = {
  user: {},
  isLoading: false,
  isError: false,
  isSucess: false,
  error: '',
  createStatus: 'idle',
};
export const fetchOneUser = createAsyncThunk(
  'fetchOneUser',
  async ({userToken, id}, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.users}/${id}`,
        requestOptions({method: 'GET', userToken}),
      );
      let obj = await response.json();
      console.log('fetched result');

      return obj;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const createUser = createAsyncThunk(
  'createUser',
  async ({userToken, data}, {rejectWithValue}) => {
    console.log('inside create user');
    console.log(data);
    var requestOptions2 = {
      method: 'POST',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
      body: data,
    };
    const response = await fetch(
      `${appContextPaths[appDefDomain]}${EndPoint.users}`,
      requestOptions2,
    );
    let obj = await response.json();

    console.log('create user waiting');
    console.log(obj);
    console.log(obj.errorMsg);
    if (obj.errorMsg) {
      return rejectWithValue({error: obj.funcDesc});
    } else {
      return obj;
    }
    //   if (response.status == 200) return response.json();
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchOneUser.pending, (state, action) => {
        if (state.isLoading == false) {
          state.isLoading = true;
        }
      })
      .addCase(fetchOneUser.fulfilled, (state, action) => {
        // Add user to the state array
        console.log('fulfill case****************************************');
        console.log(action.payload);
        state.isError = false;
        state.isLoading = false;
        state.isSucess = true;
        state.user = action.payload.detail;
      })
      .addCase(fetchOneUser.rejected, (state, action) => {
        if (state.isLoading == true) {
          state.isLoading = false;
          state.error = action.error;
          state.isError = true;
        }
      })
      .addCase(createUser.pending, (state, action) => {
        console.log('loading');
      })
      .addCase(createUser.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(
          'fulfill create user****************************************',
        );
        console.log(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        console.log('create user rejected');
        state.createStatus = 'failed';
      });
  },
});

export default userSlice.reducer;
//typescript
//datetime picker on filter (library issues) get back later
//change all state to redux
