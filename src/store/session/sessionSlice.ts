import { SessionState } from "./types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authenticateUser, fetchCurrentUser } from "../../restService/restService";
import { eraseCookie, getCookie, isDev } from "../../helpers";

const initialState: SessionState = {
  id: 0,
  username: '',
  firstName: '',
  lastName: '',
  authToken: ''
};

export const fetchCurrentUserData = createAsyncThunk(
  'session/fetchCurrentUserData',
  async (_, { getState, dispatch }) => {
    const token = getCookie('token');
    if (token)
      dispatch(setToken(token));
      return fetchCurrentUser(token);
  }
)

export const loginUsingCredentials = createAsyncThunk(
  'session/loginUsingCredentials',
  async (
    { login, password }: { login: string, password: string },
    { getState, dispatch }) =>
      authenticateUser(login, password)
)

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<SessionState>) => {
      state = {
        ...state,
        ...action.payload
      };
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload;
    },
    clearSession: (state) => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUserData.fulfilled, (state, action) => {
        state = {
          ...state,
          ...action.payload
        }
        return state;
      })
      .addCase(fetchCurrentUserData.rejected, (state, action) => {
        state = initialState;
        eraseCookie('token');
      })
      .addCase(loginUsingCredentials.fulfilled, (state, action) => {
        state = {
          ...state,
          ...action.payload,
          authToken: action.payload.token
        };

        if(isDev()) {
          document.cookie = `token=${action.payload.token}`;
        }
        return state;
      })
  }
});

export const { setSession, setToken, clearSession } = sessionSlice.actions;

export default sessionSlice.reducer;
