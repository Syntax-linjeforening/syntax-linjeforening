import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi, AuthenticatedUser } from "../services/auth";
import { RootState } from "../store";

type AuthState = {
  session: AuthenticatedUser | null;
}

const slice = createSlice({
  name: 'auth',
  initialState: { 
    session: null
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { session } }: PayloadAction<{session: AuthenticatedUser}>
    ) => {
      state.session = session;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.sessionData.matchFulfilled, (state, { payload }) => {
      state.session = (payload.authenticatedItem) ? payload.authenticatedItem : null;
    });
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
      state.session = null;
    });
  }
});

export const { setCredentials } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.session;