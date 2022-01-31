export interface CVItem {
    id: number,
    userId: number,
    isPublished: boolean,
    createdAt: Date,
    updatedAt: Date
  }
  

export interface CVListState {
    isLoading: boolean;
    list: {
        [key: number]: CVItem;
    }
}
