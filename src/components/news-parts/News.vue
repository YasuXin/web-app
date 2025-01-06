<script setup>
import {sortedNewsData} from "@/news-data.js"
import {ref} from "vue";
import NewsList from "@/components/news-parts/NewsList.vue";


const data = ref(sortedNewsData());

</script>

<template>
  <section class="news-box">
    <NewsList v-for="a in data" :key="a.id" :id="a.id" :datetime="a.datetime" :date="a.date" :title="a.title"></NewsList>
  </section>
</template>

<style scoped>
.news-box {
  width: 90%;
  max-height: 400px;
  padding: 5vh 5vw;
  margin-top: 20px;
  border: 1px solid black;
  background-color: #eee;
  overflow-y: auto;
}
::v-deep(.articles-parent:first-child .article-title p::after) {
  content: "NEW!";
  color: #c00;
}

@media(max-width: 767.5px) {
  .news-box {
    padding: 3vh 0;
  }
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  .news-box {
    width: 100%;
    max-height: none;
    height: 500px;
  }
}
</style>
