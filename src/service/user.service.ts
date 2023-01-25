import { IUser } from '../interface/user.interface';

interface IUserArr {
  users: IUser[];
}

const API_URL = import.meta.env.VITE_API_URL;

const getUserArr =
  async (): Promise<IUserArr> => {
    const url = `${API_URL}users/`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

const getUser = async (
  userId: number
): Promise<IUser> => {
  const url = `${API_URL}users/${userId}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { getUserArr, getUser };
