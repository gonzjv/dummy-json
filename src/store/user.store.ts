import { defineStore } from 'pinia';
import { IUser } from '../interface/user.interface';

export const useUserStore = defineStore('user', {
  state: () => ({
    // userArr: [] as IUser[],
    userData: {} as IUser,
  }),
});
