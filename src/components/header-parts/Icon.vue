<script setup>

</script>

<template>
  <router-link class="h-icon-link" to="/">
    <div class="h-icon-box">
      <div class="h-icon">
        <img src="/img/cat_icon2.png" alt="logo" width="48" class="img-w">
      </div>

      <div class="h-icon-txt">
        <img class="logo-txt logo-w" src="/public/img/logo.png" alt="KAKUU NEKO CAFE" width="280">
        <img class="logo-txt logo-n" src="/public/img/logo.png" alt="KAKUU NEKO CAFE" width="240">
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
  padding-top: 15px;
}
.logo-w {
  display: inline-block;
}
.logo-n {
  display: none;
}

@media (max-width: 416.5px) {
  .h-icon {
    display: none;
  }
  .logo-w {
    display: none;
  }
  .logo-n {
    display: inline-block;
  }
}

</style>
