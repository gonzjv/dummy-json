import { defineStore } from 'pinia';

interface IPopup {
  display: boolean;
  name: string;
}

export const useDisplayStore = defineStore(
  'display',
  {
    state: () => ({
      popup: {} as IPopup,
    }),
  }
);
