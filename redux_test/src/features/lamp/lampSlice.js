import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  devices: [],
  isLoading: false,
  isError: false,
  isSucess: false,
};
/**
 * 
 *   ADD_ORDER,
  FETCH_ORDER,
  ORDER_LOADING,
  ORDER_FAILURE,
   FETCH_PRODUCTS,
  PRODUCT_LOADING,
  PRODUCT_FAILURE,
 * 
//  */
// export const getLampList =createAsyncThunk()
export const lampSlice = createSlice({
  name: 'lamp',
  initialState,
  reducers: {
    loading: (state, action) => {},
    signout: state => {
      state.userToken = null;
      state.isLoading = false;
      state.isSignout = true;
    },
  },
});
export const loginToken = state => {
  state.counter.userToken;
};

export const {signin, signout} = loginSlice.actions;

export default loginSlice.reducer;
