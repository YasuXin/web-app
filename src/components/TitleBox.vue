<script setup>
defineProps({
  main: {
    type: String,
    default: '',
  },
  small: {
    type: String,
    default: '',
  }
})
</script>

<template>
  <div class="text-box">
    <h1><img src="/public/img/nikukyu.png" alt="nikukyu" width="50" height="50">
      <span class="title">{{ main }}<span class="small">{{ small }}</span></span>
    </h1>
  </div>
</template>

<style scoped>
.text-box {
  padding: 10px 0;
  margin: 10px 2.5%;
  width: 95%;
  height: 70px;
  border-left: 20px solid black;
  background-image: linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4));
}
.text-box h1 {
  color: #ffffff;
  vertical-align: middle;
  position: relative;
  height: 50px;
  font-size: var(--font-size-h1);
}
span.title {
  display:inline-block;
  position: absolute;
  top: 3px;
}
@media(min-width: 475px) {
  span.small {
    font-size: var(--font-size-small);
  }
}
@media(max-width: 474.5px) {
  span.small {
    display: none;
  }
}
</style>
