<script setup>
import TitleBox from '@/components/TitleBox.vue'
import Entry from '@/components/using-parts/Entry.vue'
import Drink from "@/components/using-parts/Drink.vue";
import {ref} from "vue";


const data = ref([
  { id: 1, image: '/public/img/drink1.jpg', alt: 'drink1', name: '青いマタタビドリンク', price: '無料　2杯目以降は666,666円', explain: 'ブルーハワイなのか、違うのか、謎のドリンク。'},
  { id: 2, image: '/public/img/drink2.jpg', alt: 'drink2', name: 'マタタビカフェラテ', price: '無料　2杯目以降は666,666円', explain: 'マタタビ入りのカフェラテだと思う。'},
])

</script>

<template>
  <div class="main-container">

    <transition name="title-fade" appear>
      <TitleBox main="ご利用料金" small="※当店は存在しません"></TitleBox>
    </transition>

    <div class="entry-parent">
      <transition name="fade" appear>
        <Entry></Entry>
      </transition>
    </div>



    <transition name="title-fade" appear>
      <TitleBox main="当店のメニュー" small="※当店は存在しません"></TitleBox>
    </transition>

    <div class="menu-parent">
      <transition-group name="fade" appear>
        <Drink v-for="drink in data" :key="drink.id" :src="drink.image" :alt="drink.alt" :name="drink.name" :price="drink.price" :explain="drink.explain"></Drink>
      </transition-group>
    </div>

  </div>
</template>

<style scoped>
.entry-parent {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 95%;
  margin: 0 auto;
  padding: 20px 0;
  background-image: linear-gradient(45deg, rgba(0,60,0,0.6), rgba(0,60,0,0.2));
  color: #222222;
}

.menu-parent {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  padding: 10px 5%;
  margin: 0 auto 10px;
  width: 95%;
  background-image: linear-gradient(45deg, rgba(255,200,200,0.8), rgba(255,200,200,0.6));
}

@media(max-width: 767.5px) {
  .menu-parent {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 20px 0;
  }
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.72)) {
  .menu-parent {
    flex-direction: column;
  }
}
</style>
