<template>
   <div class="flex h-screen">
        <div class="w-1/5 bg-gray-50">
            <Sidebar/>
        </div>
        <div class="w-4/5 p-3">
           <div class="border h-full flex flex-col  rounded">
                <div class="h-10 border-b"></div>
                <iframe class="w-full flex-1" src="/preview"></iframe>
           </div>
        </div>
   </div>
</template>

<script lang='ts' setup>
import Sidebar from '../components/Sidebar.vue'

    
</script>

<style lang='postcss' scoped>
</style>