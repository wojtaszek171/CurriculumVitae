import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { getCurrentUserId } from "../session/selector";

export const getCvs = (state: RootState) => state.cvList.list;

export const getCvsArray = createSelector(
    getCvs,
    (cvs) => Object.values(cvs)
);

export const getPublishedCvsArray = createSelector(
    getCvsArray,
    (cvs) => cvs.filter(cv => cv.isPublished)
);

export const getOwnedCvsArray = createSelector(
    [
        getCurrentUserId,
        getCvsArray
    ],
    (id, cvs) => cvs.filter(cv => cv.userId === id)
);
