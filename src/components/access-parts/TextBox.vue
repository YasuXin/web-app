<script setup>

</script>

<template>

  <slot></slot>

</template>

<style scoped>
::v-slotted(.text-box) {
  color: var(--color-white);
  background-image: linear-gradient(45deg, rgba(0,0,0,0.6), rgba(0,0,0,0.5));
  padding: 30px;
}

@media(min-width: 768px) {
  ::v-slotted(.text-box) {
    font-size: var(--font-size-p-medium);
  }
}
@media(max-width: 767.5px) {
  ::v-slotted(.text-box) {
    font-size: var(--font-size-p-smaller);
  }
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  ::v-slotted(.text-box) {
    font-size: var(--sp-font-size-p-medium);
  }
}
</style>
