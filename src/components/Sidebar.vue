<template>
    <div class="flex p-4 flex-col">
        <small>Text</small>
        <input v-model="title" class="p-4" :placeholder="'Enter Text'" />
    </div>
</template>

<script lang='ts' setup>
import { useEditorStore } from '../store/editor'
import { storeToRefs } from 'pinia'
const editorStore = useEditorStore()

const { title } = storeToRefs(editorStore)


</script>

<style lang='postcss' scoped></style>