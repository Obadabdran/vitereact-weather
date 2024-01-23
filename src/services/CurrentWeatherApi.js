import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const createdRequest=(url)=>({url})
export const CurrentWeatherApi = createApi({
  reducerPath: 'CurrentWeatherApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/'}),
  endpoints: (builder) => ({
    getCurrentWeather: builder.query({
      query: ({city}) => createdRequest(`weather?q=${city}&appid=c535f9769b9a00c89dbfab3c5be9a8b9`),
    }),
  }),
})


export const { useGetCurrentWeatherQuery } = CurrentWeatherApi

