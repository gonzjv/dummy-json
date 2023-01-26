import { ICommentResponse } from '../interface/comment.interface';

const API_URL = import.meta.env.VITE_API_URL;

const getCommentArr = async (
  postId: number
): Promise<ICommentResponse> => {
  const url = `${API_URL}comments/post/${postId}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { getCommentArr };
