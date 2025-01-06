<script setup>
import {computed, ref} from "vue";

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  datetime: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})

const link = computed(() => {
  return "/news/" + props.id
})

const localeDate = computed(() => {
  return props.date.toLocaleDateString()
})
</script>

<template>
  <article class="articles-parent">
    <div class="article-date">
      <p><time :datetime="datetime">{{ localeDate }}</time></p>
    </div>
    <div class="article-title">
      <div>
        <p><router-link :to="link">{{ title }}</router-link></p>
      </div>
    </div>
  </article>
</template>

<style scoped>
article.articles-parent {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}
.article-date {
  flex-basis: 150px;
  border-right: var(--border-light-gray);
}
.article-date p {
  text-align: center;
}
.article-title {
  flex-basis: calc(100% - 200px);
}
.article-title a {
  text-decoration: underline;
}
@media(max-width: 767.5px) {
  article.articles-parent {
    justify-content: space-evenly;
  }
  .article-date {
    flex-basis: 110px;
  }
}


/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  article.articles-parent {
    height: auto;
    margin-bottom: 2vh;
  }
  .article-date {
    flex-basis: 20vw;
  }
  .article-date p {
    font-size: var(--sp-font-size-p-medium);
  }
  .article-title {
    flex-basis: 45vw;
  }
  .article-title a {
    font-size: var(--sp-font-size-p-medium);
  }
}
</style>
