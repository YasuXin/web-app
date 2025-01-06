<script setup>
import MainApp from "@/components/MainComponent.vue";
import HomeMain from "@/components/home-parts/HomeMain.vue";
import {commitTitle} from "@/commit-title.js";
import NewsMain from "@/components/news-parts/NewsMain.vue";

commitTitle()

</script>

<template>
  <MainApp>
    <NewsMain></NewsMain>
  </MainApp>
</template>

<style scoped>

</style>
