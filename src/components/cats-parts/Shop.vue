<script setup>

</script>

<template>

  <div class="shop-image">
    <img src="/public/img/shop.jpg" alt="insideshop" width="640px" class="wide-img">
    <img src="/public/img/shop.jpg" alt="insideshop" width="100%"  class="narrow-img">
  </div>
  <div class="shop-text-box">
    <p>当店は存在しないため、写真はイメージとなります。<br>
      おしゃれな雰囲気の中で、ねこちゃんたちとの時間を堪能しないでください。<br></p>
    <p class="small">※ねこちゃんを驚かせるような大きい声や音を出したり、暴れたりしないでください。<br>
      (存在しませんが)</p>
  </div>

</template>

<style scoped>
.shop-text-box {
  padding: 30px 40px;
  margin-top: 30px;
  margin-bottom: 20px;
  height: auto;
  background-image: linear-gradient(45deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4));
  color:#eef;
}
p {
  font-size: var(--font-size-p-large);
}
.small {
  display: inline-block;
  margin: 8px;
  font-size: var(--font-size-p-small);
}
img {
  border-radius: 10px;
  border: solid 4px #ccc;
}

/* SO WIDE */
@media(min-width: 768px){
  .shop-image{
    flex-basis: 480px;
  }
  .shop-text-box {
    margin-top: 30px;
    flex-basis: 640px;
  }
  img.wide-img {
    display: block;
  }
  img.narrow-img {
    display: none;
  }
}

/* NARROW */
@media(max-width: 767.5px) {
  .shop-image{
    margin-top: auto;
  }
  img.narrow-img {
    display: block;
  }
  img.wide-img {
    display: none;
  }
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  .shop-text-box {
    padding: 5vw 8vw;
    margin-top: 3vw;
    margin-bottom: 3vw;
  }
  p {
    font-size: var(--sp-font-size-h2);
  }
  .small {
    font-size: var(--sp-font-size-p-medium);
  }
}
</style>
