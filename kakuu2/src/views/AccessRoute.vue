<script setup>
import {commitTitle} from "@/commit-title.js";
import MainApp from "@/components/MainComponent.vue";
import AccessMain from "@/components/access-parts/AccessMain.vue";

commitTitle()

</script>

<template>
  <MainApp>
    <AccessMain></AccessMain>
  </MainApp>
</template>

<style scoped>

</style>
