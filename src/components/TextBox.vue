<script setup>

</script>

<template>
  <transition name="tb-animation" appear>
    <div class="text-box">
      <slot></slot>
    </div>
  </transition>
</template>

<style scoped>
.tb-animation-enter-active {
  transition: all 0.5s;
}
.tb-animation-enter-from {
  opacity: 0;
}
.tb-animation-enter-to {
  opacity: 1;
}

.text-box {
  margin: 0;
  background-image: linear-gradient(90deg, rgba(10, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
  color: white;
  height: 480px;
}
::v-slotted(h2) {
  padding-bottom: 30px;
  font-size: var(--font-size-h2-large);
}
::v-slotted(p) {
  padding-bottom: 5px;
  font-size: var(--font-size-p-large);
}

/* SO WIDE */
@media(min-width: 960px) {
  .text-box {
    width: 500px;
    padding: 20px 50px;
  }
}
@media(max-width: 959.5px) {
  .text-box {
    width: 400px;
    padding: 20px 40px;
  }
}

/* SO NARROW */
@media(max-width: 575.5px) {
  .text-box {
    background-image: linear-gradient(90deg, rgba(50, 50, 50, 0.9), rgba(0, 0, 0, 0.6));
    width: calc(100% - 20px);
    padding: 10px;
  }
  ::v-slotted(h2) {
    font-size: var(--font-size-h2-large);
    padding: 10px 0 10px 0;
    text-align: center;
  }
  ::v-slotted(p) {
    font-size: var(--font-size-p-large);
    padding: 0 0 5px 0;
    text-align: center;
  }
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  .text-box {
    width: calc(100vw - 20px);
    padding: 10px;
  }
  ::v-slotted(h2) {
    font-size: 11vw;
    padding: 10px 0 10px 0;
  }
  ::v-slotted(p) {
    font-size: 5.3vw;
    padding: 0 0 2vh 10vw;
    text-align: left;
  }
}

</style>
