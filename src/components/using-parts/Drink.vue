<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  explain: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="menu">
    <div class="image">
      <img class="wide-img" :src="src" :alt="alt" width="291"/>
      <img class="mid-img" :src="src" :alt="alt" width="191"/>
      <img class="narrow-img" :src="src" :alt="alt" width="251"/>
    </div>
    <div class="item">
      <h2>{{name}}</h2>
      <p>{{price}}</p>
      <p>{{explain}}</p>
    </div>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  background-image: linear-gradient(0, rgba(60, 60, 60, 0.9), rgba(60, 60, 60, 0.6));
  border: solid 4px #ccc;
  border-radius: 10px;
  margin: 10px 0;
}
.image {
  height: 291px;
  width: 291px;
}
.image img {
  border: solid 5px #eee;
  border-radius: 10px;
}

.item {
  color: #fff;
}
h2 {
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  font-size: var(--font-size-h2-small);
  border-left: 5px solid #ccc;
  background-image: linear-gradient(45deg, rgba(0,0,0,0.4), rgba(0,0,0,0.3));
}
p {
  display: inline-block;
  padding: 10px 10px 0;
  font-size: var(--font-size-p-medium);
}

@media(min-width: 768px) {
  .menu {
    flex-direction: row;
    width: 700px;
  }
  .image {
    margin: 20px 30px;
  }
  .wide-img {
    display: inline-block;
  }
  .narrow-img, .mid-img {
    display: none;
  }
  h2 {
    width: 300px;
    margin-top: 50px;
    margin-bottom: 10px;
  }
  p {
    width: 300px;
  }
}

@media(max-width: 767.5px) {
  .menu {
    flex-direction: column;
    flex-basis: 231px;
    padding-bottom: 30px;
  }
  .image {
    margin: 20px auto;
    height: 191px;
    width: 191px;
  }
  .mid-img {
    display: inline-block;
  }
  .narrow-img, .wide-img {
    display: none;
  }
  h2 {
    font-size: var(--font-size-h2-smaller);
  }
  p {
    font-size: var(--font-size-p-small);
  }
  h2, p {
    width: 90%;
    padding-top: 0;
    margin: 5px 5%;
  }
}

/* SP */
@media(max-width: 500px) and (min-height: calc(100vw * 1.2)) {
  .menu {
    width: 291px;
  }
  .image {
    width: 251px;
    height: 251px;
  }
  .wide-img, .mid-img {
    display: none;
  }
  .narrow-img{
    display: inline-block;
  }
}
</style>
