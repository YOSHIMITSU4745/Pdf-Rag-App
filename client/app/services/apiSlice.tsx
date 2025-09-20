import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, FILE_URL } from './constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({
    postFile: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: FILE_URL,
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { usePostFileMutation } = apiSlice;
