<template>
    <div class="flex p-4 flex-col">
        <small class="text-xs text-gray-600">Text</small>
        <input v-model="title" class="p-4 mt-2" :placeholder="'Enter Text'" />
    </div>
</template>

<script lang='ts' setup>
import { useEditorStore } from '../store/editor'
import { storeToRefs } from 'pinia'
const editorStore = useEditorStore()

const { title } = storeToRefs(editorStore)


</script>

<style lang='postcss' scoped></style>