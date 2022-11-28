import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constants } from 'constants/constants';
import { setCredentials, unsetAuthState } from '../authState/authStateSlice';

const { API_BASE_URL } = constants;

const baseQuery = fetchBaseQuery({
  baseUrl: `${API_BASE_URL}/`,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().authState.authToken;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
      // headers.set('Access-Control-Allow-Origin', '*');
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    // console.log(result.error);
    console.log('sending refresh token');

    const refreshResult = await baseQuery('auth/refresh', api, extraOptions);

    console.log(refreshResult);
    if (refreshResult?.data) {
      console.log('DISPATCH REFRESH TOKEN IN USER SLICE');
      api.dispatch(setCredentials({ ...refreshResult.data }));

      // retry original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      if (refreshResult?.error?.status === 403 || refreshResult?.error?.status === 404) {
        refreshResult.error.data.message = 'Your login has expired. ';

        api.dispatch(unsetAuthState());
      }
      return refreshResult;
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'noticesApi',
  baseQuery: baseQueryWithReAuth,
  refetchOnMountOrArgChange: 1,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  tagTypes: ['Notices', 'Notice'],

  endpoints: builder => ({}),
});
