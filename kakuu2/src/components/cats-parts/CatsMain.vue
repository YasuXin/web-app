<script setup>
import Cat from '@/components/cats-parts/Cat.vue'
import ShopChild from '@/components/cats-parts/Shop.vue'
import TitleBox from '@/components/TitleBox.vue'
import Circles from '@/components/CirclesAnimation.vue'
import {ref} from "vue";


const data = ref([
  {id: 1, image: "/public/img/cats1.png", alt: "Kuro", name: 'クロ', explain: '5歳のオス。普通の黒猫。人懐こい性格ですぐに膝に乗ってくる。あごの下の白い部分がチャームポイント'},
  {id: 2, image: "/public/img/cats2.png", alt: "Kyuta", name: 'きゅーた', explain: '4歳のオス。狭いところにいることが多い。落ち着いてる人が好きで、慣れると自分から寄ってくる。'},
  {id: 3, image: "/public/img/cats3.png", alt: "Kurimu", name: 'くりむ', explain: '7歳のオス。薄いクリーム色のトラ柄模様で、小さく細い声で甘え声を出す。初対面でも物怖じしない。'},
  {id: 4, image: "/public/img/cats4.png", alt: "Blue", name: 'ブルー', explain: '5歳のメス。雑種だが、オリエンタルなねこの特徴を持っているかも。ちょっと怖がりなので優しくして。'},
  {id: 5, image: "/public/img/cats5.png", alt: "Heinlich", name: 'ハインリッヒ', explain: '4歳のオス。一番懐っこく、小さい子供とでも楽しく遊ぶ。鳴き声が大きい。'},
  {id: 6, image: "/public/img/cats7.png", alt: "Tora", name: 'トラ', explain: '9歳のメス。最高齢のためか、一番落ち着いている。寝てる時間も一番長い。'},
  {id: 7, image: "/public/img/cats6.png", alt: "Iry", name: 'イリー', explain: '年齢不明のオス。イエネコではなく、イリオモテヤマネコである。人には懐かないため、ケージの中にいる。'},
])

</script>

<template>

  <div class="main-container">

    <!-- ねこたちの紹介のタイトル -->
    <transition name="title-fade" appear>
      <TitleBox main="ねこたちの紹介" small="※このねこたちは存在しません"></TitleBox>
    </transition>

    <!-- ねこたちの紹介 -->
    <div class="cats-parent">
      <transition-group name="fade" appear>
        <Cat v-for="cat in data" :key="cat.id" :src="cat.image" :alt='cat.alt' :name="cat.name" :profile="cat.explain"></Cat>
      </transition-group>
    </div>

    <!-- 店内の様子のタイトル -->
    <transition name="title-fade" class="shop-fade" appear>
      <TitleBox main="店内の様子" small="※当店は存在しません"></TitleBox>
    </transition>

    <!-- 店内の様子 -->
    <div class="shop-parent">
      <transition name="fade" appear>
        <ShopChild></ShopChild>
      </transition>
    </div>

    <Circles></Circles>

  </div>

</template>

<style scoped>
.cats-parent {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 2.5%;
  margin: 0 auto;
  width: 95%;
  background-image: linear-gradient(45deg, rgba(30, 30, 90, 0.8), rgba(30, 30, 90, 0.2));
}
.shop-parent {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 2.5%;
  margin: 0 auto 10px;
  width: 95%;
  background-image: linear-gradient(45deg, rgba(90, 60, 30, 0.8), rgba(90, 30, 30, 0));
}

</style>
