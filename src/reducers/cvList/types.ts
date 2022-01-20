import { Action } from "redux";

export interface CVItem {
    id: number,
    userId: number,
    isPublished: boolean,
    createdAt: Date,
    updatedAt: Date
  }
  

export interface CVListState {
    published: {
        [key: number]: CVItem;
    },
    owned: {
        [key: number]: CVItem;
    }
}

export interface SetPublishedCVsData extends Action {
    type: string;
    payload: CVItem[];
}

export interface SetOwnedCVsData extends Action {
    type: string;
    payload: CVItem[];
}
