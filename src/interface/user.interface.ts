export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
}

export interface IUserState {
  user: IUser;
}

export interface IUserArr {
  users: IUser[];
}

export interface ILoginData {
  username: string;
  password: string;
}
