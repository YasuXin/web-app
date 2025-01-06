<script setup>
import Button from "@/components/header-parts/Button.vue";
import {routeData} from "@/route-data";
import {ref} from "vue";


const dataList = ref(routeData)

</script>

<template>
  <div class="ham-menu-box">
    <Button v-for="data in dataList" :key="data.id" :text="data.text" :link="data.link"></Button>
  </div>
</template>

<style scoped>

</style>
