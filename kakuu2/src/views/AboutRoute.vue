<script setup>
import AboutMain from '@/components/about-parts/AboutMain.vue'
import MainApp from '@/components/MainComponent.vue'
import {commitTitle} from "@/commit-title.js";

commitTitle()

</script>

<template>
  <MainApp>
    <AboutMain></AboutMain>
  </MainApp>
</template>

<style scoped>
/* 背景画像 */
@media(min-width: 960px) {
  .back-image {
    background-image: url("/img/about-back-image1.png");
    background-repeat: no-repeat;
  }
}
@media(max-width: 959.5px) {
  .back-image {
    background-image: url("/img/about-back-image2.png");
    background-repeat: no-repeat;
  }
}
@media(max-width: 575.5px) {
  .back-image {
    background-image: url("/img/about-back-image3.png");
    background-repeat: no-repeat;
  }
}

</style>
