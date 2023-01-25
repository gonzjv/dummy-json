import { IUser } from '../interface/user.interface';

export interface IResponseUser {
  users: IUser[];
}

const API_URL = import.meta.env.VITE_API_URL;

const getUserArr =
  async (): Promise<IResponseUser> => {
    //   const myHeaders = {
    //     'Content-Type': 'application/json',
    //   };
    //   const options = {
    //     headers: myHeaders,
    //   };
    const url = `${API_URL}users/`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
    //   try {
    //   } catch (error) {
    //     console.log('Erorr:', error);
    //   }
  };

export { getUserArr };
