<template>
    <div class="flex p-10 h-full">
        <h4 class="text-4xl">{{ title }}</h4>
    </div>
</template>

<script lang='ts' setup>
import { useEditorStore } from '../store/editor';
import { storeToRefs } from 'pinia'

const editorStore = useEditorStore()

const { title } = storeToRefs(editorStore)

</script>

<style lang='postcss' scoped></style>