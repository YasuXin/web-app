<script setup>
import Button from "@/components/header-parts/Button.vue";
import {routeData} from "@/route-data";
import {ref} from "vue";


const dataList = ref(routeData)
</script>

<template>
  <div class="h-buttons-box">
    <Button v-for="data in dataList" :key="data.id" :text="data.text" :name="data.name" :link="data.link"></Button>
  </div>
</template>

<style scoped>
/* WIDE */
@media(min-width:768px) {
  .h-buttons-box {
    display: flex;
    align-items: center;
  }
}

</style>
