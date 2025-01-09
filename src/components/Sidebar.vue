<template>
  <div class="flex p-4 flex-col">
    <small class="text-xs text-gray-600">Text</small>
    <input
      :value="editorStore.title"
      @input="changeValue"
      class="p-4 mt-2"
      :placeholder="'Enter Text'"
    />
  </div>
</template>

<script lang="ts" setup>
import { useEditorStore } from "../store/editor";
import { storeToRefs } from "pinia";
const editorStore = useEditorStore();


const changeValue = (event: Event) => {
  const {
    target: { value },
  } = event;

  editorStore.updateValue(value);
};
</script>

<style lang="postcss" scoped></style>
