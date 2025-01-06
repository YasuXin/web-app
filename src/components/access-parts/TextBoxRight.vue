<script setup>
import TextBox from '@/components/access-parts/TextBox.vue'

</script>

<template>

  <TextBox>
    <div class="text-box">

      <table>
        <caption>営業時間</caption>
        <tr>
          <td>平日</td>
          <td>10:22 ～ 20:22</td>
        </tr>
        <tr>
          <td>土日祝</td>
          <td>9:22 ～ 22:22</td>
        </tr>
        <tr>
          <td>定休日</td>
          <td>毎週火曜水曜</td>
        </tr>
      </table>

      <div class="address">
        <p>〒222-2222</p>
        <p>東京都〇〇区〇〇町2-22-222</p>
        <p>ねこねこビル 222階</p>
        <p>TEL 222-2222-2222</p>
        <p>FAX 222-2222-2223</p>
      </div>

    </div>

  </TextBox>

</template>

<style>

</style>

<style scoped>
table {
  width: 100%;
  padding-bottom: 30px;
}
caption {
  text-align: left;
}
.address {
  line-height: 1.9;
}
@media(min-width: 768px) {
  .text-box {
    height: var(--access-map-wide);
    min-height: 600px;
    flex-basis: 250px;
  }
}

@media(max-width: 767.5px) {
  .text-box {
    height: 400px;
    flex-basis: 200px;
    padding: 30px 10px 30px 20px;
  }
}

@media(max-width: 575.5px) {
  .text-box {
    width: 80vw;
    height: auto;
    margin-top: 20px;
  }
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  .text-box {
    width: 80vw;
    height: 80vw;
    padding: 5vw 5vw 7vw 5vw;
  }
}
</style>
