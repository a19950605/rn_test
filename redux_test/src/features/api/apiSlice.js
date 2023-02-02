// Import the RTK Query methods from the React-specific entry point
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://gis2.ectrak.com.hk:8900/api/'}),
  endpoints: builder => ({
    getEventLog: builder.mutation({
      query: ({userToken, formdata}) => ({
        url: 'data/eventlog',
        method: 'POST',
        headers: {
          'X-Token': userToken,
          'Content-type': 'application/json;',
          Accept: '*',
        },
        body: formdata,
      }),
    }),
  }),
});
export const {useGetEventLogMutation} = apiSlice;
