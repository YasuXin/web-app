<script setup>
import TextBox from '@/components/access-parts/TextBox.vue'
import {ref} from "vue";
import FormBox from "@/components/access-parts/FormBox.vue";


</script>

<template>

  <TextBox>
    <div class="text-box">
      <p>当店は存在しないため、アクセス方法はありません。</p>
      <p style="display:block;margin-bottom:20px;">以下のフォームからお問い合せしないでください</p>

      <keep-alive>
        <FormBox></FormBox>
      </keep-alive>

    </div>
  </TextBox>

</template>

<style scoped>
.text-box {
  width: 80vw;

}

</style>
