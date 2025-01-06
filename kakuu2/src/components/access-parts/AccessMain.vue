<script setup>
import TitleBox from '@/components/TitleBox.vue'
import Access from "@/components/access-parts/Access.vue";
import Inquiry from "@/components/access-parts/Inquiry.vue";

</script>

<template>
  <div class="main-container">

    <!-- アクセスのタイトル -->
    <transition name="title-fade" appear>
      <TitleBox main="アクセス" small="※当店は存在しません"></TitleBox>
    </transition>

    <!-- アクセス -->
    <div class="access-parent">
      <transition name="fade" appear>
        <Access></Access>
      </transition>
    </div>

    <!-- お問い合わせのタイトル -->
    <transition name="title-fade" appear>
      <TitleBox main="お問い合わせ" small="※"></TitleBox>
    </transition>

    <!-- お問い合わせ -->
    <div class="inquiry-parent">
      <transition name="fade" appear>
        <Inquiry></Inquiry>
      </transition>
    </div>

  </div>
</template>

<style scoped>
.access-parent {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 0;
  margin: 0 auto;
  width: 95%;
  background-image: linear-gradient(45deg, rgba(90, 30, 90, 0.8), rgba(90, 30, 90, 0.2));
}
.inquiry-parent {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
  margin: 0 auto 10px;
  width: 95%;
  background-image: linear-gradient(45deg, rgba(60, 60, 30, 0.8), rgba(60, 60, 30, 0.2));
}
</style>
