export interface CVItem {
    id: string,
    userId: number,
    isPublished: boolean,
    createdAt: Date,
    updatedAt: Date
  }
  

export interface CVListState {
    isLoading: boolean;
    list: {
        [key: string]: CVItem;
    }
}
