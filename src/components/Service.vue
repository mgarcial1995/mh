<template>
  <div class="box__service">
    <!-- <div>image</div> -->
    <img :src="image" :alt="name" />
    <div class="box__service__filter">
      <p class="box__service__filter--title">  {{ name }}</p>
    </div>
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
