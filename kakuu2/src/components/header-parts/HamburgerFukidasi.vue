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
  <div class="ham-fukidasi">
    <div class="nikukyu-fukidasi"><img src="/img/nikukyu.png" alt="nikukyu" width="50" height="50"></div>
    <div class="ham-fukidasi-close" v-if="toggle">
      <svg xmlns='http://www.w3.org/2000/svg' height='66' width='220' viewBox='0 0 200 60' style='fill:#cfcfcf;stroke:#000000' ><!-- 背景色と枠線を指定 -->
        <path d='M1,6 A6,6 0 0 1 6,1 L154,1 A6,6 0 0 1 160,6 L160,16 L175,24 L160,32 L160,42 A6,6 0 0 1 154,48 L6,48 A6,6 0 0 1 1,42  Z'></path><!-- pathで角丸の吹き出しを描く -->
        <text x="80" y="30" text-anchor="middle" class="fukidasi-close">メニューを閉じる</text>
      </svg>
    </div>
    <div class="ham-fukidasi-open" v-else>
      <svg xmlns='http://www.w3.org/2000/svg' height='66' width='220' viewBox='0 0 200 60' style='fill:#cfcfcf;stroke:#000000' ><!-- 背景色と枠線を指定 -->
        <path d='M1,6 A6,6 0 0 1 6,1 L154,1 A6,6 0 0 1 160,6 L160,16 L175,24 L160,32 L160,42 A6,6 0 0 1 154,48 L6,48 A6,6 0 0 1 1,42  Z'></path><!-- pathで角丸の吹き出しを描く -->
        <text x="80" y="30" text-anchor="middle" class="fukidasi-open">メニューを開く</text>
      </svg>
    </div>
  </div>
</template>

<style scoped>
/* WIDE */
@media(min-width: 768px){
  .ham-fukidasi {
    display: none;
  }
}

/* NARROW */
@media(max-width: 767.5px) {
  .ham-fukidasi {
    position: absolute;
    top: calc((var(--header-height) - 48px) / 2 ) ;
    right: calc((var(--header-height) - 48px) / 2 + 25px);
  }

  .nikukyu-fukidasi {
    position: absolute;
    top: -20px;
    right: 30px;
  }
}

/* SO NARROW */
@media(max-width: 610px) {
  .ham-fukidasi {
    display: none;
  }
}
</style>
