<script setup>
import {reactive} from "vue";

const colors = ['#ffffcc', '#ffccff', '#ccffff', '#ffff99', '#ff99ff',
  '#99ffff', '#ff9999', '#9999ff', '#99ff99', '#cccccc']

/* 正円のアニメーションのメソッド　ここから */
let circlesData = reactive({
  X1: calcRandomWidth(),
  Y1: calcRandomHeight(),
  size1: calcRandomSize(),
  color1: getColor(),
  X2: calcRandomWidth(),
  Y2: calcRandomHeight(),
  size2: calcRandomSize(),
  color2: getColor(),
  X3: calcRandomWidth(),
  Y3: calcRandomHeight(),
  size3: calcRandomSize(),
  color3: getColor(),
  X4: calcRandomWidth(),
  Y4: calcRandomHeight(),
})
/* X軸 */
setInterval(() => {
  circlesData.X1 = calcRandomWidth()
  circlesData.Y1 = calcRandomHeight()
  circlesData.size1 = calcRandomSize()
  circlesData.color1 = getColor()
}, 1500)
setInterval(() => {
  circlesData.X2 = calcRandomWidth()
  circlesData.Y2 = calcRandomHeight()
  circlesData.size2 = calcRandomSize()
  circlesData.color2 = getColor()
}, 2000)
setInterval(() => {
  circlesData.X3 = calcRandomWidth()
  circlesData.Y3 = calcRandomHeight()
  circlesData.size3 = calcRandomSize()
  circlesData.color3 = getColor()
}, 1800)
setInterval(() => {
  circlesData.X4 = calcRandomWidth()
  circlesData.Y4 = calcRandomHeight()
}, 30000)

function calcRandomWidth() {
  return Math.floor(Math.random() * window.innerWidth) + 'px'
}

function calcRandomHeight() {
  return Math.floor(Math.random() * window.innerHeight) + 'px'
}

function calcRandomSize() {
  let size = Math.floor(Math.random() * 50)
  if(size < 20) {
    return size * 2
  }
  else if(size <= 10) {
    return size * 4
  }
  return size
}

function getColor() {
  return colors[Math.floor(Math.random() * 10)]
}
/* 正円のアニメーションのメソッド　ここまで */
</script>

<template>
  <teleport to="#cats-circle">
    <div id="circles">
      <svg id="circle1" class="circle" :width="circlesData.size1" :height="circlesData.size1" xmlns="http://www.w3.org/2000/svg">
        <circle :cx="(circlesData.size1)/2" :cy="(circlesData.size1)/2" :r="(circlesData.size1)/2" :fill="circlesData.color1" />
      </svg>
      <svg id="circle2" class="circle" :width="circlesData.size2" :height="circlesData.size2" xmlns="http://www.w3.org/2000/svg">
        <circle :cx="(circlesData.size2)/2" :cy="(circlesData.size2)/2" :r="(circlesData.size2)/2" :fill="circlesData.color2"/>
      </svg>
      <svg id="circle3" class="circle" :width="circlesData.size3" :height="circlesData.size3" xmlns="http://www.w3.org/2000/svg">
        <circle :cx="(circlesData.size3)/2" :cy="(circlesData.size3)/2" :r="(circlesData.size3)/2" :fill="circlesData.color3"/>
      </svg>

      <img class="circle" id="circle4" src="/img/cat-circle.png" alt="" width="100" height="100">

    </div>
  </teleport>
</template>

<style scoped>
.circle {
  animation: circle-animation;
  animation-timing-function: linear;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
}
#circle1 {
  position: fixed;
  top: v-bind(circlesData.Y1);
  left: v-bind(circlesData.X1);
  animation-duration: 1.5s;
}
#circle2 {
  position: fixed;
  top: v-bind(circlesData.Y2);
  left: v-bind(circlesData.X2);
  animation-duration: 2s;
  animation-delay: 0.7s;
}
#circle3 {
  position: fixed;
  top: v-bind(circlesData.Y3);
  left: v-bind(circlesData.X3);
  animation-duration: 1.8s;
  animation-delay: 1.8s;
}
#circle4 {
  position: fixed;
  top: v-bind(circlesData.Y4);
  left: v-bind(circlesData.X4);
  animation-name: circle-animation2;
  animation-duration: 30s;
  animation-delay: 10s;
}
@keyframes circle-animation {
  0% {transform:scale(0); opacity:0;}
  20% {transform:scale(1); opacity:0.5;}
  50% {transform:scale(2.2); opacity:0; filter:blur(2px);}
  100% {transform:scale(0); opacity:0;}
}
@keyframes circle-animation2 {
  0% {transform:scale(0); opacity:0;}
  4% {transform:scale(1); opacity:1;}
  10% {transform:scale(2.2); opacity:0; filter:blur(2px);}
  100% {transform:scale(0); opacity:0;}
}

</style>
