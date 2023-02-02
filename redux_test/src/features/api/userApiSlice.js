// Import the RTK Query methods from the React-specific entry point
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://gis2.ectrak.com.hk:8900/api'}),
  endpoints: builder => ({
    getUsers: builder.query({
      query: userToken => ({
        url: '/system/user',
        method: 'GET',
        headers: {
          'X-Token': userToken,
        },
      }),
    }),
    createUser: builder.mutation({
      query: ({userToken, formdata}) => ({
        url: '/system/user',
        method: 'POST',
        body: formdata,
        headers: {
          'X-Token': userToken,
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});

export const {useGetUsersQuery, useCreateUserMutation} = userApiSlice;
