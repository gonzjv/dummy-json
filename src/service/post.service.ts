import {
  IPost,
  IPostData,
  IPostSearch,
} from '../interface/post.interface';

export interface IPostArr {
  posts: IPost[];
}

const API_URL = import.meta.env.VITE_API_URL;
const POST_LIMIT = '3';

const getPostArr =
  async (): Promise<IPostArr> => {
    //   const myHeaders = {
    //     'Content-Type': 'application/json',
    //   };
    //   const options = {
    //     headers: myHeaders,
    //   };
    const url = `${API_URL}posts/?limit=${POST_LIMIT}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
    //   try {
    //   } catch (error) {
    //     console.log('Erorr:', error);
    //   }
  };

const addPost = async (
  postData: IPostData
): Promise<IPost> => {
  const myHeaders = {
    'Content-Type': 'application/json',
  };
  const options = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(postData),
  };
  const url = `${API_URL}posts/add`;

  const response = await fetch(url, options);
  const data = await response.json();
  return data;
  //   try {
  //   } catch (error) {
  //     console.log('Erorr:', error);
  //   }
};

const searchPost = async (
  searchString: string
): Promise<IPostSearch> => {
  const url = `${API_URL}posts/search?q=${searchString}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
  //   try {
  //   } catch (error) {
  //     console.log('Erorr:', error);
  //   }
};

export { getPostArr, addPost, searchPost };
