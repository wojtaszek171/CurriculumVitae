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

export const getCVDetailsEducation = createSelector(
    [
        getCVDetailsList,
        getSelectedCVId
    ],
    (
        cvDetailsList,
        cvId
    ) => {
        if (!cvId || !cvDetailsList[cvId]?.education) return {};

        return cvDetailsList[cvId]?.education;
    }
);

export const getCVDetailsEmployment = createSelector(
    [
        getCVDetailsList,
        getSelectedCVId
    ],
    (
        cvDetailsList,
        cvId
    ) => {
        if (!cvId || !cvDetailsList[cvId]?.employment) return {};

        return cvDetailsList[cvId]?.employment;
    }
);

export const getCVDetailsLanguages = createSelector(
    [
        getCVDetailsList,
        getSelectedCVId
    ],
    (
        cvDetailsList,
        cvId
    ) => {
        if (!cvId || !cvDetailsList[cvId]?.languages) return {};

        return cvDetailsList[cvId]?.languages;
    }
);

export const getCVDetailsSkills = createSelector(
    [
        getCVDetailsList,
        getSelectedCVId
    ],
    (
        cvDetailsList,
        cvId
    ) => {
        if (!cvId || !cvDetailsList[cvId]?.skills) return {};

        return cvDetailsList[cvId]?.skills;
    }
);
