import { defineStore } from 'pinia';
import { IPost } from './../interface/post.interface';

export const usePostStore = defineStore('post', {
  state: () => ({
    postArr: [] as IPost[],
  }),
});
