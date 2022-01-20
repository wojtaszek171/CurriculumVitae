import { combineReducers } from "redux";
import { cvList } from "./cvList/cvList";
import { CVListState } from "./cvList/types";
import { session } from "./session/session";
import { SessionState } from "./session/types";

export interface ApplicationState {
    session: SessionState;
    cvList: CVListState;
}

export default combineReducers<ApplicationState>({
    session,
    cvList
});
