<script setup>

</script>

<template>
  <router-link to="/about">
    <div class="to-about">
      <p>このサイトについて</p>
    </div>
  </router-link>
</template>

<style scoped>
a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
a:hover {
  background-color: rgba(0, 0, 0, 0);
}
.to-about {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #eef;
  border-radius:50px;
}
.to-about:hover {
  background-color: #889;
  transition-property: background-color;
  transition-duration: 1s;
  animation-name: button-animation;
  animation-duration: 1s;
  animation-fill-mode: both;
}
.to-about p {
  display: inline-block;
  padding: 0;
  font-size: var(--font-size-p-small);
  color: var(--color-black);
  font-weight: bold;
}
@keyframes button-animation {
  0% {transform: scale(1);}
  30% {transform: scale(0.7);}
  80% {transform: scale(1.2);}
  100% {transform: scale(1); }
}

@media(max-width: 575.5px) {
  a {
    display: flex;
    justify-content: center;
  }
  .to-about {
    width: 180px;
    height: 50px;
  }
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .to-about p {
    font-size: var(--sp-font-size-p-medium);
    color: var(--color-black);
    font-weight: bold;
  }
}
</style>
