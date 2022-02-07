import { configureStore } from "@reduxjs/toolkit";
import session from "./session/sessionSlice";
import cvList from "./cvList/cvListSlice";
import cvDetails from "./cvDetails/cvDetailsSlice";

const reducer = {
    session,
    cvList,
    cvDetails
};

export const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
