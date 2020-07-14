<template>
  <div class="box__service">
    <div>image</div>
    <!-- <img :src="image" :alt="name" /> -->
    <div class="box__service__filter"></div>
    <p class="box__service__title">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: {
    name: { type: String },
    image: { type: String }
  }
};
</script>
