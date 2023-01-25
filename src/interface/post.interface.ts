import { IUser } from './user.interface';

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
  tags: string[];
}

export interface IPostState {
  user: IUser;
}
