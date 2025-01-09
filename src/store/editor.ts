import { defineStore } from "pinia";

export const useEditorStore = defineStore("editor", {
  state: () => ({
    title: "Hello",
  }),
  actions: {
    updateValue(text: string) {
      this.title = text;
    },
  },
  share: {
    enable: true,
    initialize: true,
  },
});
