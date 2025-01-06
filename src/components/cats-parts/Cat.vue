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
  profile: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="cat">
    <div class="image">
      <img class="wide-img" :src="src" :alt="alt" width="291"/>
      <img class="mid-img" :src="src" :alt="alt" width="191"/>
      <img class="narrow-img" :src="src" :alt="alt" width="251"/>
    </div>
    <div class="profile">
      <h2>{{name}}</h2>
      <p>{{profile}}</p>
    </div>
  </div>
</template>

<style scoped>
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
