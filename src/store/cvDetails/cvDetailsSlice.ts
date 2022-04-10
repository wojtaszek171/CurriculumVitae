import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import restService from '../../restService/restService';
import { getAuthToken } from '../session/selector';
import { getSelectedCVId } from './selector';
import { CvDetailsState, CVUser, EducationItem, EmploymentItem, LanguageItem, SkillItem } from './types';

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
      const cvSkills = await restService.fetchCVSkills(authToken, cvId);
      const cvEducation = await restService.fetchCVEducation(authToken, cvId);
      const cvEmployment = await restService.fetchCVEmployment(authToken, cvId);
      const cvLanguages = await restService.fetchCVLanguages(authToken, cvId);
      const cvUser = await restService.fetchCVUser(authToken, cvId);

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

export const updateUserData = createAsyncThunk(
  'cvDetails/updateUserData',
  async (body: Partial<CVUser>, { getState, dispatch }) => {
    const state = getState() as RootState;
    const authToken = getAuthToken(state);
    const cvId = getSelectedCVId(state);

    if (!cvId) {
      throw new Error('No cv selected');
    }

    try {
      await restService.updateCVUser(authToken, cvId, body);
      const cvUser = await restService.fetchCVUser(authToken, cvId);

      return {
        cvId,
        cvUser
      };
    } catch (e) {
      throw new Error('Failed to update user data');
    }
  }
)

export const createEmptyEducation = createAsyncThunk(
  'cvDetails/createEmptyEducation',
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;
    const authToken = getAuthToken(state);
    const cvId = getSelectedCVId(state);

    if (!cvId) {
      throw new Error('No cv selected');
    }

    try {
      await restService.createEducationItem(authToken, cvId, {} as EducationItem);
      const cvEducation = await restService.fetchCVEducation(authToken, cvId);

      return {
        cvId,
        cvEducation
      };
    } catch (e) {
      throw new Error('Failed to create Education');
    }
  }
)

export const deleteEducationItem = createAsyncThunk(
  'cvDetails/deleteEducationItem',
  async (id: string, { getState, dispatch }) => {
    const state = getState() as RootState;
    const authToken = getAuthToken(state);
    const cvId = getSelectedCVId(state);

    if (!cvId) {
      throw new Error('No cv selected');
    }

    try {
      await restService.deleteEducationItem(authToken, cvId, id);
      const cvEducation = await restService.fetchCVEducation(authToken, cvId);

      return {
        cvId,
        cvEducation
      };
    } catch (e) {
      throw new Error('Failed to delete Education');
    }
  }
)


export const createEmptyEmployment = createAsyncThunk(
  'cvDetails/createEmptyEmployment',
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;
    const authToken = getAuthToken(state);
    const cvId = getSelectedCVId(state);

    if (!cvId) {
      throw new Error('No cv selected');
    }

    try {
      await restService.createEmploymentItem(authToken, cvId, {} as EmploymentItem);
      const cvEmployment = await restService.fetchCVEmployment(authToken, cvId);

      return {
        cvId,
        cvEmployment
      };
    } catch (e) {
      throw new Error('Failed to create Employment');
    }
  }
)

export const deleteEmploymentItem = createAsyncThunk(
  'cvDetails/deleteEmploymentItem',
  async (id: string, { getState, dispatch }) => {
    const state = getState() as RootState;
    const authToken = getAuthToken(state);
    const cvId = getSelectedCVId(state);

    if (!cvId) {
      throw new Error('No cv selected');
    }

    try {
      await restService.deleteEmploymentItem(authToken, cvId, id);
      const cvEmployment = await restService.fetchCVEmployment(authToken, cvId);

      return {
        cvId,
        cvEmployment
      };
    } catch (e) {
      throw new Error('Failed to delete Employment');
    }
  }
)

