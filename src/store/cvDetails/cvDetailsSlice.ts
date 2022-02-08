import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { fetchCVEducation, fetchCVEmployment, fetchCVLanguages, fetchCVSkills, fetchCVUser } from '../../restService/restService';
import { getAuthToken } from '../session/selector';
import { getSelectedCVId } from './selector';
import { CvDetailsState } from './types';

const initialState: CvDetailsState = {
  isLoading: false,
  language: 'en-us',
  cvId: null,
  list: {}
};

export const fetchCvDetails = createAsyncThunk(
  'cvDetails/fetchCvDetails',
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;
    const authToken = getAuthToken(state);
    const cvId = getSelectedCVId(state);

    if (!cvId) {
      throw new Error('No cv selected');
    }

    try {
      const cvSkills = await fetchCVSkills(authToken, cvId);
      const cvEducation = await fetchCVEducation(authToken, cvId);
      const cvEmployment = await fetchCVEmployment(authToken, cvId);
      const cvLanguages = await fetchCVLanguages(authToken, cvId);
      const cvUser = await fetchCVUser(authToken, cvId);

      let languages = {...cvUser.address};
      delete languages.id;
      languages = Object.keys(languages);
      
      return {
        firstLanguage: languages[0],
        cvDetails: {
          cvId,
          skills: cvSkills,
          education: cvEducation,
          employment: cvEmployment,
          languages: cvLanguages,
          user: cvUser
        }
      };
    } catch (e) {
      throw new Error('Failed to fetch CV data');
    }
  }
)

export const cvDetailsSlice = createSlice({
  name: 'cvDetails',
  initialState,
  reducers: {
    setCvId: (state, action: PayloadAction<string>) => {
      state.cvId = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCvDetails.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCvDetails.fulfilled, (state, action) => {
        const { payload: { cvDetails, firstLanguage } } = action;
        state.language = firstLanguage;
        state.list = {
          ...state.list,
          [cvDetails.cvId]: cvDetails
        };
        state.isLoading = false;
      })
      .addCase(fetchCvDetails.rejected, (state, action) => {
        state.isLoading = false;
      })
  }
});

export const { setCvId } = cvDetailsSlice.actions;

export default cvDetailsSlice.reducer;
