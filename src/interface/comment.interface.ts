export interface IComment {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}

export interface ICommentResponse {
  comments: IComment[];
}

export interface ICommentListState {
  commentArr: ICommentResponse;
}
