<template>
  <div class="bg-gray-200">
    <div class="relative container pb-12 pt-12">
      <div class="translate-l-full absolute bottom-4 left-4">
        <TriangleSVG />
      </div>
      <div class="translate-r-full absolute top-8 right-24">
        <RectangleSVG />
      </div>
      <div class="row align-center p-0">
        <div class="col-5 p-0">
          <h1>VGQL</h1>
          <p class="font-20">
            The
            <span class="underline-indigo">easy way</span>
            to
            <span class="underline-indigo">create</span>
            your next Vue.js GraphQL project.
          </p>
          <button class="mt-1-5">
            Create your project
          </button>
        </div>
        <div class="col-6 offset-1 p-0">
          <div class="relative bg-gray-900 b-radius-md p-2 pt-4 pb-4">
            <div class="absolute top-0-75 left-0-75 bg-red-600 w-0-75 h-0-75 circle" />
            <div class="yellow-dot absolute top-0-75 left-2 w-0-75 h-0-75 circle" />
            <div class="red-dot absolute top-0-75 bg-green-600 w-0-75 h-0-75 circle" />
            <code class="bl-0 bg-none bg-gray-900 text-gray-200">
              <i class="fas fa-arrow-right text-blue-300" /> vgql<br>
              <span class="text-green-400">?</span> What language would you prefer<br>
              <i class="fas fa-chevron-right text-green-400" /> JavaScript<br>
              <i class="fas fa-chevron-right text-green-400" /> TypeScript
            </code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TriangleSVG from '@/components/TriangleSVG.vue';
import RectangleSVG from '@/components/RectangleSVG.vue';

export default {
  components: {
    TriangleSVG,
    RectangleSVG,
  },
};
</script>

<style lang="scss" scoped>
.yellow-dot {
  background-color: #f6e05e;
}
.red-dot {
  left: 52px;
}

.translate-r-full {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
.translate-l-full {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}

code {
  i {
    font-size: 10px;
  }
}
</style>
