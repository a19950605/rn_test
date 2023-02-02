// Import the RTK Query methods from the React-specific entry point
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const alarmApiSlice = createApi({
  reducerPath: 'alarmApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://gis2.ectrak.com.hk:8900/api'}),
  endpoints: builder => ({
    getOutStandingAlarm: builder.query({
      query: token => ({
        url: '/v2/alarms',
        method: 'GET',
        headers: {
          'X-Token': token,
        },
      }),
    }),
  }),
});

export const {useGetOutStandingAlarmQuery} = alarmApiSlice;
