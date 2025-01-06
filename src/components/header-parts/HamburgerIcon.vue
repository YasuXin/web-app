<script setup>
const emit = defineEmits(['child-event'])

const onClick = () => {
  emit('child-event')
}

const props = defineProps({
  toggle: {
    type: Boolean,
    required: true,
  }
})
</script>

<template>
  <div class="ham-button-box">
    <button class="ham-button" @click="onClick">
      <Transition name="ham-icon">
        <span v-if="toggle" class="ham-img ham-cross">
          <img src="/public/img/batu.png" alt="" width="36">
        </span>
        <span v-else class="ham-img">
          <img src="/img/bars_24_2.png" alt="hamburger" width="36" height="36" />
        </span>
      </Transition>
    </button>
  </div>
</template>

<style scoped>
/* WIDE */
@media (min-width: 768px) {
  .ham-button-box {
    display: none;
  }
}

/* NARROW */
@media(max-width: 767.5px) {
  /* ハンバーガーアイコンのアニメーション */
  .ham-icon-enter-active, .ham-icon-leave-active {
    transition: opacity 0.5s ease, rotate 0.5s;
  }

  .ham-icon-enter-from {
    opacity: 0;
    rotate: 90deg;
  }

  .ham-icon-leave-to {
    opacity: 0;
    rotate: 90deg;
  }

  .ham-icon-enter-to {
    opacity: 1;

  }

  .ham-icon-leave-from {
    opacity: 1;

  }

  .ham-button {
    position: absolute;
    top: calc((var(--header-height) - 48px) / 2 ) ;
    right: calc((var(--header-height) - 48px) / 2 );
    width: 50px;
    height: 50px;
    border: 6px solid #404040;
    border-radius: 10px;
    background-image: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(200,200,200,0.5));
  }
  .ham-img {
    position: absolute;
    top: 1px;
    right: 1px;
  }
  .ham-cross {
    display: inline-block;
    width: 36px;
    height: 36px;
  }
}

@media(max-width: 415.5px) {
  .ham-button {
    right: calc((var(--header-height) - 48px) / 2 - 10px);
  }
}

@media(max-width: 340.5px) {
  .ham-button {
    right: calc((var(--header-height) - 48px) / 2 - 20px);
  }
}
</style>
