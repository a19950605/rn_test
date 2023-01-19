// Import the RTK Query methods from the React-specific entry point
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://gis2.ectrak.com.hk:8900/api/'}),
  endpoints: builder => ({
    getEventLog: builder.query({
      query: token => ({
        url: 'data/eventlog',
        method: 'GET',
        headers: {
          'X-Token': token,
        },
      }),
    }),
  }),
});

export const {useGetEventLogQuery} = apiSlice;
