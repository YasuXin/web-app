<script setup>

import TitleBox from "@/components/TitleBox.vue";
import News from "@/components/news-parts/News.vue";
import NewsArticle from "@/components/news-parts/NewsArticle.vue";
import {useRoute} from "vue-router";


const route = useRoute()

</script>

<template>
  <div class="main-container">

    <transition name="title-fade" appear>
      <TitleBox main="ニュース" small="※すべて架空のものです"></TitleBox>
    </transition>

    <div class="news-parent">

      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in" appear>
          <component :is="Component" :key="route.path"></component>
        </transition>
      </router-view>

      <section v-if="!route.params.id" class="please-click">
        <article>
          <div class="cat-image"></div>
          <h2>一覧のタイトルをクリックしてください</h2>
        </article>
      </section>

      <News></News>

    </div>

  </div>



</template>

<style scoped>
.news-parent {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 95%;
  margin: 10px 2.5%;
  padding: 20px;
  border: 1px solid black;
  background-image: linear-gradient(90deg, rgb(180,180,180), rgb(170,170,170));
}
.please-click {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 90%;
  padding: 4vh 5vw;
  border: 1px solid black;
  background-color: white;
  overflow-y: auto;
  position: relative;
}
.please-click img {
  position: absolute;
  bottom: 5px;
  right: 5px;
}

.cat-image {
  background-image: url("/public/img/news-cat.png");
  width: 150px;
  height: 150px;
  position: absolute;
  bottom: 5px;
  right: 5px;
}
@media(max-width: 840px) {
  .cat-image {
    display: none;
  }
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  .please-click {
    width: 100%;
    height: 20vh;
    padding: 2vh 3vw;
  }
  .please-click h2 {
    font-size: var(--sp-font-size-p);
  }
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity .6s, transform .8s;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(60%);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-60%);
}

</style>
