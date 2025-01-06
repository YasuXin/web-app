<script setup>
import TextBox from "@/components/TextBox.vue";
import Circles from '@/components/CirclesAnimation.vue'
</script>

<template>
  <div class="main-container">
    <div class="text-box-parent">
      <TextBox>
        <h2 class="gaming">！注意！</h2>
        <p>本サイトは製作者が実験用に</p>
        <p>アップロードしたものであり、</p>
        <p>実在するあらゆる企業、団体とは</p>
        <p>一切関係ありません。</p>
        <p>本店が実在しないことに関して</p>
        <p>苦情は受け付けません。</p>
        <p>あしからず。</p>
        <p style="font-size:10px; text-align:right; padding-top:20px;">なんつってｗ</p>
      </TextBox>
    </div>
  </div>

  <Circles></Circles>

</template>

<style scoped>
.text-box-parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin: 0 2.5%;
}

@media(min-width: 960px) {
  .text-box-parent {
    width: 500px;
  }
}
@media(max-width: 959.5px) {
  .text-box-parent {
    width: 400px;
  }
}
@media(max-width: 575.5px) {
  .text-box-parent {
    width: calc(100% - 20px);
  }
}
/* ゲーミング文字 ここから */
.gaming {
  font-weight: bold;
  font-size: 36px;
  color: transparent;             /*文字を透明にする*/
  background-clip: text;          /*背景を文字で切り抜く*/
  background-image: linear-gradient(45deg,
  red,
  orange,
  yellow,
  green,
  aqua,
  blue,
  purple);
  background-size: 1200%;
  animation: 3s linear 0s infinite alternate slide;
}
@keyframes slide {
  from { background-position: 0 0; }
  to { background-position: 100% 0; }    /* 右から左へ移動するアニメーション */
}
@media(max-width: 450px){
  .gaming {
    font-size: 11vw;
  }

}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  p {
    padding: 0 0 0.8vh 10vw;
  }
}
/* ゲーミング文字 ここまで */
</style>
