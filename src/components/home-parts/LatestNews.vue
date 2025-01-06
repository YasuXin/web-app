<script setup>
import NewsList from "@/components/home-parts/LatestNewsList.vue";
import {limitedSortedNewsData} from "@/news-data.js"
import {ref} from "vue";


const data = ref(limitedSortedNewsData())
</script>

<template>
  <div class="news">
    <div class="news-box">
      <NewsList v-for="a in data" :key="a.id" :id="a.id" :datetime="a.datetime" :date="a.date" :title="a.title"></NewsList>
      <div class="past-news"><router-link :to="{ name: 'news' }">過去のニュース一覧</router-link></div>
    </div>
  </div>
</template>

<style scoped>
.news {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 90%;
  margin: 10px 5%;
  padding: 20px;
  border: 1px solid black;
  background-image: linear-gradient(90deg, rgb(180,180,180), rgb(170,170,170));
}
.news-box {
  width: 90%;
  height: 200px;
  border: 1px solid black;
  background-color: #eee;
  overflow-y: auto;
  padding: 2vh 2vw;
}
::v-deep(.articles-parent:first-child .article-title p::after) {
  content: "NEW!";
  color: #c00;
}

.past-news {
  float: right;
  padding: 10px;
}
@media(max-width: 767.5px) {
  .news-box {
    padding: 2vh 0;
  }
}
/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  .news-box {
    width: 100%;
    height: auto;
    overflow-y: visible;
  }
}
</style>
