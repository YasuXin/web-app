<script setup>
import Cat from '@/components/cats-parts/Cat.vue'
import ShopChild from '@/components/cats-parts/Shop.vue'
import TitleBox from '@/components/TitleBox.vue'
import Circles from '@/components/CirclesAnimation.vue'

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

        <div class="cat">
          <div class="image">
            <img class="wide-img" src="/public/img/cats1.png" :alt="クロ" width="291"/>
            <img class="mid-img" src="/public/img/cats1.png" :alt="クロ" width="191"/>
            <img class="narrow-img" src="/public/img/cats1.png" :alt="クロ" width="251"/>
          </div>
          <div class="profile">
            <h2>クロ</h2>
            <p>5歳のオス。普通の黒猫。人懐こい性格ですぐに膝に乗ってくる。あごの下の白い部分がチャームポイント</p>
          </div>
        </div>

        <div class="cat">
          <div class="image">
            <img class="wide-img" src="/public/img/cats2.png" alt="きゅーた" width="291"/>
            <img class="mid-img" src="/public/img/cats2.png" alt="きゅーた" width="191"/>
            <img class="narrow-img" src="/public/img/cats2.png" alt="きゅーた" width="251"/>
          </div>
          <div class="profile">
            <h2>きゅーた</h2>
            <p>4歳のオス。狭いところにいることが多い。落ち着いてる人が好きで、慣れると自分から寄ってくる。</p>
          </div>
        </div>

        <div class="cat">
          <div class="image">
            <img class="wide-img" src="/public/img/cats3.png" alt="くりむ" width="291"/>
            <img class="mid-img" src="/public/img/cats3.png" alt="くりむ" width="191"/>
            <img class="narrow-img" src="/public/img/cats3.png" alt="くりむ" width="251"/>
          </div>
          <div class="profile">
            <h2>くりむ</h2>
            <p>7歳のオス。薄いクリーム色のトラ柄模様で、小さく細い声で甘え声を出す。初対面でも物怖じしない。</p>
          </div>
        </div>

        <div class="cat">
          <div class="image">
            <img class="wide-img" src="/public/img/cats4.png" alt="ブルー" width="291"/>
            <img class="mid-img" src="/public/img/cats4.png" alt="ブルー" width="191"/>
            <img class="narrow-img" src="/public/img/cats4.png" alt="ブルー" width="251"/>
          </div>
          <div class="profile">
            <h2>ブルー</h2>
            <p>5歳のメス。雑種だが、オリエンタルなねこの特徴を持っているかも。ちょっと怖がりなので優しくして。</p>
          </div>
        </div>

        <div class="cat">
          <div class="image">
            <img class="wide-img" src="/public/img/cats5.png" alt="ハインリヒ" width="291"/>
            <img class="mid-img" src="/public/img/cats5.png" alt="ハインリヒ" width="191"/>
            <img class="narrow-img" src="/public/img/cats5.png" alt="ハインリヒ" width="251"/>
          </div>
          <div class="profile">
            <h2>ハインリヒ</h2>
            <p>4歳のオス。一番懐っこく、小さい子供とでも楽しく遊ぶ。鳴き声が大きい。</p>
          </div>
        </div>

        <div class="cat">
          <div class="image">
            <img class="wide-img" src="/public/img/cats6.png" alt="トラ" width="291"/>
            <img class="mid-img" src="/public/img/cats6.png" alt="トラ" width="191"/>
            <img class="narrow-img" src="/public/img/cats6.png" alt="トラ" width="251"/>
          </div>
          <div class="profile">
            <h2>トラ</h2>
            <p>9歳のメス。最高齢のためか、一番落ち着いている。寝てる時間も一番長い。</p>
          </div>
        </div>

        <div class="cat">
          <div class="image">
            <img class="wide-img" src="/public/img/cats7.png" alt="イリー" width="291"/>
            <img class="mid-img" src="/public/img/cats7.png" alt="イリー" width="191"/>
            <img class="narrow-img" src="/public/img/cats7.png" alt="イリー" width="251"/>
          </div>
          <div class="profile">
            <h2>イリー</h2>
            <p>年齢不明のオス。イエネコではなく、イリオモテヤマネコである。人には懐かないため、ケージの中にいる。</p>
          </div>
        </div>

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

.cat {
  background-image: linear-gradient(0, rgba(90, 90, 90, 1), rgba(90, 90, 90, 0.6));
  border: solid 4px #ccc;
  border-radius: 10px;
}
.image {
  margin:10px;
}
.image img {
  border: solid 5px #ddd;
  border-radius: 10px;
}
.wide-img {
  display: inline-block;
}
.narrow-img, .mid-img {
  display: none;
}
h2 {
  display: inline-block;
  padding-left: 10px;
  font-size: var(--font-size-h2-medium);
  font-weight: bold;
  color: #fff;
}
p {
  display: inline-block;
  padding: 5px 10px 20px;
  color: #eef;
  font-size: var(--font-size-p-medium);
}

/* SO WIDE */
@media(min-width: 960px) {
  .cat {
    flex-basis: 341px;
    margin: 5px 2.5%;
  }
  .image {
    height: 291px;
    margin: 25px 25px;
  }
}

/* WIDE */
@media(max-width: 959.5px) {
  .cat {
    flex-basis: 311px;
    margin: 5px 1.5%;
  }
  .image {
    height: 291px;
    margin: 10px 12.9px;
  }
}

@media(max-width:767.5px) {
  .cat {
    flex-basis: 211px;
    margin: 3px 1.35%;
  }
  .image {
    height: 191px;
    margin: 7px;
  }
  .mid-img {
    display: inline-block;
  }
  .narrow-img, .wide-img {
    display: none;
  }
  h2 {
    font-size: var(--font-size-h2-small);
  }
  p {
    font-size: var(--font-size-p-medium);
  }
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  .cat {
    flex-basis: 271px;
  }
  .image {
    height: 251px;
  }
  .wide-img, .mid-img{
    display: none;
  }
  .narrow-img {
    display: inline-block;
  }
}
</style>
