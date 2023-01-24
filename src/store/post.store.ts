import { defineStore } from 'pinia';

export interface IPost {
  title: string;
}

export const usePostStore = defineStore('post', {
  state: () => ({
    postArr: [] as IPost[],
  }),
});
