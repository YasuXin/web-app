<script setup>
import {commitTitle} from "@/commit-title.js";
import UsingMain from "@/components/using-parts/UsingMain.vue";
import MainApp from "@/components/MainComponent.vue";

commitTitle()

</script>

<template>
  <MainApp>
    <UsingMain></UsingMain>
  </MainApp>
</template>

<style scoped>
::v-deep(main) {
  width: 100%;

}
</style>
