import { Reducer, ActionCreator } from 'redux';
import { CVItem, CVListState, SetOwnedCVsData, SetPublishedCVsData } from './types';

const PUBLISHED_CVS_SET = 'PUBLISHED_CVS_SET';
const OWNED_CVS_SET = 'OWNED_CVS_SET';

const defaultState: CVListState = {
  published: {},
  owned: {}
};

export const cvList: Reducer<CVListState> = (state = defaultState, action) => {
    switch (action.type) {
      case PUBLISHED_CVS_SET:
        return {
          ...state,
          published: {
            ...state.published,
            ...Object.fromEntries(action.payload.map((cv: CVItem) => [cv.id, cv]))
          }
        }
      case OWNED_CVS_SET:
        return {
          ...state,
          owned: {
            ...state.owned,
            ...Object.fromEntries(action.payload.map((cv: CVItem) => [cv.id, cv]))
          }
        }
      default:
        return state
    }
};

export const setPublishedCVsData: ActionCreator<SetPublishedCVsData> = (data: CVItem[]) => ({
  type: PUBLISHED_CVS_SET,
  payload: data
});

export const setOwnedCVsData: ActionCreator<SetOwnedCVsData> = (data: CVItem[]) => ({
  type: OWNED_CVS_SET,
  payload: data
});
