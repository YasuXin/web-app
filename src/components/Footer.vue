<script setup>
import Button from './footer-parts/Button.vue'
import {routeData} from "@/route-data";
import {ref} from "vue";


const dataList = ref(routeData)
</script>

<template>
  <div class="f-box-parent">
    <div class="f-box">
      <div class="f-buttons-box">
        <Button v-for="data in dataList" :key="data.id" :text="data.text" :name="data.name" :link="data.link"></Button>
      </div>
      <div>
        <p class="f-small"><small>&copy; 2024 KAKUU CATCAFE Company, Inc</small></p>
      </div>
    </div>

  </div>
</template>

<style>
:root {
  --footer-height-w: 120px;
  --footer-box-height-w: 90px;
  --sp-footer-height: 450px;
  --sp-footer-box-height: 350px;
  --bg-color: rgba(220,220,220,0.9);
  --sp-font-size-small: 5vw;
}
</style>

<style scoped>
.f-box-parent {
  background-color: var(--bg-color);
  height: var(--footer-height-w);
  width: 100%;
}
.f-box {
  height: var(--footer-box-height-w);
}
.f-buttons-box {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px 0;
  margin: 0 80px;
  height: var(--footer-box-height-w);
  border-bottom: rgba(100,100,100,0.3) 1px solid;
}
.f-small {
  color: var(--color-black);
  text-align: center;
}

@media(max-width: 500px) {
  .f-buttons-box {
    margin: 0;
  }
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  .f-box-parent {
    height: var(--sp-footer-height);
  }
  .f-buttons-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: var(--sp-footer-box-height);
    border-bottom: none;
    width: 100%;
    padding: 0;
  }
  .f-small {
    font-size: var(--sp-font-size-small);
  }
}
</style>
