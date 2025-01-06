<script setup>

</script>

<template>
  <div class="entry-box">
    <h2>入場料</h2>
    <div class="p">
      <p>1時間 : <span style="font-weight:bold;">9,999,999円</span></p>
      <p>延長する場合は、10分あたり<span style="font-weight:bold;">6,666,666</span>円いただきます。</p>
    </div>
    <h2>ねこちゃんのおやつ</h2>
    <div class="p">
      <p>1～3時までの間は、ねこちゃんにおやつをあげられます。</p>
      <p>おやつをあげる場合は、追加料金として<span style="font-weight:bold;">7,777,777</span>円いただきます。</p>
    </div>
    <h2>注意事項</h2>
    <div class="p attention">
      <ul>
        <li>店内に飲食物を持ち込まないでください。</li>
        <li>ねこちゃんを遊ばせるときは、店内にあらかじめ用意されたものを使ってください。</li>
        <li>店内における無許可の写真撮影は禁止です。</li>
        <li>ねこちゃんに危害を加えたり、店内の物を壊さないでください。</li>
        <li>他のお客様の迷惑にならないよう心がけお願いします。</li>
        <li>当店は存在しないため、次元を捻じ曲げて強引に入店しないでください。</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.entry-box {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  border: 5px solid rgba(0,30,0,0.9);
  border-radius: 10px;
  background-image: linear-gradient(90deg, rgba(255,255,255,1), rgba(240,255,230,1));
}
.entry-box h2 {
  display: inline-block;
  background-image: linear-gradient(90deg, rgba(200,255,200,1), rgba(100,200,100,1));
  margin-top: 30px;
  padding-left: 10px;
  width: 100%;
  border-left: 10px solid rgba(0,30,0,0.9);
}
.entry-box h2:first-child {
  margin-top: 0;
}
.entry-box .p {
  width: 100%;
  padding: 10px 0 10px 20px;
  font-size: var(--font-size-p-medium)
}
.entry-box .attention {
  padding-left: 0;
}

@media(max-width: 440px) {

}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  .entry-box {
    padding: 5vw 3vw;
  }
  .entry-box h2 {
    font-size: var(--sp-font-size-h2);
  }
  .entry-box .p {
    font-size: var(--sp-font-size-p-medium);
    padding: 1vw 0 1vw 3vw;
  }
  .entry-box .attention {
    padding-left: 0;
  }
}
</style>
