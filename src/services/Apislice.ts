import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = process.env.REACT_APP_API_FOR_All_POSTS
export const ApiSlice = createApi({
  reducerPath: 'ApiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: () => ({}),
  })



export default ApiSlice
