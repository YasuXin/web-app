<script setup>

</script>

<template>

  <div class="map">
    <img class="wide-img" src="/public/img/map1.jpg" alt="accessmap">
  </div>

</template>

<style>

</style>
<style scoped>
.map {
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.map img {
  border: 10px solid #ccc;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
@media(min-width: 576px) {
  .map {
    width: var(--access-map-wide);
  }
  .map img {
    width: var(--access-inner-map-wide);
    height: var(--access-inner-map-wide);
  }
}
@media(max-width: 575.5px) {
  .map {
    align-content: center;
    width: var(--access-map-narrow);
    margin: 0 0 0 0;
  }
  .map img {
    width: var(--access-inner-map-narrow);
    height: var(--access-inner-map-narrow);
  }
}
</style>
