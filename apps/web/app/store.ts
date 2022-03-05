import { configureStore } from '@reduxjs/toolkit'
import { api } from './services/api';
import authReducer from './auth/authSlice'
import { authApi } from './services/auth';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

store.dispatch(authApi.endpoints.sessionData.initiate(null));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;