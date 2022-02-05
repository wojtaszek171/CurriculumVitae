import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { createNotPublishedCV, fetchCVById, fetchCVs, removeCVById } from '../../restService/restService';
import { getAuthToken } from '../session/selector';
import { CVItem, CVListState } from './types';

const initialState: CVListState = {
  isLoading: false,
  list: {}
};

export const removeCV = createAsyncThunk(
  'cvList/removeCV',
  async ({ id }: { id: number }, { getState, dispatch }) => {
    const state = getState() as RootState;
    const authToken = getAuthToken(state);

    return removeCVById(authToken, id)
      .then(() => ({ id }));
  }
)

export const fetchAllCvs = createAsyncThunk(
  'cvList/fetchCvs',
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;
    const authToken = getAuthToken(state);

    return fetchCVs(authToken);
  }
)

export const createNewCV = createAsyncThunk(
  'cvList/createCV',
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;
    const authToken = getAuthToken(state);

    return createNotPublishedCV(authToken)
      .then(({ id }) => {
        return fetchCVById(authToken, id);
      })
  }
)

export const cvListSlice = createSlice({
  name: 'cvList',
  initialState,
  reducers: {
    addCvs: (state, action: PayloadAction<CVItem[]>) => {
      state.list = {
        ...state.list,
        ...Object.fromEntries(action.payload.map((cv: CVItem) => [cv.id, cv]))
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCvs.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCvs.fulfilled, (state, action) => {
        state.list = {
          ...state.list,
          ...Object.fromEntries(action.payload.map((cv: CVItem) => [cv.id, cv]))
        };
        state.isLoading = false;
      })
      .addCase(fetchAllCvs.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createNewCV.fulfilled, (state, action) => {
        state.list = {
          ...state.list,
          [action.payload.id]: {
            ...action.payload
          }
        };
      })
      .addCase(removeCV.fulfilled, (state, action) => {
        delete state.list[action.payload.id]
      })
  }
});

export const { addCvs } = cvListSlice.actions;

export default cvListSlice.reducer;
