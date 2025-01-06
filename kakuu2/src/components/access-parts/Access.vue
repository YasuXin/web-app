<script setup>
import MapImage from '@/components/access-parts/MapImage.vue'
import TextBoxRight from "@/components/access-parts/TextBoxRight.vue";
import TextBoxBottom from "@/components/access-parts/TextBoxBottom.vue";

</script>

<template>

  <div class="access1">
    <MapImage></MapImage>
    <TextBoxRight></TextBoxRight>
  </div>

</template>

<style>

</style>
<style scoped>
.access1 {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

@media(max-width: 575.5px) {
  .access1 {
    flex-direction: column;
    align-items: center;
  }
}
</style>
