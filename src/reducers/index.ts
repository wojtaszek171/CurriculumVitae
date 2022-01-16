import { combineReducers } from "redux";
import { session } from "./session/session";
import { SessionState } from "./session/types";

export interface ApplicationState {
    session: SessionState
}

export default combineReducers<ApplicationState>({
    session
});
