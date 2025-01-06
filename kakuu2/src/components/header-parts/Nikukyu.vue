<script setup>
const props = defineProps({
  imgWidth: {
    type: String,
    required: true
  },
  imgHeight: {
    type: String,
    required: true
  }
})
</script>

<template>
  <img src="/img/nikukyu.png" alt="nikukyu" :width="imgWidth" :height="imgHeight" />
</template>

<style scoped>

</style>
