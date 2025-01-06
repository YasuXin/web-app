<script setup>

</script>

<template>
  <router-link class="h-icon-link" to="/">
    <div class="h-icon-box">
      <div class="h-icon">
        <img src="/img/cat_icon2.png" alt="logo" width="48" class="img-w">
      </div>

      <div class="h-icon-txt">
        <span class="logo-txt">KAKUU CAT CAFE</span>
      </div>

    </div>
  </router-link>
</template>

<style scoped>
.h-icon-link {
  display: inline-block;
}
.h-icon-box {
  display: flex;
  align-items: center;
}
.logo-txt {
  display: inline-block;
  font-size: 2.1rem;
  color: var(--color-white);
  padding-top: 10px;
  font-family: "Arial Narrow";
}

@media (max-width: 416.5px) {
  .h-icon {
    display: none;
  }
}

</style>
