import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const getDetailsLoading = (state: RootState) => state.cvDetails.isLoading;

export const getSelectedLanguage = (state: RootState) => state.cvDetails.language;

export const getSelectedCVId = (state: RootState) => state.cvDetails.cvId;

export const getCVDetailsList = (state: RootState) => state.cvDetails.list;

export const getCVDetailsArray = createSelector(
    getCVDetailsList,
    (cvDetailsList) => Object.values(cvDetailsList)
);

export const getCVDetailsLoaded = createSelector(
    [
        getCVDetailsList,
        getSelectedCVId
    ],
    (
        cvDetailsList,
        cvId
    ) => !!(cvId && cvDetailsList[cvId])
);

export const getCVDetailsUser = createSelector(
    [
        getCVDetailsList,
        getSelectedCVId
    ],
    (
        cvDetailsList,
        cvId
    ) => {
        if (!cvId || !cvDetailsList[cvId]?.user) return {};

        return cvDetailsList[cvId]?.user;
    }
);
