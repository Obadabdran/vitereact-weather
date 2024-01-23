import { configureStore } from '@reduxjs/toolkit'
import { CurrentWeatherApi } from '../services/CurrentWeatherApi'


export const store = configureStore({
  reducer: {[CurrentWeatherApi.reducerPath]:CurrentWeatherApi.reducer,
 
 
 
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    CurrentWeatherApi.middleware,
    
)

})