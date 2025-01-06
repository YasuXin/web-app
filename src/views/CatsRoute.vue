<script setup>
import CatsMain from '@/components/cats-parts/CatsMain.vue'
import MainApp from '@/components/MainComponent.vue'
import {commitTitle} from "@/commit-title.js";

commitTitle()

</script>

<template>
  <MainApp>
    <CatsMain></CatsMain>
  </MainApp>
</template>

<style scoped>

</style>

