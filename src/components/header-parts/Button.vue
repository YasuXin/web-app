<script setup>
import {inject} from 'vue'
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {pageCommitStore} from '@/pinia.js'


defineProps({
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },

})
/*
const route = useRoute()
const currentRoute = inject('currentRoute')
*/
/*const store = useStore()
const currentRoute = store.state.page*/

const store = pageCommitStore()
const currentRoute = store.page
</script>

<script>

</script>
<template>
  <div class="h-button">
    <router-link  class="nav-link" :to="link" :class="[ name===currentRoute ? 'current' : '' ]">
      <span class="button-txt">{{ text }}</span>
    </router-link>
  </div>
</template>

<style>
:root {
  --h-button-height: 50px;
  --h-button-flex-basis: 75px;
  --tb-h-button-height: 60px;
  --sp-h-button-height: calc(14vh - 20px);
  --h-border: 1px solid #666;
  --tb-sp-h-border: 1px solid rgba(200,200,200,0.1);
  --font-size-h-button: 1.3rem;
  --sp-font-size-h-button: 3.5vh;
}
</style>

<style scoped>

.h-button {
  flex-basis: var(--h-button-flex-basis);
  height: var(--h-button-height);
  text-align: center;
}
span.button-txt {
  font-size: var(--font-size-h-button);
  color: var(--color-white);
}
.nav-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

/* WIDE */
@media(min-width: 768px){
  .h-button {
    border-left: var(--h-border);
  }
  .h-button:last-child {
    border-right: var(--h-border);
  }
  .button-txt {
    display: inline-block;
    margin-top: calc(var(--h-button-height) / 25 * -1);
  }
}

/* NARROW */
@media(max-width: 767.5px) {
  .h-button{
    border-top: var(--tb-sp-h-border);
    height: var(--tb-h-button-height);
  }
  .h-button:last-child {
    border-bottom: var(--tb-sp-h-border);
  }
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  .h-button{
    height: var(--sp-h-button-height);
  }
  span.button-txt {
    font-size: var(--sp-font-size-h-button);
    color: var(--color-lighter-gray);
  }
}

.current {
  pointer-events: none;
  background-image: var(--disable-link-bg-based-dark);
}
.current span {
  color: var(--color-light-gray);
}
</style>
