import { RootState } from "..";

export const getAuthToken = (state: RootState) => state.session.authToken;

export const getUsername = (state: RootState) => state.session.username;

export const getFirstName = (state: RootState) => state.session.firstName;

export const getIsTokenValid = (state: RootState) => !!(state.session.authToken.length && state.session.username.length);

export const getLastName = (state: RootState) => state.session.lastName;

export const getCurrentUserId = (state: RootState) => state.session.id;
