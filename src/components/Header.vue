<script setup>
import ButtonsBox from './header-parts/ButtonsBox.vue'
import Icon from './header-parts/Icon.vue'
import HamburgerIcon from './header-parts/HamburgerIcon.vue'
import HamburgerFukidasi from "@/components/header-parts/HamburgerFukidasi.vue";
import Nikukyu from "./header-parts/Nikukyu.vue";

import {onMounted, ref} from "vue";


let toggleMenu = ref(false)
function clickIcon () {
  toggleMenu.value = !toggleMenu.value
}

onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth >=768) {
      toggleMenu.value = false
    }
  })
})

window.addEventListener('scroll', () => {
  if (window.scrollY >= 80) {
    toggleMenu.value = false
  }
})

</script>

<template>
  <nav class="header-box">
    <div class="h-icon-box-parent">
      <Icon></Icon>
    </div>

    <div class="h-buttons-box-parent">
      <ButtonsBox></ButtonsBox>
    </div>


    <div class="nikukyu-parent">
      <transition name="a-nikukyu1" appear>
        <div class="nikukyu1"><Nikukyu imgWidth="70" imgHeight="70"></Nikukyu></div>
      </transition>
      <transition name="a-nikukyu2" appear>
        <div class="nikukyu2"><Nikukyu imgWidth="40" imgHeight="40"></Nikukyu></div>
      </transition>
      <transition name="a-nikukyu3" appear>
        <div class="nikukyu3"><Nikukyu imgWidth="30" imgHeight="30"></Nikukyu></div>
      </transition>
    </div>


    <div class="ham-fukidasi-parent">
      <HamburgerFukidasi @child-event="clickIcon" :toggle="toggleMenu"></HamburgerFukidasi>
    </div>

    <div class="ham-button-box-parent">
      <HamburgerIcon @child-event="clickIcon" :toggle="toggleMenu"></HamburgerIcon>
    </div>

  </nav>

  <teleport to="#ham-menu">
    <Transition name="ham-menu">
      <div class="ham-menu-box-parent" v-show="toggleMenu">
        <ButtonsBox></ButtonsBox>
      </div>
    </Transition>
  </teleport>

</template>

<style>
:root {
  --header-height: 100px;/* ヘッダーボックスの縦幅 */
  --background: linear-gradient(90deg,rgba(50,50,50,1),rgba(50,50,50,1));
  --ham-menu-background: rgba(20,20,20,0.95);
}
</style>

<style scoped>
.header-box {
  display: flex;
  position: relative;
  top: 0;
  align-items: center;
  justify-content: stretch;
  height: var(--header-height);
  background-image: var(--background);
  z-index: 2;
}
.h-icon-box-parent {
  flex-basis: 320px;
  margin-left: 10px;
}

.ham-menu-box-parent {
  position: absolute;
  top: var(--header-height);
  right: 0;
  background-color: var(--ham-menu-background);
  z-index: 1;
}

/* SO WIDE */
@media(min-width: 880px) {
  .nikukyu-parent {
    position: absolute;
    top: calc((var(--header-height) - 48px) / 2) ;
    right: calc((var(--header-height) - 48px) / 2);
  }
  .nikukyu1 {
    position: absolute;
    top: 0;
    right: 0;

  }
  .nikukyu2 {
    position: absolute;
    top: 10px;
    right: 60px;
  }
  .nikukyu3 {
    position: absolute;
    top: -20px;
    right: 80px;
  }

  /* 肉球のアニメーション */
  .a-nikukyu1-enter-active {
    transition: opacity 0.2s 0.2s;
  }
  .a-nikukyu2-enter-active {
    transition: opacity 0.2s 0.4s;
  }
  .a-nikukyu3-enter-active {
    transition: opacity 0.2s 0.6s;
  }
  .a-nikukyu1-enter-from, .a-nikukyu2-enter-from, .a-nikukyu3-enter-from {
    opacity: 0;
  }
  .a-nikukyu1-enter-to, .a-nikukyu2-enter-to, .a-nikukyu3-enter-to {
    opacity: 1;
  }
}
@media(max-width: 879.5px) {
  .nikukyu-parent {
    display: none;
  }
}

/* WIDE */
@media (min-width: 768px) {
  .ham-menu-box-parent {
    display: none;
  }
  .h-buttons-box-parent {
    flex-basis: 400px;
    margin-left: 20px;
  }
  .ham-fukidasi-parent {
    display: none;
  }
}

/* NARROW */
@media(max-width: 767.5px) {
  .h-buttons-box-parent {
    display: none;
  }
}


@media(max-width: 767.5px) {
  /* ハンバーガーメニューのアニメーション */
  .ham-menu-enter-active, .ham-menu-leave-active {
    transition: opacity 1s ease, transform 1s;
  }
  .ham-menu-enter-from {
    opacity: 0;
    transform: translateX(200px);
  }
  .ham-menu-leave-to {
    opacity: 0;
    transform: translateX(200px);
  }
  .ham-menu-enter-to {
    opacity: 1;
  }
  .ham-menu-leave-from {
    opacity: 1;
  }

  .ham-menu-box-parent {
    width: 200px;
  }
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {

  /* ハンバーガーメニューのアニメーション */
  .ham-menu-enter-active, .ham-menu-leave-active {
    transition: opacity 1s ease, transform 1s;
  }
  .ham-menu-enter-from, .ham-menu-leave-to {
    opacity: 0;
    transform: translateY(-100vh);
  }
  .ham-menu-enter-to, .ham-menu-leave-from {
    opacity: 1;

  }
  .ham-menu-box-parent {
    width: 100%;
    height: calc(100vh - 100px);
  }
}

</style>
