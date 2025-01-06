<script setup>
import {inject} from "vue";
import {useStore} from "vuex";
import {pageCommitStore} from "@/pinia.js";

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
const currentRoute = inject('currentRoute')
*/

/*const store = useStore()
const currentRoute = store.state.page*/

const store = pageCommitStore()
const currentRoute = store.page
</script>

<template>
  <div class="f-button">
    <router-link :to="link" class="nav-link" :class="[ name===currentRoute ? 'current' : '' ]">
      <span class="f-button-text">{{ text }}</span>
    </router-link>
  </div>
</template>

<style>
:root {
  --f-button-flex-basis: 75px;
  --sp-f-button-height: 100%;
  --sp-f-button-width: 100%;
  --f-border-color: rgba(100,100,100,0.5) 1px solid;
  --sp-font-size-f-button: 3vh;
}
</style>

<style scoped>
.f-button {
  flex-basis: var(--f-button-flex-basis);
  height: 30px;
  text-align: center;
  border-left: var(--f-border-color);
}
.f-button:last-child {
  border-right: var(--f-border-color);
}
.f-button-text {
  color: var(--color-black);
}
.nav-link {
  display: inline-block;
  width: 100%;
}

.current {
  pointer-events: none;
  background-image: var(--disable-link-bg-based-white);
}
.current span {
  color: var(--color-dark-gray);
}
a:hover {
  background-color: hsla(0, 0%, 10%, 0.2);
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  .f-button {
    height: 100%;
    width: 100%;
    border-top: var(--f-border-color);
  }
  .f-button:last-child {
    border-bottom: var(--f-border-color);
  }
  .nav-link {
    width: var(--sp-f-button-width);
    height: var(--sp-f-button-height);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  .f-button-text {
    font-size: var(--sp-font-size-f-button);
  }
}
</style>
