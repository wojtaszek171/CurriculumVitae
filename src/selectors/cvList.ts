import { ApplicationState } from "../reducers";

export const getPublishedCVs = (state: ApplicationState) => state.cvList.published;

export const getPublishedCVsArray = (state: ApplicationState) => Object.values(state.cvList.published);

export const getOwnedCVs = (state: ApplicationState) => state.cvList.published;

export const getOwnedCVsArray = (state: ApplicationState) => Object.values(state.cvList.owned);
