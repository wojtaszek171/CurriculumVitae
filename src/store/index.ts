import { configureStore } from "@reduxjs/toolkit";
import session from "./session/sessionSlice";
import cvList from "./cvList/cvListSlice";

const reducer = {
    session,
    cvList
};

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
