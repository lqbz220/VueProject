import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      isAdmin: false,
      modal: false,
    };
  },
  actions: {
    toggleModal() {
      this.modal = !this.modal;
    },
    switchAdmin() {
      this.isAdmin = !this.isAdmin;
    },
  },
});