export const createEmptyLanguage = createAsyncThunk(
  'cvDetails/createEmptyLanguage',
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;
    const authToken = getAuthToken(state);
    const cvId = getSelectedCVId(state);

    if (!cvId) {
      throw new Error('No cv selected');
    }

    try {
      await restService.createLanguageItem(authToken, cvId, {} as LanguageItem);
      const cvLanguages = await restService.fetchCVLanguages(authToken, cvId);

      return {
        cvId,
        cvLanguages
      };
    } catch (e) {
      throw new Error('Failed to create Employment');
    }
  }
)

export const deleteLanguageItem = createAsyncThunk(
  'cvDetails/deleteLanguageItem',
  async (id: string, { getState, dispatch }) => {
    const state = getState() as RootState;
    const authToken = getAuthToken(state);
    const cvId = getSelectedCVId(state);

    if (!cvId) {
      throw new Error('No cv selected');
    }

    try {
      await restService.deleteLanguageItem(authToken, cvId, id);
      const cvLanguages = await restService.fetchCVLanguages(authToken, cvId);

      return {
        cvId,
        cvLanguages
      };
    } catch (e) {
      throw new Error('Failed to delete Language');
    }
  }
)

export const createEmptySkill = createAsyncThunk(
  'cvDetails/createEmptySkill',
  async (_, { getState, dispatch }) => {
    const state = getState() as RootState;
    const authToken = getAuthToken(state);
    const cvId = getSelectedCVId(state);

    if (!cvId) {
      throw new Error('No cv selected');
    }

    try {
      await restService.createSkillItem(authToken, cvId, {} as SkillItem);
      const cvSkills = await restService.fetchCVSkills(authToken, cvId);

      return {
        cvId,
        cvSkills
      };
    } catch (e) {
      throw new Error('Failed to create Skill');
    }
  }
)

export const deleteSkillItem = createAsyncThunk(
  'cvDetails/deleteSkillItem',
  async (id: string, { getState, dispatch }) => {
    const state = getState() as RootState;
    const authToken = getAuthToken(state);
    const cvId = getSelectedCVId(state);

    if (!cvId) {
      throw new Error('No cv selected');
    }

    try {
      await restService.deleteSkillItem(authToken, cvId, id);
      const cvSkills = await restService.fetchCVSkills(authToken, cvId);

      return {
        cvId,
        cvSkills
      };
    } catch (e) {
      throw new Error('Failed to delete Skill');
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
      .addCase(createEmptyEducation.fulfilled, (state, action) => {
        const { payload: { cvEducation, cvId } } = action;
        
        state.list[cvId].education = [...cvEducation];
      })
      .addCase(deleteEducationItem.fulfilled, (state, action) => {
        const { payload: { cvEducation, cvId } } = action;
        
        state.list[cvId].education = [...cvEducation];
      })
      .addCase(createEmptyEmployment.fulfilled, (state, action) => {
        const { payload: { cvEmployment, cvId } } = action;
        
        state.list[cvId].employment = [...cvEmployment];
      })
      .addCase(deleteEmploymentItem.fulfilled, (state, action) => {
        const { payload: { cvEmployment, cvId } } = action;
        
        state.list[cvId].employment = [...cvEmployment];
      })
      .addCase(createEmptyLanguage.fulfilled, (state, action) => {
        const { payload: { cvLanguages, cvId } } = action;
        
        state.list[cvId].languages = [...cvLanguages];
      })
      .addCase(deleteLanguageItem.fulfilled, (state, action) => {
        const { payload: { cvLanguages, cvId } } = action;
        
        state.list[cvId].languages = [...cvLanguages];
      })
      .addCase(createEmptySkill.fulfilled, (state, action) => {
        const { payload: { cvSkills, cvId } } = action;
        
        state.list[cvId].skills = [...cvSkills];
      })
      .addCase(deleteSkillItem.fulfilled, (state, action) => {
        const { payload: { cvSkills, cvId } } = action;
        
        state.list[cvId].skills = [...cvSkills];
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        const { payload: { cvUser, cvId } } = action;

        state.list[cvId].user = cvUser;
      });
  }
});

export const { setCvId } = cvDetailsSlice.actions;

export default cvDetailsSlice.reducer;
