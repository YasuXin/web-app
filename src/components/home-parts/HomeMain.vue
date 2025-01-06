<script setup>
import TextBox from '@/components/TextBox.vue'
import TitleBox from "@/components/TitleBox.vue";
import News from "@/components/home-parts/LatestNews.vue";
import ToAbout from "@/components/home-parts/ToAbout.vue";

</script>

<template>
  <div class="main-container">
    <div class="text-box-parent">
      <TextBox>
        <h2>架空ねこカフェ</h2>
        <p>ここは存在しないねこカフェ。</p>
        <p>かわいいねこちゃんたちと</p>
        <p>触れ合うことができません。</p>
        <p>心ゆくまで、</p>
        <p>楽しんでいかないでくださいね。</p>
        <div class="to-about-parent">
          <ToAbout></ToAbout>
        </div>
        <img src="/public/img/cat_hand.png" alt="" width="150" class="cat-hand-l">
        <img src="/public/img/cat_hand.png" alt="" width="130" class="cat-hand-m">
      </TextBox>
    </div>

    <transition name="title-fade" appear>
      <TitleBox main="最新ニュース"></TitleBox>
    </transition>

    <div class="news-parent">
      <News></News>
    </div>

  </div>
</template>

<style scoped>
.text-box-parent {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 500px;
  margin: 0 2.5%;
}

@media(min-width: 960px) {
  .main-container {
    background-image: url("/img/home-back-image1.png");
    background-repeat: no-repeat;
  }
  .text-box-parent {
    width: 500px;
  }
}
@media(max-width: 959.5px) {
  .main-container {
    background-image: url("/img/home-back-image2.png");
    background-repeat: no-repeat;
  }
  .text-box-parent {
    width: 400px;
  }
}
@media(max-width: 575.5px) {
  .main-container {
    background-image: url("/img/home-back-image3.png");
    background-repeat: no-repeat;
  }
  .text-box-parent {
    width: calc(100% - 20px);
  }
}

::v-deep(.text-box) {
  position: relative;
}
.cat-hand-l {
  position: absolute;
  left: auto;
  right: 20px;
  bottom: 20px;
}
.cat-hand-m {
  display: none;
}

.news-parent {
  width: 100%;
}

.to-about-parent {
  width: 180px;
  height: 50px;
  margin-top: 20px;
}

@media(max-width: 959.5px) {
  .cat-hand-l {
    right: 20px;
  }
  p {
    padding-bottom: 5px;
  }
}

@media(max-width: 575.5px) {
  .cat-hand-l {
    left: auto;
    right: 20px;
  }
  .to-about-parent {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  .cat-hand-l {
    display: none;
  }
  .cat-hand-m {
    display: block;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
  .to-about-parent {
    width: 45vw;
    height: 10vw;
    margin-left: 10vw;
  }

}
</style>
