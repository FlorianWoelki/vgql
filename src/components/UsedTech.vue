<template>
  <div class="col-3 center mt-2">
    <img
      :src="require(`@/assets/tech/${image}.png`)"
      alt="vuejs"
    >
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
img {
  width: 100px;
  height: 100px;
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
  opacity: 0.333;
}
</style>
