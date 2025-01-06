<script setup>

import FooterApp from "@/components/Footer.vue";
import HeaderApp from "@/components/Header.vue";

</script>

<template>
  <div class="back-image">
    <header>
      <HeaderApp></HeaderApp>
    </header>

    <main>
      <div class="main-container-parent">
        <slot></slot>
      </div>
    </main>

    <footer>
      <FooterApp></FooterApp>
    </footer>
  </div>
</template>

<style scoped>
.main-container-parent {
  width: 100%;
  height: 100%;
}
::v-deep(.main-container) {
  width: 100%;
  height: 100%;
}
</style>
