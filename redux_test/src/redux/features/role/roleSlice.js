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
  error: '',
  createStatus: 'idle',
};
export const deleteRole = createAsyncThunk(
  'deleteRole',
  async ({userToken, id}, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.role}/${id}`,
        requestOptions({method: 'DELETE', userToken}),
      );
      let obj = await response.json();
      console.log('delete role result');

      return obj;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
export const getRoleDetail = createAsyncThunk(
  'fetchOneUser',
  async ({userToken, id}, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.role}/${id}`,
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

export const createRole = createAsyncThunk(
  'createUser',
  async ({userToken, data}, {rejectWithValue}) => {
    console.log('inside create role');
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
      `${appContextPaths[appDefDomain]}${EndPoint.role}`,
      requestOptions2,
    );
    let obj = await response.json();

    console.log('create user waiting');
    console.log(obj);
    console.log(obj.errorMsg);
    if (obj.errorMsg) {
      return rejectWithValue({error: obj.errorMsg});
    } else {
      return obj;
    }
    //   if (response.status == 200) return response.json();
  },
);

export const updateRole = createAsyncThunk(
  'updateRole',
  async ({userToken, data, id}, {rejectWithValue}) => {
    console.log('inside updateRole ');
    console.log(data);
    var requestOptions2 = {
      method: 'PUT',
      headers: {
        // Accept: '*',
        // 'Content-Type': 'application/json',
        'X-Token': userToken,
      },
      body: data,
    };

    const response = await fetch(
      `${appContextPaths[appDefDomain]}${EndPoint.role}/${id}`,
      requestOptions2,
    );
    let obj = await response.json();

    console.log('create user waiting');
    console.log(obj);
    console.log(obj.errorMsg);
    if (obj.errorMsg) {
      return rejectWithValue({error: obj.errorMsg});
    } else {
      return obj;
    }
    //   if (response.status == 200) return response.json();
  },
);

export const roleSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getRoleDetail.pending, (state, action) => {
        if (state.isLoading == false) {
          state.isLoading = true;
        }
      })
      .addCase(getRoleDetail.fulfilled, (state, action) => {
        // Add user to the state array
        console.log('fulfill case****************************************');
        console.log(action.payload);
        state.isLoading = false;
        state.user = action.payload.detail;
      })
      .addCase(getRoleDetail.rejected, (state, action) => {
        if (state.isLoading == true) {
          state.isLoading = false;
          state.error = action.error;
        }
      })
      .addCase(createRole.pending, (state, action) => {
        console.log('loading');
      })
      .addCase(createRole.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(
          'fulfill create role****************************************',
        );
        console.log(action.payload);
      })
      .addCase(createRole.rejected, (state, action) => {
        console.log('create user rejected');
        state.createStatus = 'failed';
      })
      .addCase(deleteRole.pending, (state, action) => {
        console.log('loading');
      })
      .addCase(deleteRole.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(
          'fulfill create role****************************************',
        );
        console.log(action.payload);
      })
      .addCase(deleteRole.rejected, (state, action) => {
        console.log('create user rejected');
      })
      .addCase(updateRole.pending, (state, action) => {
        console.log('loading');
      })
      .addCase(updateRole.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(
          'fulfill create role****************************************',
        );
        console.log(action.payload);
      })
      .addCase(updateRole.rejected, (state, action) => {
        console.log('update role rejected');
      });
  },
});

export default roleSlice.reducer;
//typescript
//datetime picker on filter (library issues) get back later
//change all state to redux
