import { defineStore } from 'pinia'

export const wc_store = defineStore('worldcup', {
  state() {
    return {
      save_in_browser: 90,
      data: null
    }
  },
  getters: {
    saved() {
      return "NÃO" + this.save_in_browser;
    }
  },
  actions: {
    increment(value){
      this.data = value;
    }
  }
});