import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  appContextPaths,
  appDefDomain,
  EndPoint,
} from '../../../constants/constants';

import {requestOptions} from '../../../utils/requestOptions';

const initialState = {
  device: {},
  successId: '',
  isLoading: false,
  error: '',
  createStatus: 'idle',
};
export const getLampDetail = createAsyncThunk(
  'getLampDetail',
  async ({userToken, id}, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.lamp}/${id}`,
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

export const createLampDevice = createAsyncThunk(
  'createLampDevice',
  async ({userToken, data}, {rejectWithValue}) => {
    console.log('inside create detail');
    console.log(data);
    // try {
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
      `${appContextPaths[appDefDomain]}${EndPoint.lamp}`,
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
    // } catch (err) {
    //   if (!err.response) {
    //     throw err;
    //   }

    //   return rejectWithValue(err.response.data);
    // }
    //   if (response.status == 200) return response.json();
  },
);

export const deleteLampDetail = createAsyncThunk(
  'getLampDetail',
  async ({userToken, id}, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.lamp}/${id}`,
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

export const updateLampDetail = createAsyncThunk(
  'getLampDetail',
  async ({userToken, id}, {rejectWithValue}) => {
    try {
      const response = await fetch(
        `${appContextPaths[appDefDomain]}${EndPoint.lamp}/${id}`,
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

export const lampSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getLampDetail.pending, (state, action) => {
        if (state.isLoading == false) {
          state.isLoading = true;
        }
      })
      .addCase(getLampDetail.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(
          'fulfill getdevice****************************************',
        );
        console.log(action.payload);
        state.isLoading = false;
        state.device = action.payload.device;
      })
      .addCase(getLampDetail.rejected, (state, action) => {
        if (state.isLoading == true) {
          state.isLoading = false;
          state.error = action.error;
        }
      })
      .addCase(createLampDevice.pending, (state, action) => {
        console.log('loading');
      })
      .addCase(createLampDevice.fulfilled, (state, action) => {
        // Add user to the state array
        console.log(
          'fulfill create lamp device****************************************',
        );
        console.log(action.payload);
        state.successId = action.payload;
      })
      .addCase(createLampDevice.rejected, (state, action) => {
        console.log('create lamp rejected');
        console.log(action.error);
        //state.createStatus = 'failed';
      });
  },
});

export default lampSlice.reducer;
//typescript
//datetime picker on filter (library issues) get back later
//change all state to redux
