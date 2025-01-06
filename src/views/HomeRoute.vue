<script setup>
import MainApp from '@/components/MainComponent.vue'
import HomeMain from "@/components/home-parts/HomeMain.vue";
import { onMounted, ref } from "vue";
import { commitTitle } from '@/commit-title'


let iriomoteShow = ref(true);

onMounted(() => {
  setTimeout(() => {
    iriomoteShow.value = false;
  }, 6000)
})

commitTitle()

</script>

<template>
  <MainApp>
    <HomeMain></HomeMain>
  </MainApp>

  <teleport to="#illust">
    <!-- イリオモテヤマネコのイラスト -->
    <transition name="fukidasi" appear>
      <div class="fukidasi" v-show="iriomoteShow" @click="iriomoteShow=!iriomoteShow">
        <svg xmlns='http://www.w3.org/2000/svg' height='170' width='190' viewBox='0 0 190 170' style='fill:#996633;stroke:rgba(255, 255, 255, 1)' ><!-- 背景色と枠線を指定 -->
          <path d='M160,100 A80,70 0 1 1 160,85 L175,105 L160,100 Z'></path><!-- pathで円弧と吹き出し口を描く -->
          <text x="80" y="100" text-anchor="middle" style="font-size:20px;">ぼくがいないよ</text></svg><!-- textで中央基点に文字の開始位置を指定 -->
      </div>
    </transition>
    <transition name="iriomote" appear>
      <div class="iriomote" v-show="iriomoteShow"  @click="iriomoteShow=!iriomoteShow">
        <img src="/img/iriomote.png" alt="yamaneko" width="200px" height="200px" />
      </div>
    </transition>
  </teleport>

</template>

<style scoped>


/* イラストのアニメーション ここから */
@media(min-width:768px) {
  /* イリオモテヤマネコのイラストのアニメーション */
  .iriomote {
    position: fixed;
    z-index: 1;
    bottom: 20px;
    right:20px;
  }
  .iriomote:hover, .fukidasi:hover {
    cursor: pointer;
  }
  .fukidasi {
    position: fixed;
    z-index: 2;
    bottom: 140px;
    right: 180px;
  }

  .iriomote-enter-active {
    transition: opacity 2s 1s, transform 2s 1s;
  }
  .iriomote-leave-active {
    transition: opacity 2s , transform 2s;
  }
  .iriomote-enter-from {
    opacity: 0;
    transform: translateY(100px);
  }
  .iriomote-leave-to {
    opacity: 0;
    transform: translateY(100px);
  }
  .iriomote-enter-to, .iriomote-leave-from {
    opacity: 1;
  }

  .fukidasi-enter-active {
    transition: opacity 2s 3s;
  }
  .fukidasi-leave-active {
    transition: opacity 2s;
  }
  .fukidasi-enter-from, .fukidasi-leave-to {
    opacity: 0;
  }
  .fukidasi-enter-to, .fukidasi-leave-from {
    opacity: 1;
  }
}
/* イラストのアニメーション ここまで */

</style>
