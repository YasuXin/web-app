<script setup>
import {useRoute} from "vue-router";
import {newsData} from "@/news-data.js"
import {computed, ref} from "vue";


const route = useRoute()
const article = computed(() => {
  return newsData.filter( d => {
    return d.id === Number(route.params.id)
  })[0]
})

</script>

<template>
  <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center">
    <section class="news-text-box"  v-if="route.params.id">
      <article>
        <div class="title">
          <h2>{{article.title}}</h2>
        </div>
        <div class="text">
          <p style="margin-top: 10px;">{{article.text}}</p>
          <p v-if="article.link" class="link" style="margin-top: 20px;"><router-link :to="article.link">リンク</router-link></p>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.title {
  height: auto;
  min-height: 45px;
  border-bottom: var(--border-light-gray);
}
p.link {
  margin-top: 20px;
}
.link a {
  display: inline-block;
  padding: 0;
  text-decoration: underline;
}

.news-text-box {
  width: 90%;
  height: 200px;
  padding: 4vh 5vw;
  border: 1px solid black;
  background-color: white;
  overflow-y: auto;
  position: relative;
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  .news-text-box {
    width: 100%;
    height: 25vh;
    padding: 2vh 3vw;
  }
  .title {
    height: auto;
  }
  p.link {
    margin-top: 2vh;
  }
  .title h2 {
    font-size: var(--sp-font-size-p-medium);
  }
  .text p {
    font-size: var(--sp-font-size-p-small);
  }
}
</style>
