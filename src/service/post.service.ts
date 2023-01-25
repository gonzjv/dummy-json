import { IPost } from '../interface/post.interface';

export interface IResponsePost {
  posts: IPost[];
}

const API_URL = import.meta.env.VITE_API_URL;

const getPostArr =
  async (): Promise<IResponsePost> => {
    //   const myHeaders = {
    //     'Content-Type': 'application/json',
    //   };
    //   const options = {
    //     headers: myHeaders,
    //   };
    const url = `${API_URL}posts/`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
    //   try {
    //   } catch (error) {
    //     console.log('Erorr:', error);
    //   }
  };

export { getPostArr };
